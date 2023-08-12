import { Box, Typography } from "@mui/material";
import React from "react";

export function DicePools() {
  return (
    <Box>
      <Typography textAlign="center" variant="h2">
        Dice Pools
      </Typography>

      <Typography textAlign="center">
        To differentiate between combat, social, and explorative play,
        characters have access to different pools of dice.
      </Typography>
      <Typography textAlign="center" variant="h4">
        Spending Dice
      </Typography>
      <Typography textAlign="center">
        Many effects will ask a player to “Spend” dice. When spending a die,
        roll it, record the value, and remove the die from its pool. Some
        effects will then use the rolled value, whilst others may not. Generally
        Weapon Dice do not get spent, only rolled, and each other type of Dice
        are spent as they are used.
      </Typography>

      <Typography textAlign="center" variant="h4">
        Weapon Dice
      </Typography>
      <Typography textAlign="center">
        Weapon Dice represent the damage dealt with a weapon by a character.
        They are rolled each time an attack hits. Most characters will have one
        or two Weapon Dice, that may vary in size or damage type.
      </Typography>
      <Typography textAlign="center" variant="h4">
        Grit Dice
      </Typography>
      <Typography textAlign="center">
        Grit Dice represent a character's ability to perform in the wilderness,
        dungeons, and other unknown situations. These dice are replenished
        during rests. Some classes will have significantly more Grit Dice than
        others, whereas some will use larger dice types in lower quantities.
      </Typography>
      <Typography textAlign="center" variant="h4">
        Social Dice
      </Typography>
      <Typography textAlign="center">
        Social Dice represent a character's ability to turn social situations in
        their favour. These dice are replenished during rests. Class determines
        size and quantity of a character's Social Dice.
      </Typography>
      <Typography textAlign="center" variant="h4">
        Magic Dice
      </Typography>
      <Typography textAlign="center">
        Magic Dice are wildcard dice. When spending a Grit or Social Die, a
        Magic Die can be used in place or in addition to the normal die. Most
        Magic Dice are D4, but some characters may be able to increase this.
        Magic Dice are few in availability for most characters. Magic Dice
        replenish during rests, but at a slower rate than the other dice.
      </Typography>
      <Typography textAlign="center" variant="h4">
        Temporary Dice
      </Typography>
      <Typography textAlign="center">
        When replenishing Dice Pools, you may not replenish Temporary Dice. Most
        dice you gain and/or use from spells, items, or other bonuses are
        Temporary Dice, can only be used once, and will not be replenished.
      </Typography>
    </Box>
  );
}
