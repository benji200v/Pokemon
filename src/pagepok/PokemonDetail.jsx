import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, CircularProgress } from '@mui/material';

export default function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(data => {
        setPokemon(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [name]);

  if (loading) return <CircularProgress />;
  if (!pokemon) return <Typography variant="h6">Pokémon no encontrado</Typography>;

  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <CardContent>
        <Typography variant="h5">{pokemon.name.toUpperCase()}</Typography>
        <Typography variant="body1">Peso: {pokemon.weight}</Typography>
        <Typography variant="body1">Altura: {pokemon.height}</Typography>
        <Typography variant="body1">Tipo: {pokemon.types.map(type => type.type.name).join(', ')}</Typography>
      </CardContent>
    </Card>
  );
}