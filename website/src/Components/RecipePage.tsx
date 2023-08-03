import { Box } from "@mui/material";
import React, { useEffect } from "react";

export function RecipePage() {
  useEffect(() => {
    document.title = "Recipes";
  }, []);
  return <Box>Recipes</Box>;
}
