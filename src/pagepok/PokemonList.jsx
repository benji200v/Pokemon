import React, { useEffect, useState } from 'react';
import { Container, Grid, CircularProgress, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then(response => response.json())
      .then(data => {
        setPokemonList(data.results);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <Container>
      <Typography variant="h4">Lista de Pokémon</Typography>
      <Grid container spacing={3}>
        {pokemonList.map(pokemon => (
          <Grid item xs={12} sm={6} md={4} key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`} style={{ textDecoration: 'none' }}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
                  alt={pokemon.name}
                />
                <CardContent>
                  <Typography variant="h5">{pokemon.name}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}