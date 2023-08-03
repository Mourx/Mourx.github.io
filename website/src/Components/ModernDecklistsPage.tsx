import { Box, Grid } from "@mui/material";
import { MagicDeckPreviewCard } from "./MagicDeckPreviewCard";
import React from "react";

export function ModernDecklistsPage() {
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
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Izzet Delver"}
          previewCard="Delver of Secrets"
          description="Flip Delver of Secrets into an early flying threat, then follow up with burn spells."
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"BR Vampires"}
          previewCard="Stromkirk Captain"
          description="Play a steady stream of vampires, that only get stronger in number."
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Elfball"}
          previewCard="Elvish Mystic"
          description="Play an elf, make some mana. Play another elf, make some more mana."
        ></MagicDeckPreviewCard>

        <MagicDeckPreviewCard
          deckname={"BG Saprolings"}
          previewCard="Slimefoot the stowaway"
          description="Sticky saprolings are hard to wipe off the board. Follow up with a Mycoloth to end the game."
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"UG Frogs"}
          previewCard="Grolnok"
          description="Attack with frogs, and gain massive card advantage from the croak counters."
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"WG Cats"}
          previewCard="Kaheera"
          description="Cute cats <3"
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Mardu Allies"}
          previewCard="Kalastria Healer"
          description="Rally abilities strengthen your position with each ally played. Play March From the Tomb for up to 16 damage."
        ></MagicDeckPreviewCard>

        <MagicDeckPreviewCard
          deckname={"WU Control"}
          previewCard="Approach of the second sun"
          description="Stall until you can cast Approach twice."
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"B Tron"}
          previewCard="Urza's Tower"
          description="Get those Urza lands out fast, and play a big spell like Torment of Hailfire or Sheoldred."
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"WR Control"}
          previewCard="Nahiri, harbinger"
          description="Kill all their creatures until you can turn a token into Emrakul with Indomitable Creativity."
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Temur Titan's Nest"}
          previewCard="Titan's Nest"
          description="All your cards effectively gain delve. Cheat mana costs and keep playing more cards than your opponent."
        ></MagicDeckPreviewCard>

        <MagicDeckPreviewCard
          deckname={"Combo: Electrobalance"}
          previewCard="Restore Balance"
          description="Combo into casting Restore Balance and leave your opponent with nothing, and yourself with a 9/7."
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Combo: Aetherflux Storm"}
          previewCard="Aetherflux Reservoir"
          description="Make your artifacts cost nothing, then cast them to draw another one. With Aetherflux out, reach 50 life and blast your opponent."
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Combo: Scapeshift"}
          previewCard="Valakut, the molten pinnacle"
          description="Cast Scapeshift and bring in 6-7 Mountains and Valakut for 18-21 damage. Another Valakut means double damage."
        ></MagicDeckPreviewCard>
        <MagicDeckPreviewCard
          deckname={"Combo: Enduring Renewal"}
          previewCard="Enduring Renewal"
          description="With Enduring Renewal out, cast a 0/0 or self-sacrificing goblin for a huge storm count, then Grapeshot to end."
        ></MagicDeckPreviewCard>
      </Grid>
    </Grid>
  );
}
