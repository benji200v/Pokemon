import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Button,
} from "@mui/material";

export default function Dashboard() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((response) => response.json())
      .then((data) => setPokemons(data.results));
  }, []);

 
  const handleSearch = () => {
    if (search.trim() === "") {
      alert("Por favor, ingresa un nombre de Pokémon para buscar.");
      return;
    }
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.includes(search.toLowerCase())
    );
    setFilteredPokemons(filtered);
  };

  return (
    <Container sx={{ textAlign: "center", marginTop: 4 }}>
      <Typography variant="h3" gutterBottom>
        Dashboard
      </Typography>

      
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={8} md={6}>
          <TextField
            fullWidth
            label="Buscar Pokémon..."
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            margin="normal"
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            sx={{ height: "56px", marginTop: "8px" }}
          >
            Buscar
          </Button>
        </Grid>
      </Grid>

      
      <Paper
        elevation={3}
        sx={{ bgcolor: "#a8e6a3", padding: 2, borderRadius: 2, marginTop: 2 }}
      >
        <Grid container spacing={3}>
          {filteredPokemons.length === 0 ? (
            <Typography variant="h6" sx={{ margin: 2, width: "100%" }}>
              No se encontraron resultados. 🕵️‍♂️
            </Typography>
          ) : (
            filteredPokemons.map((pokemon, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
                    alt={pokemon.name}
                    style={{ objectFit: "contain", backgroundColor: "#f5f5f5" }}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      align="center"
                      style={{ textTransform: "capitalize" }}
                    >
                      {pokemon.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Paper>
    </Container>
  );
}
