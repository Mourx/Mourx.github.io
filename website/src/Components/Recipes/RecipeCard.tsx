import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { Link } from "react-router-dom";

interface recipeProps {
  recipeName: string;
  previewimg?: string;
  url: string;
  description?: string;
}

export function RecipeCard(props: recipeProps) {
  return (
    <Card sx={{ backgroundColor: "#cdcdcd", padding: "8" }} elevation={2}>
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
        <List>
          <ListItemButton to={props.url} component={Link}>
            <Typography>View Recipe</Typography>
          </ListItemButton>
        </List>
      </CardContent>
    </Card>
  );
}
