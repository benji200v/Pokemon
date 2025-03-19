import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Card, CardMedia, CardContent, CircularProgress } from "@mui/material";

export default function DetalleReceta() {
    const { idMeal } = useParams();
    const [receta, setReceta] = useState(null);

    useEffect(() => {
        const obtenerReceta = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
                const data = await response.json();
                setReceta(data.meals[0]);
            } catch (error) {
                console.error("Error al obtener la receta:", error);
            }
        };

        obtenerReceta();
    }, [idMeal]);

    if (!receta) return <CircularProgress />;

    return (
        <Card style={{ maxWidth: 600, margin: "auto", marginTop: 20 }}>
            <CardMedia
                component="img"
                height="300"
                image={receta.strMealThumb}
                alt={receta.strMeal}
            />
            <CardContent>
                <Typography variant="h4" gutterBottom>{receta.strMeal}</Typography>
                <Typography variant="body1"><strong>Instrucciones:</strong> {receta.strInstructions}</Typography>
                <Typography variant="h6" gutterBottom>Ingredientes:</Typography>
                <ul>
                    {[...Array(20)].map((_, i) => {
                        const ingrediente = receta[`strIngredient${i + 1}`];
                        const medida = receta[`strMeasure${i + 1}`];
                        return ingrediente ? <li key={i}>{medida} {ingrediente}</li> : null;
                    })}
                </ul>
            </CardContent>
        </Card>
    );
}
