import { Box, Typography } from "@mui/material";
import React from "react";

export function Attributes() {
  return (
    <Box>
      <Typography variant="h2" textAlign="center">
        Attributes
      </Typography>
      <Typography textAlign="center">
        Each character in Beyond the Veil has 5 Attributes:
      </Typography>
      <Typography variant="h4" textAlign="center">
        Power
      </Typography>
      <Typography textAlign="center">
        Power represents the physical strength of a character. It affects things
        such as melee weapon attacks, lifting or moving heavy objects, or
        engaging in physical contest with an enemy.
      </Typography>
      <Typography variant="h4" textAlign="center">
        Dexterity
      </Typography>
      <Typography textAlign="center">
        Dexterity represents the physical speed and accuracy of a character. It
        affects things such as ranged weapon attacks, dodging dangerous effects,
        and disarming traps.
      </Typography>
      <Typography variant="h4" textAlign="center">
        Knowledge
      </Typography>
      <Typography textAlign="center">
        Knowledge represents all the knowledge a characters has about the world.
        It affects things such as skill checks, magical attacks, and
        identification of the unknown.
      </Typography>
      <Typography variant="h4" textAlign="center">
        Focus
      </Typography>
      <Typography textAlign="center">
        Focus represents a character's strength of mind. It affects things such
        as magical defences, morale, and rest benefits.
      </Typography>
      <Typography variant="h4" textAlign="center">
        Will
      </Typography>
      <Typography textAlign="center">
        Will represents a character's strength of ego or likeability. It affects
        things such as social interactions, resisting magical charms, and
        empowering others.
      </Typography>
      <Typography variant="h3" textAlign="center">
        Attribute Values
      </Typography>
      <Typography textAlign="center">
        Each Attribute has a value. This can be negative or positive. Characters
        start with a set of Attribute Vales, that will increase in as they gain
        levels. During gameplay, various things may ask a character to use or
        add an Attribute Value for an attack, skill, or similar action.
      </Typography>
      <Typography variant="h2" textAlign="center">
        Atrribute Saves
      </Typography>
      <Typography textAlign="center">
        Some effects will ask characters to make a Save. In each case, the
        relevant Attribute will be listed; for example, a character may need to
        make a Power Save. To succeed on the Save, they must roll an equal or
        higher value than the Challenge of the effect.
      </Typography>
      <Typography variant="h4" textAlign="center">
        Save Training
      </Typography>
      <Typography textAlign="center">
        When making a Save, the listed Attribute Value is added to a die roll.
        This die is a D10 if a character is not trained in the Skill, and a D20
        if the character is trained in the Skill. In addition, a player may
        choose to simultaneously spend a Magic Die to increase their result.
      </Typography>
    </Box>
  );
}
