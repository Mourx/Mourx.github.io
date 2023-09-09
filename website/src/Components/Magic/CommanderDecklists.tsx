import { Grid } from "@mui/material";
import { MagicDeckPreviewCard } from "./MagicDeckPreviewCard";
import React from "react";

interface CommanderDecksProps {
  setOpenDialog: any;
  setDecklist: any;
}

export function CommanderDecks(props: CommanderDecksProps) {
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
          file="White"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Blue Tappers"}
          previewCard="Aboshan, Cephalid Emperor"
          file="Blue"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Black Instants"}
          previewCard="Toshiro Umezawa"
          file="Black"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Red Devils"}
          previewCard="Zurzoth"
          file="Red"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Green Oozey"}
          previewCard="Aeve, progenitor ooze"
          file="Green"
          functions={props}
        ></MagicDeckPreviewCard>

        <MagicDeckPreviewCard
          deckname={"WU Control"}
          previewCard="Kwain"
          file="Azorius"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"UB Mischief"}
          previewCard="Yuriko"
          file="Dimir"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"BR Group Slug"}
          previewCard="Tor Wauki, the younger"
          file="Rakdos"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"RG Artifacts"}
          previewCard="Meria, Scholar"
          file="Gruul"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"GW 1/1s"}
          previewCard="Bess"
          file="Selesnya"
          functions={props}
        ></MagicDeckPreviewCard>

        <MagicDeckPreviewCard
          deckname={"WB Lifegain"}
          previewCard="Karlov of the ghost"
          file="Orzhov"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"UR Wizards"}
          previewCard="Adeliz"
          file="Izzet"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"BG Squirrels"}
          previewCard="Chatterfang"
          file="Goglari"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"RW Gold Golems"}
          previewCard="General Ferrous"
          file="Boros"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"GU Frog Self-Mill"}
          previewCard="Grolnok"
          file="Simic"
          functions={props}
        ></MagicDeckPreviewCard>

        <MagicDeckPreviewCard
          deckname={"Bant Flicker"}
          previewCard="Lagrella"
          file="Bant"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Esper Zombies"}
          previewCard="Varina"
          file="Esper"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Grixis 40k Precon"}
          previewCard="Abbadon the despoiler"
          file="Abbaddon"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Jund Value"}
          previewCard="Slimefoot and squee"
          file="Jund"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Naya Go-Wide"}
          previewCard="Kitt Kanto"
          file="Naya"
          functions={props}
        ></MagicDeckPreviewCard>

        <MagicDeckPreviewCard
          deckname={"Mardu Legends"}
          previewCard="Dihada, Bender of wills"
          file="Mardu"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Temur Snakes"}
          previewCard="Xyris"
          file="Temur"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Abzan Keywords"}
          previewCard="Kathril"
          file="Abzan"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Jeskai Voltron"}
          previewCard="Elsha of the infinite"
          file="Jeskai"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Sultai Recursion"}
          previewCard="Muldrotha the gravetide"
          file="Sultai"
          functions={props}
        ></MagicDeckPreviewCard>

        <MagicDeckPreviewCard
          deckname={"5 Colour Legends"}
          previewCard="Sisay, weatherlight"
          file="Sisay"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"WUBR Artifacts"}
          previewCard="Breya, etherium shaper"
          file="Breya"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Colourless Kozi"}
          previewCard="Kozilek the great distortion"
          file="Nono"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Black Reanimator"}
          previewCard="Junji"
          file="Junji"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Land Destruction"}
          previewCard="Hazezon, shaper of sand"
          file="Hazezon"
          functions={props}
        ></MagicDeckPreviewCard>
      </Grid>
    </Grid>
  );
}
