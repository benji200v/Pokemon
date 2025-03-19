import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Button, Divider } from '@mui/material';
import Tablaproducto2 from './TablaProducto/Tablaproducto2';

const ProductoVerdura = () => {
  const productosverdura = [
    { id: 1, nombre: 'Tomate', categoria: 'verdura', precio: 7, cantidad: 50,  },
    { id: 2, nombre: 'Cebolla', categoria: 'verdura', precio: 20, cantidad: 30,  },
    { id: 3, nombre: 'Apio', categoria: 'verdura', precio: 23, cantidad: 20,  },
    { id: 4, nombre: 'Ajo', categoria: 'verdura', precio: 1, cantidad: 100,  },
    { id: 5, nombre: 'Lechuga', categoria: 'verdura', precio: 20, cantidad: 40, },
  ];

  
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const handleMostrarStock = (producto) => {
    setProductoSeleccionado(productoSeleccionado?.id === producto.id ? null : producto);
  };

  return (
    <div>
      <Typography variant="h4" color="initial">
        Tienda Hambreada UT
      </Typography>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {productosverdura.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.categoria}</td>
              <td>${producto.precio}</td>
              <td>  </td>
              <td>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleMostrarStock(producto)}
                >
                  Stock
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {productoSeleccionado && (
        <div >
          <Typography variant="h6" color="primary">
            Detalles del Producto
          </Typography>
          <Typography variant="body1">
            <strong>Nombre:</strong> {productoSeleccionado.nombre}
          </Typography>
          <Typography variant="body1">
            <strong>Categoría:</strong> {productoSeleccionado.categoria}
          </Typography>
          <Typography variant="body1">
            <strong>Precio:</strong> {productoSeleccionado.precio}
          </Typography>
          <Typography variant="body1">
            <strong>Cantidad Disponible:</strong> {productoSeleccionado.cantidad} unidades
          </Typography>
          <Typography variant="body1">
            <strong>Proveedor:</strong> {productoSeleccionado.proveedor}
          </Typography>
        </div>
      )}

      <Divider />
      

      <Tablaproducto2 data={productosverdura} />
    </div>
  );
};

export default ProductoVerdura;
