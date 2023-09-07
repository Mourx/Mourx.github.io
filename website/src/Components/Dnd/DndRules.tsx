import { Box, Typography } from "@mui/material";
import React from "react";
import { B } from "../B";
// import { Box, Grid, Typography } from "@mui/material";
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

export function DndRulesPage() {
  return (
    <Box height={"100%"}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          viewMode={ViewMode.DualPage}
          defaultScale={SpecialZoomLevel.PageFit}
          fileUrl={"/Santryl.pdf"}
        ></Viewer>
      </Worker>
    </Box>
    // <Box>
    //   <Typography variant="h1">Rule Differences</Typography>

    //   <Typography variant="h2">Combat Actions</Typography>
    //   <Typography>
    //     All characters may take the following Combat Actions. Unless specified,
    //     each Combat Action is taken as an Action.
    //   </Typography>
    //   <Typography>
    //     <br></br>
    //   </Typography>
    //   <Box>
    //     <Typography variant="h4">Embolden</Typography>
    //     <Typography>
    //       You reassure your allies. Choose up to three creatures that can hear
    //       you within 60ft. Those creatures gain 1 level of Resolve until the end
    //       of their next turn.
    //     </Typography>
    //     <Typography variant="h4">Feint</Typography>
    //     <Typography>
    //       You pretend to attack from a certain angle, confusing the enemy at the
    //       cost of damage. Feint is a Special Attack Action that replaces one
    //       Melee Attack. When you Feint, make a Sleight of Hand (Dexterity) check
    //       with Advantage, with the DC of the check equal to the target's AC.
    //       <B></B> If you succeed, choose a weapon you hold with the Light
    //       property. You count as having hit the target with an attack with that
    //       weapon, but instead of rolling damage, you deal 1 damage.
    //       <B></B> If you have any additional damage effects (such as Divine
    //       Smite or Sneak Attack), roll their damage as normal.
    //     </Typography>
    //     <Typography variant="h4">Tackle</Typography>
    //     <Typography>
    //       You charge head first at an enemy in an attempt to knock them down.
    //       Choose target creature within 5ft. You make an Athletics check
    //       contested by that creature's Athletics or Acrobatics check (target
    //       chooses). If you started your turn in a different location, you gain
    //       +1 to your Athletics check for each 5ft moved. If the target is larger
    //       than you, it gains Advantage on its check. If the target is smaller
    //       than you, you gain Advantage on your check.
    //       <B></B>On a success, you and the target are knocked Prone, your speed
    //       becomes 0 until your next turn, and the target takes Bludgeoning
    //       damage equal to the difference in the contested skill checks, to a
    //       maximum of your Athletics Modifier.
    //     </Typography>
    //     <Typography variant="h4">Taunt</Typography>
    //     <Typography>
    //       You shout a taunt at an enemy creature within 30ft that can hear you.
    //       That creature must make a Charisma Saving Throw. The DC is equal to
    //       your Passive Intimidation (10 + Intimidation Modifier). <B></B>On a
    //       failure, on that creature's next turn, if that creature makes any
    //       attacks or uses any harmful magical effects, it must target or
    //       endeavour to affect you if possible.
    //     </Typography>
    //   </Box>

    //   <Typography variant="h2">Combat Skill Checks</Typography>
    //   <Typography>
    //     A creature may be able to use their skills to help in combat. As an
    //     action, they can attempt to use any skill that will affect a creature,
    //     positively or negatively. <B></B>Alternatively, as a Bonus Action, they
    //     can attempt to use any skill in order to gain information.<B></B>
    //     <Typography sx={{ paddingLeft: 4 }}>
    //       • <em>Example</em>: An Action is required for an attempt to intimidate
    //       an enemy into being frightened, or to traverse difficult obstacles
    //       (not Difficult Terrain) using Acrobatics.
    //     </Typography>
    //     <Typography sx={{ paddingLeft: 4 }}>
    //       •<em>Example:</em> A Bonus Action is required for an attempt to use
    //       history knowledge, or perception, to tell what kind of creature and/or
    //       weaknesses they are fighting.
    //     </Typography>
    //   </Typography>
    //   <Typography>
    //     <br></br>
    //   </Typography>

    //   <Typography variant="h2">Constitution</Typography>
    //   <Typography>
    //     Do not add your Constitution Modifier to your Hit Points Total. Instead,
    //     all characters gain the maximum amount of Hit Points at each level.
    //     <B></B>You may use your Constitution Modifier in place of your Dexterity
    //     Modifier when determining your Base Armour Class.
    //     <B></B>
    //     Constitution now also interacts with Exhaustion (see below).
    //   </Typography>

    //   <Typography variant="h2">Critical Hits</Typography>
    //   <Typography>
    //     When you score a critical hit, you roll twice as many damage dice as
    //     normal.
    //   </Typography>

    //   <Typography variant="h2">Currency</Typography>
    //   <Typography>
    //     In Santryl, currency is more standardised across the continent. Mundane
    //     equipment and tools rarely sell above 75g, and magic items generally sit
    //     in the 300-500g range for low-medium power items. As such, treasure
    //     gained is likely to be lower in coinage than in other areas.<B></B> This
    //     will also increase the relative value of gemstones for spell components
    //     (notably Revivify), and increase the importance of good currency
    //     management. This also allows for the earlier purchasing of non-magical
    //     amour such as Platemail. <B></B>A good value of reward for finishing
    //     tasks, missions, and quests is around 10 x Combined Player Level for the
    //     whole party.
    //   </Typography>

    //   <Typography variant="h2">Exhaustion and Resolve</Typography>
    //   <Typography>
    //     When a creature suffers Exhaustion, it subtracts 1 from any d20 roll
    //     made per level of Exhaustion. One level of exhaustion is removed on a
    //     Long Rest. <B></B>When a creature gains Resolve, it adds 1 to any d20
    //     roll made per level of Resolve. All levels of Resolve are lost after any
    //     rest. <B></B>The maximum amount of Exhaustion a creature can have is
    //     equal to 5 + 5 times its Constitution Modifier. Should it have suffer
    //     more Exhaustion, it immediately drops to 0 Hit Points. Creatures that
    //     would make Death Saving Throws as a result of this do so at
    //     disadvantage. <B></B>It is possible to suffer maximum Exhaustion whilst
    //     having levels of Resolve. They may mitigate each other, but do not
    //     cancel out.
    //   </Typography>

    //   <Typography variant="h2">Flanking</Typography>
    //   <Typography>
    //     If a creature is within 5ft of an enemy creature, and has a friendly
    //     creature also within 5ft of the enemy creature, if they are not within
    //     5ft of each other, they get +2 to Melee Attacks and Contested Ability
    //     Checks against the enemy creature.
    //   </Typography>

    //   <Typography variant="h2">Healing Potions</Typography>
    //   <Typography>
    //     Healing Potions may be used as an Action for their full healing.
    //     Additionally, as a Bonus Action, a creature may use the potion on
    //     themselves. When used this way, only heal for the amount rolled, without
    //     any other listed bonuses.
    //   </Typography>

    //   <Typography variant="h2">Spell Scroll Casting</Typography>
    //   <Typography>
    //     Any creature may attempt to cast any spell from a scroll. To do this,
    //     they must make an Arcana check, the DC of which is 10 + Spell Level.
    //     <Typography sx={{ paddingLeft: 4 }}>
    //       • If the creature has any Spell Slots, they have advantage on this
    //       check.<br></br> • If the creature knows this Spell, they add their
    //       Proficiency Bonus. <em>(even if already proficient in Arcana)</em>
    //       <br></br> • If the creature has this Spell prepared, and it is of 3rd
    //       level or lower, they automatically pass the check.
    //     </Typography>
    //     When casting a spell this way, the creature uses their Intelligence as
    //     their Spellcasting Ability. If the result of the Arcana check is 10
    //     higher than the DC, the scroll is preserved. Otherwise, the scroll is
    //     consumed upon use. Scrolls are consumed on a failed attempt, as the
    //     magic escapes its binding.
    //   </Typography>
    // </Box>
  );
}
