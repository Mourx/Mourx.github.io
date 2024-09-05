import { Box, Button, Dialog, Grid } from "@mui/material";
import { MagicDeckPreviewCard } from "./MagicDeckPreviewCard";
import React, { useEffect, useState } from "react";
import { CommanderDecks } from "./CommanderDecklists";
import { Decklist } from "./Decklist";

export function CommanderDecklistsPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [decklist, setDecklist] = useState("");
  useEffect(() => {
    document.title = "Commander Decks";
  }, []);
  return (
    <Box>
      <Grid container>
        <CommanderDecks
          setDecklist={setDecklist}
          setOpenDialog={setDialogOpen}
        ></CommanderDecks>
      </Grid>
      <Dialog
        sx={{ backgroundColor: "#cdcdcd" }}
        open={dialogOpen}
        fullWidth
        maxWidth="xl"
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
