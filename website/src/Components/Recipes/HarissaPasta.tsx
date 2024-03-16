import { Box, Card, Typography } from "@mui/material";
import React from "react";
export function HarissaPasta() {
  return (
    <Card sx={{ backgroundColor: "#bbbbbb" }}>
      <Typography variant="h1">Harissa Pasta</Typography>

      <Typography>
        <Typography variant="h3">Ingredients</Typography>
        400g tomatoes <br></br>1 tbsp oliv oil <br></br>1 garlic clove, minced
        <br></br>1 red pepper, roasted <br></br>1 pot hummus <br></br>
        150ml pasta water <br></br>1 tbsp harissa paste <br></br>4 portions of
        pasta <br></br>
        15g fresh parsley <br></br>
      </Typography>

      <Typography>
        Get a pot of boiling water on th ehob, add a large pinch of salt along
        with the pasta. <br></br>
        Leave to boil for 10 minutes. <br></br>
        <br></br>
        Meanwhile roughly chop the garlic, add to a pan with the tomatoes and
        red pepper. <br></br>
        Fry for 6-7 minutes. <br></br>
        <br></br>
        Add the harissa paste along with the pasta water and hummus, then mix
        together.<br></br>
        <br></br>
        Drain the pasta and mix with the rest of the ingredients.<br></br>
        Top with parsley and serve.<br></br>
      </Typography>
    </Card>
  );
}
