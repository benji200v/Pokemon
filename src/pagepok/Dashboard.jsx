import React, { useState, useEffect } from "react";
import { Container, TextField, Typography, Grid, Card, CardContent, CardMedia, Paper } from "@mui/material";

export default function Dashboard() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => response.json())
      .then((data) => setPokemons(data.results));
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.includes(search.toLowerCase())
  );

  return (
    <Container sx={{ textAlign: "center", marginTop: 4 }}>
      <Typography variant="h3" gutterBottom>Dashboard</Typography>
      <TextField
        fullWidth
        label="Buscar Pokémon..."
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        margin="normal"
      />
      <Paper elevation={3} sx={{ bgcolor: "#a8e6a3", padding: 2, borderRadius: 2, marginTop: 2 }}>
        <Grid container spacing={3}>
          {filteredPokemons.map((pokemon, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}