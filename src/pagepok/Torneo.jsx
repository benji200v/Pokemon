import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, CircularProgress, Box, TextField } from '@mui/material';

export default function Torneo() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(response => response.json())
      .then(data => {
        const promises = data.results.map(pokemon =>
          fetch(pokemon.url).then(response => response.json())
        );
        Promise.all(promises).then(pokemonData => {
          const types = {};
          pokemonData.forEach(pokemon => {
            pokemon.types.forEach(type => {
              if (!types[type.type.name]) {
                types[type.type.name] = [];
              }
              types[type.type.name].push(pokemon);
            });
          });
          setPokemonList(pokemonData);
          setPokemonTypes(types);
          setFilteredPokemons(pokemonData); // Inicializar con todos los Pokémon
          setSelectedPokemons([pokemonData[0], pokemonData[1]]);
          setLoading(false);
        });
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSearch = () => {
    const filtered = pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemons(filtered);
  };

  const handleSelectPokemon = (pokemon) => {
    if (selectedPokemons.length < 5 && !selectedPokemons.includes(pokemon)) {
      setSelectedPokemons([...selectedPokemons, pokemon]);
    }
  };

  const handleSubmit = () => {
    alert('¡Felicidades! Eres parte del siguiente torneo Pokémon');
  };

  if (loading) return <CircularProgress />;

  return (
    <Container sx={{ textAlign: 'center', marginTop: 4 }}>
      <Typography variant="h3" gutterBottom>Torneo Pokémon</Typography>

      {/* Search Bar y Botón */}
      <Box sx={{ marginBottom: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <TextField
          label="Buscar Pokémon"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Buscar
        </Button>
      </Box>

      {/* Mostrar Pokémon Filtrados */}
      <Grid container spacing={3}>
        {filteredPokemons.map(pokemon => (
          <Grid item xs={12} sm={6} md={4} key={pokemon.name}>
            <Card onClick={() => handleSelectPokemon(pokemon)}>
              <CardMedia
                component="img"
                height="140"
                image={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
              <CardContent>
                <Typography variant="h5">{pokemon.name}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => alert(`Seleccionaste a ${pokemon.name}`)}
                >
                  Seleccionar
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pokémon Seleccionados */}
      <Typography variant="h5" gutterBottom sx={{ marginTop: 4 }}>Pokémon Seleccionados</Typography>
      <Grid container spacing={3}>
        {selectedPokemons.map(pokemon => (
          <Grid item xs={12} sm={6} md={4} key={pokemon.name}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
              <CardContent>
                <Typography variant="h5">{pokemon.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Botón de Inscripción */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={selectedPokemons.length !== 3}
        sx={{ marginTop: 3 }}
      >
        Inscribirse
      </Button>
    </Container>
  );
}
