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
          deckname="White Hatebears"
          previewCard="Thalia Guardian of Thraben"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Blue Tappers"}
          previewCard="Aboshan, Cephalid Emperor"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Black Instants"}
          previewCard="Toshiro Umezawa"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Red Devils"}
          previewCard="Zurzoth"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Green Stompy"}
          previewCard="Selvala, heart of the wilds"
        ></MagicDeckPreviewCard>

        <MagicDeckPreviewCard
          deckname={"WU Control"}
          previewCard="Kwain"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"UB Mischief"}
          previewCard="Yuriko"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"BR Group Slug"}
          previewCard="Tor Wauki, the younger"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"RG Artifacts"}
          previewCard="Meria, Scholar"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"GW 1/1s"}
          previewCard="Bess"
        ></MagicDeckPreviewCard>

        <MagicDeckPreviewCard
          deckname={"WB Lifegain"}
          previewCard="Karlov of the ghost"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"UR Wizards"}
          previewCard="Adeliz"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"BG Squirrels"}
          previewCard="Chatterfang"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"RW Gold Golems"}
          previewCard="General Ferrous"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"GU Frog Self-Mill"}
          previewCard="Grolnok"
        ></MagicDeckPreviewCard>

        <MagicDeckPreviewCard
          deckname={"Bant Flicker"}
          previewCard="Lagrella"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Esper Zombies"}
          previewCard="Varina"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Grixis 40k Precon"}
          previewCard="Abbadon the despoiler"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Jund Midrange Value"}
          previewCard="Slimefoot and squee"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Naya Go-Wide"}
          previewCard="Kitt Kanto"
        ></MagicDeckPreviewCard>

        <MagicDeckPreviewCard
          deckname={"Mardu Legends"}
          previewCard="Dihada, Bender of wills"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Temur Card Snakes"}
          previewCard="Xyris"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Abzan Keyword Tribal"}
          previewCard="Kathril"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Jeskai Voltron Eggs"}
          previewCard="Elsha of the infinite"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Sultai Recursion"}
          previewCard="Muldrotha the gravetide"
        ></MagicDeckPreviewCard>

        <MagicDeckPreviewCard
          deckname={"5 Colour Legends"}
          previewCard="Sisay, weatherlight"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"WUBR Artifacts"}
          previewCard="Breya, etherium shaper"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Colourless Kozi"}
          previewCard="Kozilek the great distortion"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Black Reanimator"}
          previewCard="Junji"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Naya Land Destruction"}
          previewCard="Hazezon, shaper of sand"
        ></MagicDeckPreviewCard>
      </Grid>
    </Grid>
  );
}
