import React from "react";
import { Container, AppBar, Toolbar, Typography, Box, Card, CardMedia, CardContent } from '@mui/material';

export default function PageHome() {
    return (
        <Container>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Mi Página
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box my={4}>
                <Card elevation={3} style={{ borderRadius: '10px' }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image="https://img.hellofresh.com/w_3840,q_auto,f_auto,c_limit,fl_lossy/hellofresh_website/es/cms/SEO/recipes/estofado-lentejas-chorizo-patatas.jpeg"
                        alt="Receta 1"
                    />
                    <CardContent>
                        <Typography variant="h4" component="h1" gutterBottom>
                            Bienvenido a Mi Página
                        </Typography>
                        <Typography variant="body1">
                            Esta es una página de inicio con estilo.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box my={4}>
                <Card elevation={3} style={{ borderRadius: '10px' }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image="https://editorialtelevisa.brightspotcdn.com/dims4/default/63e95c0/2147483647/strip/true/crop/920x920+300+0/resize/1000x1000!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2F58%2Feb%2Fb537a4714c11890dfba66649ee13%2Fflautas-transformed.jpeg"
                        alt="Receta 2"
                    />
                    <CardContent>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Sobre Nosotros
                        </Typography>
                        <Typography variant="body1">
                            Somos una empresa dedicada a ofrecer los mejores servicios.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box my={4}>
                <Card elevation={3} style={{ borderRadius: '10px' }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image="https://i.blogs.es/87930e/comidas-ricas/1366_2000.jpg"
                        alt="Receta 3"
                    />
                    <CardContent>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Servicios
                        </Typography>
                        <Typography variant="body1">
                            Ofrecemos una amplia gama de servicios para satisfacer tus necesidades.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box my={4} textAlign="center">
                <Typography variant="body2" color="textSecondary">
                   Hola no vallas a robar mis resetas
                </Typography>
            </Box>
        </Container>
    );
}