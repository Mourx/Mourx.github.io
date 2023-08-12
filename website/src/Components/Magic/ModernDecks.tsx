import { Grid } from "@mui/material";
import { MagicDeckPreviewCard } from "./MagicDeckPreviewCard";
import React from "react";

interface ModernDecksProps {
  setOpenDialog: any;
  setDecklist: any;
}

export function ModernDecks(props: ModernDecksProps) {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        display="grid"
        sx={{ gridTemplateColumns: { md: "1fr 1fr 1fr 1fr" } }}
      >
        <MagicDeckPreviewCard
          deckname="Goblins"
          previewCard="Goblin Bushwacker"
          description="Use low cost Goblins to quickly overwhelm your opponent."
          file="Goblins"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Izzet Delver"}
          previewCard="Delver of Secrets"
          description="Flip Delver of Secrets into an early flying threat, then follow up with burn spells."
          file="Delver"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"BR Vampires"}
          previewCard="Stromkirk Captain"
          description="Play a steady stream of vampires, that only get stronger in number."
          file="Vampires"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Elfball"}
          previewCard="Elvish Mystic"
          description="Play an elf, make some mana. Play another elf, make some more mana."
          file="Elves"
          functions={props}
        ></MagicDeckPreviewCard>

        <MagicDeckPreviewCard
          deckname={"BG Saprolings"}
          previewCard="Slimefoot the stowaway"
          description="Sticky saprolings are hard to wipe off the board. Follow up with a Mycoloth to end the game."
          file="Saprolings"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"UG Frogs"}
          previewCard="Grolnok"
          description="Attack with frogs, and gain massive card advantage from the croak counters."
          file="Frogs"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"WG Cats"}
          previewCard="Kaheera"
          description="Cute cats <3"
          file="Cats"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Mardu Allies"}
          previewCard="Kalastria Healer"
          description="Rally abilities strengthen your position with each ally played. Play March From the Tomb for up to 16 damage."
          file="Allies"
          functions={props}
        ></MagicDeckPreviewCard>

        <MagicDeckPreviewCard
          deckname={"WU Control"}
          previewCard="Approach of the second sun"
          description="Stall until you can cast Approach twice."
          file="Approach"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"B Tron"}
          previewCard="Urza's Tower"
          description="Get those Urza lands out fast, and play a big spell like Torment of Hailfire or Sheoldred."
          file="Tron"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"WR Control"}
          previewCard="Nahiri, harbinger"
          description="Kill all their creatures until you can turn a token into Emrakul with Indomitable Creativity."
          file="Emrakul"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Sultai Titan's Nest"}
          previewCard="Titan's Nest"
          description="All your cards effectively gain delve. Cheat mana costs and keep playing more cards than your opponent."
          file="Titan's Nest"
          functions={props}
        ></MagicDeckPreviewCard>

        <MagicDeckPreviewCard
          deckname={"Electrobalance"}
          previewCard="Restore Balance"
          description="Combo into casting Restore Balance and leave your opponent with nothing, and yourself with a 9/7."
          file="Electrobalance"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Aetherflux Storm"}
          previewCard="Aetherflux Reservoir"
          description="Make your artifacts cost nothing, then cast them to draw another one. With Aetherflux out, reach 50 life and blast your opponent."
          file="Aetherflux"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Scapeshift"}
          previewCard="Valakut, the molten pinnacle"
          description="Cast Scapeshift and bring in 6-7 Mountains and Valakut for 18-21 damage. Another Valakut means double damage."
          file="Scapeshift"
          functions={props}
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Enduring Renewal"}
          previewCard="Enduring Renewal"
          description="With Enduring Renewal out, cast a 0/0 or self-sacrificing goblin for a huge storm count, then Grapeshot to end."
          file="Renewal"
          functions={props}
        ></MagicDeckPreviewCard>
      </Grid>
    </Grid>
  );
}
