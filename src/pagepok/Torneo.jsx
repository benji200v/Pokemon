import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, CircularProgress, Box } from '@mui/material';


export default function Torneo() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState({});

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
          // Inicializar con dos Pokémon predeterminados
          setSelectedPokemons([pokemonData[0], pokemonData[1]]);
          setLoading(false);
        });
      })
      .catch(() => setLoading(false));
  }, []);

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
      {Object.keys(pokemonTypes).map(type => (
        <Box key={type} sx={{ marginBottom: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ backgroundColor: '#f0f0f0', padding: 2, borderRadius: 1 }}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Typography>
          <Grid container spacing={3}>
            {pokemonTypes[type].map(pokemon => (
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
                    <Button variant="contained" color="primary" onClick={() => alert(`Seleccionaste a ${pokemon.name}`)}>
                      Seleccionar
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
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