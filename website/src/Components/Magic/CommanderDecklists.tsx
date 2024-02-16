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
          deckname={"Reanimator"}
          previewCard="Braids, Arisen Nightmare"
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
          deckname={"Just some green stuff"}
          previewCard="Oviya Pashiri"
          file="Hazezon"
          functions={props}
        ></MagicDeckPreviewCard>

        <MagicDeckPreviewCard
          deckname={"Demons!!"}
          previewCard="Belakor, the dark master"
          file="Green"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Zombinis"}
          previewCard="Varina Lich Queen"
          file="Green"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Zacamalimity"}
          previewCard="Zacama Primal Calamity"
          file="Naya"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Thalia <3 Frogie"}
          previewCard="Thalia and the Gitrog Monster"
          file="Naya"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Long May She Reign"}
          previewCard="Queen Marchesa"
          file="Naya"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Combo"}
          previewCard="Slimefoot and Squee"
          file="Naya"
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
          deckname={"Faeries"}
          previewCard="Talion, Kindly Lord"
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
          deckname={"Best Boy Tribal"}
          previewCard="Cromat"
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
