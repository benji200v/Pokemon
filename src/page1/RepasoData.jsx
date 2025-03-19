import  React from "react";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography'
import ContenidoLibros from "./ContenidoLibros";


export default function RepasoData (){
    const data = {
        "store": {
            "book": [
                {
                    "category": "reference",
                    "author": "Nigel Rees",
                    "title": "Sayings of the Century",
                    "price": 8.95,
                    "in-stock": true,
                    "sold": true
                },
                {
                    "category": "fiction",
                    "author": "Evelyn Waugh",
                    "title": "Sword of Honour",
                    "price": 12.99,
                    "in-stock": false,
                    "sold": true
                },
                {
                    "category": "fiction",
                    "author": "Herman Melville",
                    "title": "Moby Dick",
                    "isbn": "0-553-21311-3",
                    "price": 8.99,
                    "in-stock": true,
                    "sold": false
                },
                {
                    "category": "fiction",
                    "author": "J. R. R. Tolkien",
                    "title": "The Lord of the Rings",
                    "isbn": "0-395-19395-8",
                    "price": 22.99,
                    "in-stock": false,
                    "sold": false
                }
            ],
            "bicycle": {
                "color": "red",
                "price": 19.95,
                "instock": true,
                "sold": false
            }
        }
    }

return (
    <div>
        <br/>
        <Grid container padding={4}  spacing={3}>
            <Grid size={{xs: 12, md: 4}}>
                <Paper style={{padding: 20}}>
                    <Typography variant="h4" color="initial">PROMOCION SOLO HOY </Typography>
                    <Typography variant="h5" color="initial">Bicicleta de montaña </Typography>
                    <divider/>
                    Descripcion


                    <Typography variant="body1" color="initial">color: {data.store.bicycle.color}</Typography>
                    <Typography variant="body2" color="initial"> Precio:${data.store.bicycle.price}</Typography>
                    <Typography variant="body3" color="initial"> disponibilidad: {data.store.bicycle.instock ? "Si": "No"}</Typography>
                </Paper>
            </Grid>
            
        </Grid>
        <Typography style={{padding:30}} variant="h3" color="initial">Libro en venta</Typography>
        
        <ContenidoLibros
        libros={data.store.book}
        />

    </div>


)

}