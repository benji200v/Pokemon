import { useState } from "react";
import data from "../Data"; 
import ProductItem from "./ProductItem";
import { Container, TextField, Typography } from "@mui/material";

const ProductList = () => {
    const [search, setSearch] = useState("");

    
    const products = [...data.store.book, data.store.bicycle];

    const handleBuy = (name) => {
        alert(`Has comprado: ${name}`);
    };

    const filteredProducts = products.filter((product) => 
        (product.title || product.name).toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Tienda</Typography>
            <TextField 
                label="Buscar producto..." 
                variant="outlined" 
                fullWidth 
                margin="normal"
                onChange={(e) => setSearch(e.target.value)}
            />
            {filteredProducts.map((product, index) => (
                <ProductItem key={index} product={product} handleBuy={handleBuy} />
            ))}
        </Container>
    );
};

export default ProductList;