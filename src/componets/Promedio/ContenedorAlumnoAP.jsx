import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';


export const ContenedorAlumnoAP = (props) => {
  return (
    <div> 
        <Typography variant="h2" color="success">aprovado</Typography> 
        <h2>tu calificacion es: {props.calificacion} </h2>
        <button onClick={props.sumanumeros} variant= "contained" color='primary'>
            Clik suma
        </button>
        <h3>conteo: {props.conteo}</h3>
        </div>
    
  )
}
