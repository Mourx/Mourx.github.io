import { Box, Card, Typography } from "@mui/material";
import React from "react";
export function DutchBoerenKoolStamppot() {
  return (
    <Card sx={{ backgroundColor: "#bbbbbb" }}>
      <Typography variant="h1">Dutch Boeren Kool Stamppot</Typography>

      <Typography>
        <Typography variant="h3">Ingredients</Typography>3 lbs potatoes{" "}
        <br></br>1 large white onion<br></br>1 bay leaf<br></br>1 lb curly kale
        <br></br>1 teaspoon salt<br></br>1 pinch ground pepper<br></br>1 lb
        smoked sausage<br></br>1 /2 cup milk<br></br>2 Tablespoons butter
        <br></br>
      </Typography>

      <Typography>
        Peel and dice potatoes and onion.<br></br>
        Clean, trim and slice kale.<br></br>
        Add the potatoes, onion, kale, a bay leaf, a pinch of salt and just
        enough water to cover all in a pan.<br></br>
        Cover and boil gently for about 25 minutes.<br></br>
        <br></br>
        Meanwhile steam or grill the smoked sausage until done then slice into
        bite size pieces.<br></br>
        Remove the bay leaf, drain the vegetables, and mash them.<br></br>
        Add milk and butter.<br></br>
        Add in sliced smoked sausage.<br></br>
        Add salt and pepper to taste and serve.<br></br>
      </Typography>
    </Card>
  );
}
