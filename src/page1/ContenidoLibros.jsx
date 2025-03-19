import React from "react";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function ContenidoLibros(props) {
    console.log("Los datos que me envían son:", props.libros);

    return (
        <div>
            <Grid container padding={4} spacing={3}>
                {props.libros.map((libro, index) => (
                    <Grid item xs={12} md={4} key={index}> 
                        <Paper style={{ padding: 20 }}>
                            Soy hijo 1
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
