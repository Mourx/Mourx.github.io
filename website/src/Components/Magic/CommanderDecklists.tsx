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
          deckname={"Thalia <3"}
          previewCard="Thalia, Guardian of Thraben"
          file="White"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Squid Game"}
          previewCard="Llawen, Cephalid Empress"
          file="Blue"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Drana"}
          previewCard="Drana, Kalastria Bloodchief"
          file="Junji"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"1 Mana Tribal"}
          previewCard="Rosnakht, Heir of Rohgahh"
          file="Hazezon"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Lotta Lands"}
          previewCard="Jolrael, Empress of Beasts"
          file="Hazezon"
          functions={props}
        ></MagicDeckPreviewCard>

        <MagicDeckPreviewCard
          deckname={"Zombinis (No Shuffling)"}
          previewCard="Varina Lich Queen"
          file="Green"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Zacamalimity (No Shuffling)"}
          previewCard="Zacama Primal Calamity"
          file="Naya"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Artifact Swarm (No Shuffling)"}
          previewCard="Meria, Scholar of Antiquity"
          file="Naya"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Faeries (No Shuffling)"}
          previewCard="Talion, Kindly Lord"
          file="Sultai"
          functions={props}
        ></MagicDeckPreviewCard>

        <MagicDeckPreviewCard
          deckname={"Enchantments"}
          previewCard="Daxos the Returned"
          file="Naya"
          functions={props}
        ></MagicDeckPreviewCard>

        <MagicDeckPreviewCard
          deckname={"Big Frogie"}
          previewCard="Grolnok, the Omnivore"
          file="Sultai"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Aetherflux Good Card"}
          previewCard="Breya, Etherium shaper"
          file="Breya"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"I love Cromat I have like 5"}
          previewCard="Cromat"
          file="Sisay"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Legendary Deck"}
          previewCard="Sisay, Weatherlight Captain"
          file="Sisay"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Just Wait 'til I get 10 Mana"}
          previewCard="Kozilek the great distortion"
          file="Nono"
          functions={props}
        ></MagicDeckPreviewCard>
      </Grid>
    </Grid>
  );
}
