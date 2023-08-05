import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

interface recipeProps {
  recipeName: string;
  previewimg?: string;
  url: string;
  description?: string;
}

export function RecipeCard(props: recipeProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {props.recipeName}
        </Typography>
        <CardMedia
          component="img"
          image={props.previewimg}
          alt={props.recipeName}
        />
        <Typography sx={{ textAlign: "center", fontSize: 18 }} component="div">
          {props.description}
        </Typography>
        <Button href={props.url}>View Recipe</Button>
      </CardContent>
    </Card>
  );
}
