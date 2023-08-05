import { Box, Typography } from "@mui/material";
import React from "react";
import { B } from "../B";

export function BtvRulesPage() {
  return (
    <Box>
      <Typography variant="h1">Basic Rules</Typography>
      <Typography>
        In Beyond The Veil, the world has characters that each have access to
        The Veil, a source of magical power. Most characters can only access a
        small amount of power, with those rare few who can freely use the magic
        ascending to effective god-hood. <B></B>In this world, it is not just
        scholars and priests that utilise in magic; no successful swordsman or
        archer is without their magical guidance or enhanced weaponry. From
        defensive wards to elemental explosions, magic forms an integral part in
        combat. <B></B>Some choose not to weaponise their magic, however, with
        many - such as minstrels and chanters, using their connection to The
        Veil to impress others, gaining their favour, or in more sinister cases
        charm them out of their wealth.
      </Typography>
      <Typography variant="h2">Gameplay</Typography>
      <Typography>
        The game is played by two types of players.
        <B></B>• The Game Master (GM), whose job it is to narrate and act out
        the environment, world, and people within.
        <B></B>• The Player, who assumes the role of one character within the
        world.
        <br></br> The game is usually played with 1 GM and 3-4 Players.
      </Typography>
      <Typography variant="h2">Attributes</Typography>
      <Typography>
        Each character in Beyond the Veil has 5 Attributes:
      </Typography>
      <Typography variant="h4">Power</Typography>
      <Typography>
        Power represents the physical strength of a character. It affects things
        such as melee weapon attacks, lifting or moving heavy objects, or
        engaging in physical contest with an enemy.
      </Typography>
      <Typography variant="h4">Dexterity</Typography>
      <Typography>
        Dexterity represents the physical speed and accuracy of a character. It
        affects things such as ranged weapon attacks, dodging dangerous effects,
        and disarming traps.
      </Typography>
      <Typography variant="h4">Knowledge</Typography>
      <Typography>
        Knowledge represents all the knowledge a characters has about the world.
        It affects things such as skill checks, magical attacks, and
        identification of the unknown.
      </Typography>
      <Typography variant="h4">Focus</Typography>
      <Typography>
        Focus represents a character's strength of mind. It affects things such
        as magical defences, morale, and rest benefits.
      </Typography>
      <Typography variant="h4">Will</Typography>
      <Typography>
        Will represents a character's strength of ego or likeability. It affects
        things such as social interactions, resisting magical charms, and
        empowering others.
      </Typography>
      <Typography variant="h3">Attribute Values</Typography>
      <Typography>
        Each Attribute has a value. This can be negative or positive. Characters
        start with a set of Attribute Vales, that will increase in as they gain
        levels. During gameplay, various things may ask a character to use or
        add an Attribute Value for an attack, skill, or similar action.
      </Typography>
      <Typography variant="h2">Levels</Typography>
      <Typography>
        To represent a character's power and experience, each character has a
        Level. Most characters start at Level 1, and gain experience as they
        defeat enemies or accomplish goals.<br></br> When a character gains a
        level, they will gain a benefit based on their class.<br></br> Levels
        range from 1 to 10, with later levels being slower to increase from than
        earlier levels.
      </Typography>
    </Box>
  );
}
