// import { Box, Grid, Typography } from "@mui/material";
import React from "react";
// import { B } from "../B";
// import { Attributes } from "./GeneralRules/Attributes";
// import { HitPoints } from "./GeneralRules/HitPoints";
// import { DicePools } from "./GeneralRules/DicePools";
// import { Resting } from "./GeneralRules/Resting";
import {
  SpecialZoomLevel,
  ViewMode,
  Viewer,
  Worker,
} from "@react-pdf-viewer/core";
import { ScrollMode } from "@react-pdf-viewer/core";
import { Box } from "@mui/material";

export function BtvRulesPage() {
  return (
    <Box height={"100%"}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          viewMode={ViewMode.DualPage}
          defaultScale={SpecialZoomLevel.PageFit}
          fileUrl={"/BeyondTheVeil.pdf"}
        ></Viewer>
      </Worker>
    </Box>
    // <Box>
    //   <Box sx={{ backgroundColor: "#d0d0d0" }}>
    //     <Typography variant="h1" textAlign="center">
    //       Beyond the Veil: Basic Rules
    //     </Typography>
    //     <Typography textAlign="center">
    //       In Beyond The Veil, the world has characters that each have access to
    //       The Veil, a source of magical power. Most characters can only access a
    //       small amount of power, with those rare few who can freely use the
    //       magic ascending to effective god-hood. <B></B>In this world, it is not
    //       just scholars and priests that utilise in magic; no successful
    //       swordsman or archer is without their magical guidance or enhanced
    //       weaponry. From defensive wards to elemental explosions, magic forms an
    //       integral part in combat. <B></B>Some choose not to weaponise their
    //       magic, however, with many - such as minstrels and chanters, using
    //       their connection to The Veil to impress others, gaining their favour,
    //       or in more sinister cases charm them out of their wealth.
    //     </Typography>
    //     <Typography variant="h2" textAlign="center">
    //       Gameplay
    //     </Typography>
    //     <Typography textAlign="center">
    //       The game is played by two types of players.
    //       <br></br>
    //       <B></B>• The Game Master (GM), whose job it is to narrate and act out
    //       the environment, world, and people within.
    //       <B></B>• The Player, who assumes the role of one character within the
    //       world.
    //       <br></br>
    //       <br></br> The game is usually played with 1 GM and 3-4 Players.
    //     </Typography>

    //     <Typography variant="h2" textAlign="center">
    //       Levels
    //     </Typography>
    //     <Typography textAlign="center">
    //       To represent a character's power and experience, each character has a
    //       Level. Most characters start at Level 1, and gain experience as they
    //       defeat enemies or accomplish goals.<br></br> When a character gains a
    //       level, they will gain a benefit based on their class.
    //       <br></br> Levels range from 1 to 10, with later levels being slower to
    //       increase from than earlier levels.
    //     </Typography>

    //     <Attributes></Attributes>
    //     <HitPoints></HitPoints>
    //     <DicePools></DicePools>
    //     <Resting></Resting>
    //   </Box>
    // </Box>
  );
}
