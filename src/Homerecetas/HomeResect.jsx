import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Contenidoresetas from "./Contenidoresetas";

export default function Homeresect() {
    const [textobuscar, setTextobuscar] = useState('');
    const [data, setData] = useState({ meals: [] });

    console.log('Datos de input:', textobuscar);
    console.log('Data almacenada:', data);

    // Limpiar datos cuando el usuario cambie de página
    useEffect(() => {
        return () => {
            setData({ meals: [] }); // Vaciar los datos al desmontar el componente
        };
    }, []);

    const buscarcomida = async () => {
        if (textobuscar === "") {
            alert('Escribe algo primero');
        } else {
            const buscar = textobuscar.trim();
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };

            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${buscar}`, requestOptions);
                const result = await response.json();
                console.log(result);
                setData(result);
            } catch (error) {
                console.error(error);
            };
        }
    };

    return (
        <div>
            <Grid container padding={4} spacing={2}>
                <Grid item xs={10}>
                    <TextField 
                        onChange={e => setTextobuscar(e.target.value)} 
                        fullWidth 
                        label="Comida" 
                        variant="filled" 
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button onClick={buscarcomida} variant="contained" endIcon={<SendIcon />}>
                        Buscar
                    </Button>
                </Grid>
            </Grid>

            <Contenidoresetas data={data.meals} />
        </div>
    );
}
