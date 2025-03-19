import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function PageDash() {
  return (
    <div>
      <h1>Page Dash</h1>
      <li><Link to='/dash/mexico'>Mexico</Link></li>
      <li><Link to='/dash/usa'>USA</Link></li>
      <li><Link to='/dash/23'> ID</Link></li>

      <Button variant="contained" color="primary"
      LinkComponent={Link} to="/dash/holamundo">
     Ver mas 
      </Button>
    </div>
  );
}