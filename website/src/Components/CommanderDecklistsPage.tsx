import { Box, Grid } from "@mui/material";
import { MagicDeckPreviewCard } from "./MagicDeckPreviewCard";
import React from "react";

export function CommanderDecklistsPage() {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        display="grid"
        sx={{ gridTemplateColumns: { md: "1fr 1fr 1fr 1fr 1fr" } }}
      >
        <MagicDeckPreviewCard
          deckname="White"
          previewCard="Thalia Guardian of Thraben"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Blue"}
          previewCard="Aboshan, Cephalid Emperor"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard deckname={"White"}></MagicDeckPreviewCard>
        <MagicDeckPreviewCard deckname={"White"}></MagicDeckPreviewCard>
        <MagicDeckPreviewCard deckname={"White"}></MagicDeckPreviewCard>
        <MagicDeckPreviewCard deckname={"White"}></MagicDeckPreviewCard>
      </Grid>
    </Grid>
  );
}
