import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import { ContenedorAlumnoAP } from './Promedio/ContenedorAlumnoAP';
import { ContenedorAlumnoRE } from './Promedio/ContenedorAlumnoRE';

export default function ComponenteAlumno() {
  
  const materia1 = 10;
  const materia2 = 8;
  const promedio = (materia1 + materia2) /2;
  const [conteo,setConteo] =useState(0)

  const sumanumeros =()=>{
setConteo (conteo+1)
  }

  const restarnumero =()=>{
    setConteo (conteo-1)
      }
   if(promedio > 8){
    return (


    <ContenedorAlumnoAP
    calificacion={promedio}
    conteo={conteo}
    sumanumeros={sumanumeros}
    
    />
        
      )

   } else {
    return (

    
        <div>
           <ContenedorAlumnoRE
           calificacion={promedio}
           Conteo= {conteo}
           restarnumero={restarnumero}
           /> 
        </div>
      )
   } 
  
  
}
