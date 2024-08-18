import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const RecipeCard = ({ recipe }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={recipe.image}
                alt={recipe.label}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {recipe.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {recipe.cuisineType.join(', ')}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default RecipeCard;
