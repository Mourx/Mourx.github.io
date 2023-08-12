import { Box, Button, Dialog, Grid } from "@mui/material";
import { MagicDeckPreviewCard } from "./MagicDeckPreviewCard";
import React, { useEffect, useState } from "react";
import { Decklist } from "./Decklist";
import { ModernDecks } from "./ModernDecks";

export function ModernDecklistsPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [decklist, setDecklist] = useState("");
  useEffect(() => {
    document.title = "Modern Decks";
  }, []);
  return (
    <Box>
      <Grid container>
        <ModernDecks
          setDecklist={setDecklist}
          setOpenDialog={setDialogOpen}
        ></ModernDecks>
      </Grid>
      <Dialog
        sx={{ backgroundColor: "#cdcdcd" }}
        open={dialogOpen}
        fullWidth
        maxWidth="lg"
      >
        <Decklist decklist={decklist}></Decklist>
        <Button
          sx={{ backgroundColor: "#dddddd" }}
          onClick={() => {
            setDialogOpen(false);
          }}
        >
          Close
        </Button>
      </Dialog>
    </Box>
  );
}
