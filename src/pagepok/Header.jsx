import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#4caf50' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Pokémon App
        </Typography>
        <Button sx={{ color: '#d2b48c' }} component={Link} to="/">Dashboard</Button>
        <Button sx={{ color: '#d2b48c' }} component={Link} to="/pokemon-list">Lista de Pokémon</Button>
        <Button sx={{ color: '#d2b48c' }} component={Link} to="/Torneo">Torneo Pokémon</Button>
      </Toolbar>
    </AppBar>
  );
}