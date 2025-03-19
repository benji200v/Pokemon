import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';


export const ContenedorAlumnoRE = (props) => {
  return (
    <div>
        <Typography variant="h2" color="error">Reprobado</Typography> 
        <h2>Tu calificacion: {props.calificacion}</h2>
        <button onClick={props.restarnumero} variant= "contained" color='primary'>
            Clik resta
        </button>
        <h3>conteo:{props.Conteo}</h3>
        </div>
  )
}
