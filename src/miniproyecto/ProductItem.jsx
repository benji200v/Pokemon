import { Button, Card, CardContent, Typography } from "@mui/material";

const ProductItem = ({ product, handleBuy }) => {
    return (
        <Card sx={{ marginBottom: 2, padding: 2 }}>
            <CardContent>
                <Typography variant="h6">{product.title || product.name}</Typography>
                <Typography variant="subtitle1">{product.author ? `Autor: ${product.author}` : `Categoría: ${product.category}`}</Typography>
                <Typography variant="body2">Precio: ${product.price}</Typography>
                <Typography variant="body2">Disponible: {product["in-stock"] ? "Sí" : "No"}</Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => handleBuy(product.title || product.name)}
                    disabled={!product["in-stock"]}
                >
                    Comprar
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProductItem;     