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
          deckname={"Aetherflux Good Card"}
          previewCard="Breya, etherium shaper"
          file="Breya"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"The Classic"}
          previewCard="Drana, Kalastria Bloodchief"
          file="Junji"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Marcheasy"}
          previewCard="Marchesa the Black Rose"
          file="Abbaddon"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"WIP: Narset"}
          previewCard="Narset, Enlightened Master"
          file="Abbaddon"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"WIP: Sen Triplets"}
          previewCard="Sen Triples"
          file="Abbaddon"
          functions={props}
        ></MagicDeckPreviewCard>

        <MagicDeckPreviewCard
          deckname={"Squid Game"}
          previewCard="Aboshan, Cephalid Emperor"
          file="Blue"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"WIP: Oozoo"}
          previewCard="Aeve, progenitor ooze"
          file="Green"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Best Boy Tribal"}
          previewCard="Cromat"
          file="Sisay"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Compost"}
          previewCard="Muldrotha the gravetide"
          file="Sultai"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Zacamalimity"}
          previewCard="Zacama Primal Calamity"
          file="Naya"
          functions={props}
        ></MagicDeckPreviewCard>

        <MagicDeckPreviewCard
          deckname={"Just Wait 'til I get 10 Mana"}
          previewCard="Kozilek the great distortion"
          file="Nono"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"1 Mana Tribal"}
          previewCard="Rosnakht, Heir of Rohgahh"
          file="Hazezon"
          functions={props}
        ></MagicDeckPreviewCard>
      </Grid>
    </Grid>
  );
}
