import { Box, Typography } from "@mui/material";
import React from "react";
import { B } from "../../B";

export function Resting() {
  return (
    <Box>
      <Typography textAlign="center" variant="h2">
        Resting and Recovery
      </Typography>

      <Typography textAlign="center">
        Between encounters and during travel, characters may need to rest. There
        are two types of rests:
      </Typography>
      <Typography textAlign="center" variant="h4">
        Safe Rests
      </Typography>
      <Typography textAlign="center">
        A safe rest can be taken in a trusted and comfortable environment. This
        can be a known inn, a character's home, or similarly safe location. Safe
        Rests take two days of low stress activity to complete. <B></B> When
        characters finish a Safe Rest, they restore all of their Hit Points,
        replenish their Dice pools in their entirety, and recover any other
        similar resources that they may have spent.
      </Typography>
      <Typography textAlign="center" variant="h4">
        Risky Rests
      </Typography>
      <Typography textAlign="center">
        A risky rest is any rest that isn't a Safe Rest. This includes camping
        in the wilderness or a dungeon corner, in a new inn that you cant trust,
        or an expedited rest in a safe location. Risky Rests take one quarter of
        the day to complete. <B></B> When characters finish a Risky Rest, they
        restore some Hit Points, and replenish some of their Dice Pools: If they
        are below half their maximum Hit Points, they restore enough Hit Points
        to have half their maximum Hit Points. Otherwise, they may use the
        Persevere Skill once without spending the rolled Grit Die.
        <em> (They must have a Grit Die prior to beginning the rest)</em>.
        <B></B>
        They then replenish 1 Grit Die or 1 Social Die per class level.
      </Typography>
    </Box>
  );
}
