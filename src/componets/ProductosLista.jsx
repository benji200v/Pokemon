import React, {useState} from 'react'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'
import ProductoVerdura from './ProductoVerdura'

const ProductosLista = () => {

const [luz,setLuz] = useState(false)
const cambioestado = () =>{
    setLuz(!luz)
}
console.log('luz esta en:', luz)

  return (
    <div>
        <FormControlLabel
          label="Luz cuarto"
          control={
            <Switch
              value={luz}
              checked={luz}
              onChange={cambioestado}
              
            />
          }
        />
        <Typography variant={luz ? "h1":"h3"} color= {luz ? "success": "error"}>LUZ CUARTO</Typography>
 <Divider/> 

 <ProductoVerdura/>

    </div>

  )
}

export default ProductosLista