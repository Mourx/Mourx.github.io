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
        {/* Mono Colour */}
        <>
          <MagicDeckPreviewCard
            deckname={"Gerrard's Life"}
            previewCard="Gerrard Capashen"
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
            deckname={"Pranks"}
            previewCard="Kuro, Pitlord"
            file="Black"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"What a Hunk!"}
            previewCard="Tahngarth Talruun Hero"
            file="Red"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"Lotta Lands"}
            previewCard="Jolrael, Empress of Beasts"
            file="Green"
            functions={props}
          ></MagicDeckPreviewCard>
        </>

        {/* Ally Duals */}
        <>
          <MagicDeckPreviewCard
            deckname={"Big Token"}
            previewCard="Temmet, Vizier of Naktamun"
            file="Azorius"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"Faeries"}
            previewCard="Talion, the Kindly Lord"
            file="Dimir"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"Not Available"}
            previewCard="Gone Missing"
            file="Rakdos"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"One Elf's Trash"}
            previewCard="Meria scholar of antiquity"
            file="Gruul"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"Not Available"}
            previewCard="Gone Missing"
            file="Selesnya"
            functions={props}
          ></MagicDeckPreviewCard>
        </>

        {/* Enemy Duals */}
        <>
          <MagicDeckPreviewCard
            deckname={"EnchantMan"}
            previewCard="Daxos the returned"
            file="Orzhov"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"Not Available"}
            previewCard="Gone Missing"
            file="Izzet"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"Not Available"}
            previewCard="Gone Missing"
            file="Golgari"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"Not Available"}
            previewCard="Gone Missing"
            file="Boros"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"Big Frogie"}
            previewCard="Grolnok the Omnivore"
            file="Simic"
            functions={props}
          ></MagicDeckPreviewCard>
        </>

        {/* Ally Triples */}
        <>
          <MagicDeckPreviewCard
            deckname={"Zombinis"}
            previewCard="Varina Lich Queen"
            file="Esper"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"Marcheasy"}
            previewCard="Marchesa the Black Rose"
            file="Grixis"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"Group Hug!"}
            previewCard="Xira Arien"
            file="Jund"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"Desert Gang"}
            previewCard="Hazezon, shaper of sand"
            file="Naya"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"The Rabbit"}
            previewCard="Ms. Bumbleflower"
            file="Bant"
            functions={props}
          ></MagicDeckPreviewCard>
        </>
        {/* Enemy Triples */}
        <>
          <MagicDeckPreviewCard
            deckname={"Thalia <3 Frogie"}
            previewCard="Thalia and the gitrog monster"
            file="Abzan"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"No Deck Yet"}
            previewCard="Gone Missing"
            file="Jeskai"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"Glarb it Up"}
            previewCard="Glarb, calamity's augur"
            file="Sultai"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"Dragon's Wrath"}
            previewCard="Piru the Volatile"
            file="Mardu"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"No Deck Yet"}
            previewCard="Gone Missing"
            file="Temur"
            functions={props}
          ></MagicDeckPreviewCard>
        </>

        {/* The Rest */}
        <>
          <MagicDeckPreviewCard
            deckname={"Aetherflux Good Card"}
            previewCard="Breya, Etherium shaper"
            file="Breya"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"Sisay Legends"}
            previewCard="Sisay Weatherlight Captain"
            file="Sisay"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"Mutate or Energy"}
            previewCard="Cromat"
            file="Cromat2"
            functions={props}
          ></MagicDeckPreviewCard>
        </>

        {/* Bonus Decks */}
        <>
          <MagicDeckPreviewCard
            deckname={"Chaos 40k"}
            previewCard="Abaddon the Despoiler"
            file="Abaddon"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"Just Wait 'til I get 10 Mana"}
            previewCard="Kozilek the great distortion"
            file="Nono"
            functions={props}
          ></MagicDeckPreviewCard>
        </>
      </Grid>
    </Grid>
  );
}
