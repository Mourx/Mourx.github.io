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
            file="Black"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"He Comes Back Don't Worry"}
            previewCard="Norin the Wary"
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
            deckname={"Control"}
            previewCard="Rasputin Dreamweaver"
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
            deckname={"Who Needs Cards"}
            previewCard="Asmoranomardicadaistinaculdacar"
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
            deckname={"A Bunch of Little Guys"}
            previewCard="Asmira Holy Avenger"
            file="Selesnya"
            functions={props}
          ></MagicDeckPreviewCard>
        </>

        {/* Enemy Duals */}
        <>
          <MagicDeckPreviewCard
            deckname={"Life's Judgement"}
            previewCard="Selenia Dark Angel"
            file="Orzhov"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"Empty the Warrens 2"}
            previewCard="Ovika enigma goliath"
            file="Izzet"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"Yarglgleglegllegle"}
            previewCard="Yargle and Multani"
            file="Golgari"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"Suit Up"}
            previewCard="Bruenor Battlehammer"
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
            deckname={"No Deck Yet"}
            previewCard="Gone Missing"
            file="Grixis"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"No Deck Yet"}
            previewCard="Gone Missing"
            file="Jund"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"Zacalamity"}
            previewCard="Zacama Primal Calamity"
            file="Naya"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"Peaceful Fogs"}
            previewCard="Angus Mackenzie"
            file="Bant"
            functions={props}
          ></MagicDeckPreviewCard>
        </>
        {/* Enemy Triples */}
        <>
          <MagicDeckPreviewCard
            deckname={"Keyword Reanimator"}
            previewCard="Kathril Aspect Warper"
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
            deckname={"No Deck Yet"}
            previewCard="Gone Missing"
            file="Sultai"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"Aristocrat Lifestyle"}
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
            deckname={"1 Mana Tribal"}
            previewCard="Rosnakht"
            file="OneboRed"
            functions={props}
          ></MagicDeckPreviewCard>
          <MagicDeckPreviewCard
            deckname={"Surviving In the Desert"}
            previewCard="Hazezon Shaper of Sand"
            file="Hazezon"
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
