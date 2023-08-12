import { Box, Typography } from "@mui/material";
import React from "react";

export function HitPoints() {
  return (
    <Box>
      <Typography textAlign="center" variant="h2">
        Hit Points
      </Typography>

      <Typography textAlign="center">
        Each character has a number of Hit Points, a representation of how much
        they can endure in combat before dying. Hit Points can stem from a
        character's physical toughness, ability to dodge attacks, or ward off
        hits with armour or minor magic. When a character is dealt damage, it is
        subtracted from their Hit Points. If a player character reaches 0 Hit
        Points, they gain the Dying condition. Non player characters immediately
        die when reduced to 0 Hit Points. Each Class determines the base amount
        of Hit Points a character gains per level.
      </Typography>
      <Typography textAlign="center" variant="h4">
        Ward Points
      </Typography>
      <Typography textAlign="center">
        Ward points are an extra barrier on top of Hit Points. When a character
        has Ward Points, any damage taken is subtracted from their Ward Points
        first. If damage would deal more damage than a character has Ward
        Points, the remainder is subtracted from their Hit Points as normal. If
        a character with Ward Points would gain more Ward Points, add the new
        value to the current. A character cannot have more Ward Points than
        their maximum Hit Points.
      </Typography>
    </Box>
  );
}
