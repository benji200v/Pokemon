import React from "react";
import Grid from '@mui/material/Grid';
import { Paper, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Contenidoresetas(props) {
    console.log('datos desde hijo:', props.data);

    return (
        <div>
            {!props.data || props.data.length === 0 ? (
                <Typography variant="h5" color="initial">No se encontraron resultados</Typography>
            ) : (
                <>
                    <Grid container padding={4} spacing={4}>
                        {props.data.map((reseta, index) => {
                           
                            const ingredientes = [];
                            for (let i = 1; i <= 20; i++) {
                                const ingrediente = reseta[`strIngredient${i}`];
                                if (ingrediente && ingrediente.trim() !== "") {
                                    ingredientes.push(ingrediente);
                                }
                            }

                            return (
                                <Grid key={index} item xs={12} md={6}>
                                    <Paper style={{ padding: 10 }}>
                                        <img 
                                            src={reseta.strMealThumb} 
                                            alt={reseta.strMeal} 
                                            style={{ width: 350, borderRadius: 10 }} 
                                        />
                                        <Typography variant="h6">{reseta.strMeal}</Typography>
                                        <Typography>Name: {reseta.strMeal}</Typography>

                                        {/* Acordeón con ingredientes */}
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ArrowDownwardIcon />}
                                                aria-controls={`panel${index}-content`}
                                                id={`panel${index}-header`}
                                            >
                                                <Typography>Ingredientes</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography variant="h6">Ingredientes:</Typography>
                                                <ul>
                                                    {ingredientes.length > 0 ? (
                                                        ingredientes.map((ing, i) => <li key={i}>{ing}</li>)
                                                    ) : (
                                                        <Typography>No hay ingredientes disponibles</Typography>
                                                    )}
                                                </ul>
                                            </AccordionDetails>
                                        </Accordion>

                                        {/* Acordeón con paso a paso */}
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ArrowDownwardIcon />}
                                                aria-controls={`panel${index}-steps-content`}
                                                id={`panel${index}-steps-header`}
                                            >
                                                <Typography>Paso a paso</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>{reseta.strInstructions || "No hay instrucciones disponibles"}</Typography>
                                            </AccordionDetails>
                                        </Accordion>

                                        {/* Botón con link dinámico */}
                                        <Button
                                            onClick={() => window.open(reseta.strYoutube, "_blank")}
                                            variant="contained"
                                            color="primary"
                                            style={{ marginTop: 10 }}
                                        >
                                            Ver en YouTube
                                        </Button>
                                    </Paper>
                                </Grid>
                            );
                        })}
                    </Grid>
                </>
            )}
        </div>
    );
}
