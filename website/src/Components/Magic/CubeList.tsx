import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import * as fs from "fs";
import React, { useEffect, useState } from "react";

export function CubeList() {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        display="grid"
        sx={{ gridTemplateColumns: { md: "1fr 1fr 1fr 1fr 1fr" } }}
      >
        <>
          <img src="/CustomCards/Abandoned Cemetery.png" width="100%"></img>
          <img src="/CustomCards/Abjurate.png" width="100%"></img>
          <img src="/CustomCards/Absorb Remains.png" width="100%"></img>
          <img src="/CustomCards/Abstrude.png" width="100%"></img>
          <img src="/CustomCards/Abyss.png" width="100%"></img>
          <img src="/CustomCards/Adarkar Wastes.png" width="100%"></img>
          <img src="/CustomCards/Aggressive Egotist.png" width="100%"></img>
          <img src="/CustomCards/Alchemists Workshop.png" width="100%"></img>
          <img src="/CustomCards/All is Ape.png" width="100%"></img>
          <img src="/CustomCards/Ancient Firefang.png" width="100%"></img>
          <img src="/CustomCards/Ancient Roc.png" width="100%"></img>
          <img src="/CustomCards/Angel of Perseverance.png" width="100%"></img>
          <img src="/CustomCards/Angel of Reproach.png" width="100%"></img>
          <img src="/CustomCards/Anukhanos Charm.png" width="100%"></img>
          <img
            src="/CustomCards/Anukhanos, Gorger of Souls.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Ape Trainer.png" width="100%"></img>
          <img src="/CustomCards/Apelin.png" width="100%"></img>
          <img src="/CustomCards/Archival Studies.png" width="100%"></img>
          <img
            src="/CustomCards/Artificial Agricolation.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Aspect of Torment.png" width="100%"></img>
          <img src="/CustomCards/Autofiller Purgebot.png" width="100%"></img>
          <img src="/CustomCards/Ayzen, Favoured Blade.png" width="100%"></img>
          <img src="/CustomCards/Ayzens Blade.png" width="100%"></img>
          <img src="/CustomCards/Azyens Charm.png" width="100%"></img>
          <img src="/CustomCards/Azorius Signet.png" width="100%"></img>
          <img src="/CustomCards/Backtrack.png" width="100%"></img>
          <img src="/CustomCards/Backvoid Lurker.png" width="100%"></img>
          <img src="/CustomCards/Badlands.png" width="100%"></img>
          <img src="/CustomCards/Battlefield Forge.png" width="100%"></img>
          <img src="/CustomCards/Bayou.png" width="100%"></img>
          <img src="/CustomCards/Bear Tracks.png" width="100%"></img>
          <img src="/CustomCards/Beast Corraller.png" width="100%"></img>
          <img src="/CustomCards/Bestial Breakdown.png" width="100%"></img>
          <img src="/CustomCards/Betray in Kind.png" width="100%"></img>
          <img src="/CustomCards/Big Banana Duo.png" width="100%"></img>
          <img src="/CustomCards/Bini, Flopsy Rebel.png" width="100%"></img>
          <img src="/CustomCards/Bird Ape.png" width="100%"></img>
          <img src="/CustomCards/Bite.png" width="100%"></img>
          <img src="/CustomCards/Bleak Outlook.png" width="100%"></img>
          <img src="/CustomCards/Bless.png" width="100%"></img>
          <img src="/CustomCards/Blood of Iyo.png" width="100%"></img>
          <img src="/CustomCards/Bloodsoaked Spitecall.png" width="100%"></img>
          <img src="/CustomCards/Bolto, Lightning Built.png" width="100%"></img>
          <img src="/CustomCards/Bonse, Generous Host.png" width="100%"></img>
          <img src="/CustomCards/Bonses Charm.png" width="100%"></img>
          <img
            src="/CustomCards/Bordel, Champion of War.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Bordels Charm.png" width="100%"></img>
          <img src="/CustomCards/Borook, Wise Ape.png" width="100%"></img>
          <img src="/CustomCards/Borooks Charm.png" width="100%"></img>
          <img src="/CustomCards/Borooks Healer.png" width="100%"></img>
          <img src="/CustomCards/Boros Signet.png" width="100%"></img>
          <img
            src="/CustomCards/Bramblevine Rejuvenator.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Break Apart.png" width="100%"></img>
          <img src="/CustomCards/Break Formation.png" width="100%"></img>
          <img src="/CustomCards/Broken Ridgeline.png" width="100%"></img>
          <img src="/CustomCards/Brukhairos Charm.png" width="100%"></img>
          <img
            src="/CustomCards/Brukhairos, Dragon Tempest.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Brushland.png" width="100%"></img>
          <img
            src="/CustomCards/Burning Scourge Horizon.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Burning Spikewall.png" width="100%"></img>
          <img src="/CustomCards/Burrow Thumpers.png" width="100%"></img>
          <img src="/CustomCards/Burrowing Megawurm.png" width="100%"></img>
          <img src="/CustomCards/Burst Into Butterflies.png" width="100%"></img>
          <img src="/CustomCards/Cackling Coiners.png" width="100%"></img>
          <img src="/CustomCards/Cackling Ferrodrones.png" width="100%"></img>
          <img src="/CustomCards/Caged Moon.png" width="100%"></img>
          <img src="/CustomCards/Call of the Hunt.png" width="100%"></img>
          <img src="/CustomCards/Caves of Koilos.png" width="100%"></img>
          <img src="/CustomCards/Charging Knight.png" width="100%"></img>
          <img
            src="/CustomCards/Charm of the Endless Cycle.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Chestbeater.png" width="100%"></img>
          <img src="/CustomCards/Chief Carrot Constable.png" width="100%"></img>
          <img src="/CustomCards/Chord Caller.png" width="100%"></img>
          <img
            src="/CustomCards/Chorrok, the Croaking Infinity.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Civil Responder.png" width="100%"></img>
          <img src="/CustomCards/Cling To Sanity.png" width="100%"></img>
          <img
            src="/CustomCards/Collaborative Restraint.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Colonys Welcome.png" width="100%"></img>
          <img src="/CustomCards/Condemnation Angel.png" width="100%"></img>
          <img src="/CustomCards/Conga Kong.png" width="100%"></img>
          <img src="/CustomCards/Continued Charge.png" width="100%"></img>
          <img src="/CustomCards/Convergent Ritual.png" width="100%"></img>
          <img
            src="/CustomCards/Cralnit, Visionary Tinkerer.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Cralnits Charm.png" width="100%"></img>
          <img
            src="/CustomCards/Cralnits Runaway Reaction.png"
            width="100%"
          ></img>
          <img
            src="/CustomCards/Creaker, Creeping Cultist.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Creakers Charm.png" width="100%"></img>
          <img src="/CustomCards/Creeping Leech.png" width="100%"></img>
          <img src="/CustomCards/Crumple.png" width="100%"></img>
          <img src="/CustomCards/Curious Familiar.png" width="100%"></img>
          <img src="/CustomCards/Dark Destitution.png" width="100%"></img>
          <img src="/CustomCards/Dark Spurior.png" width="100%"></img>
          <img src="/CustomCards/Deathface Stalker.png" width="100%"></img>
          <img src="/CustomCards/Deathly Desert.png" width="100%"></img>
          <img src="/CustomCards/Debt Sway.png" width="100%"></img>
          <img src="/CustomCards/Deep Charge Well.png" width="100%"></img>
          <img src="/CustomCards/Deep Vine Jungle.png" width="100%"></img>
          <img src="/CustomCards/Defense Contractor.png" width="100%"></img>
          <img src="/CustomCards/Defensive Expediator.png" width="100%"></img>
          <img src="/CustomCards/Delirious Dreams.png" width="100%"></img>
          <img
            src="/CustomCards/Demon of Flailing Baronies.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Deny.png" width="100%"></img>
          <img src="/CustomCards/Deranged Descent.png" width="100%"></img>
          <img src="/CustomCards/Devoted Sternsire.png" width="100%"></img>
          <img src="/CustomCards/Dimir Signet.png" width="100%"></img>
          <img src="/CustomCards/Discount Viscounts Sun.png" width="100%"></img>
          <img src="/CustomCards/Disregard Trophies.png" width="100%"></img>
          <img src="/CustomCards/Dragon Ritual Commune.png" width="100%"></img>
          <img src="/CustomCards/Dragon Whisperer.png" width="100%"></img>
          <img src="/CustomCards/Dragonfire Calling.png" width="100%"></img>
          <img src="/CustomCards/Dragonforge.png" width="100%"></img>
          <img src="/CustomCards/Drakken.png" width="100%"></img>
          <img src="/CustomCards/Drakkenridge.png" width="100%"></img>
          <img src="/CustomCards/Dream Kindler.png" width="100%"></img>
          <img src="/CustomCards/Dreamwisp.png" width="100%"></img>
          <img src="/CustomCards/Dualbolt.png" width="100%"></img>
          <img
            src="/CustomCards/Durgogoth, Deaths Dirge.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Eightfold Paradox.png" width="100%"></img>
          <img src="/CustomCards/Elanoch the Inevitable.png" width="100%"></img>
          <img src="/CustomCards/Electro Eyes.png" width="100%"></img>
          <img src="/CustomCards/Electrocharge Denial.png" width="100%"></img>
          <img src="/CustomCards/Electrostatic Barrier.png" width="100%"></img>
          <img
            src="/CustomCards/Eledius, Scholar of Throbe.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Elephant Grove.png" width="100%"></img>
          <img src="/CustomCards/Elephortal.png" width="100%"></img>
          <img
            src="/CustomCards/Eloria, the Flowing Waters.png"
            width="100%"
          ></img>
          <img
            src="/CustomCards/Elowyn, Mistress of the Game.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Embrace the Rot.png" width="100%"></img>
          <img
            src="/CustomCards/Embrace the Worldscourge.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Emerald Lith.png" width="100%"></img>
          <img src="/CustomCards/Emergency Return.png" width="100%"></img>
          <img src="/CustomCards/Emergent Research Zone.png" width="100%"></img>
          <img src="/CustomCards/Endure the End.png" width="100%"></img>
          <img
            src="/CustomCards/Engruon, Forever Fighting.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Engruons Charm.png" width="100%"></img>
          <img src="/CustomCards/Ephemeral Evader.png" width="100%"></img>
          <img src="/CustomCards/Eradicate.png" width="100%"></img>
          <img src="/CustomCards/Erased Identity.png" width="100%"></img>
          <img src="/CustomCards/Erasure.png" width="100%"></img>
          <img src="/CustomCards/Erratic Explosion.png" width="100%"></img>
          <img src="/CustomCards/Erratik.png" width="100%"></img>
          <img src="/CustomCards/Esora, Angel of Mists.png" width="100%"></img>
          <img src="/CustomCards/Evolving Wilds.png" width="100%"></img>
          <img src="/CustomCards/Existential Encounter.png" width="100%"></img>
          <img src="/CustomCards/Export Inspectors.png" width="100%"></img>
          <img src="/CustomCards/Exsanguinape.png" width="100%"></img>
          <img src="/CustomCards/Eyl, The Electric.png" width="100%"></img>
          <img src="/CustomCards/Eyls Charm.png" width="100%"></img>
          <img src="/CustomCards/Fatalis Accorda.png" width="100%"></img>
          <img src="/CustomCards/Fate of the Damned.png" width="100%"></img>
          <img src="/CustomCards/Fate of the Heroic.png" width="100%"></img>
          <img src="/CustomCards/Fate of the Hunt.png" width="100%"></img>
          <img src="/CustomCards/Fate of the Inspired.png" width="100%"></img>
          <img src="/CustomCards/Fate of the Machine.png" width="100%"></img>
          <img src="/CustomCards/Fervant Goblomancer.png" width="100%"></img>
          <img src="/CustomCards/Fiery Filter.png" width="100%"></img>
          <img src="/CustomCards/Final Thoughts Stalker.png" width="100%"></img>
          <img src="/CustomCards/Final Thoughts.png" width="100%"></img>
          <img src="/CustomCards/Firefang Elder.png" width="100%"></img>
          <img src="/CustomCards/Firefang Herald.png" width="100%"></img>
          <img src="/CustomCards/Firefang Initiate.png" width="100%"></img>
          <img src="/CustomCards/Firefang Scrollkeeper.png" width="100%"></img>
          <img src="/CustomCards/Firga, Sunspot.png" width="100%"></img>
          <img src="/CustomCards/First Thing to Go.png" width="100%"></img>
          <img src="/CustomCards/Flaming Impetus.png" width="100%"></img>
          <img src="/CustomCards/Flint Dragon.png" width="100%"></img>
          <img src="/CustomCards/Flood Moon.png" width="100%"></img>
          <img src="/CustomCards/Floodzone.png" width="100%"></img>
          <img src="/CustomCards/Flurrious Flow.png" width="100%"></img>
          <img src="/CustomCards/Flutterwing Glider.png" width="100%"></img>
          <img
            src="/CustomCards/Forerunner of the Tempest.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Forgery Auditor.png" width="100%"></img>
          <img src="/CustomCards/Forthcaller.png" width="100%"></img>
          <img src="/CustomCards/Frantic Researcher.png" width="100%"></img>
          <img src="/CustomCards/Frayed Barracuda.png" width="100%"></img>
          <img src="/CustomCards/Frieja Shadowcloak.png" width="100%"></img>
          <img
            src="/CustomCards/Frilea, Vigilant Protector.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Frileas Charm.png" width="100%"></img>
          <img src="/CustomCards/Frog Keeper.png" width="100%"></img>
          <img
            src="/CustomCards/From Out of the Shadows.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Frontline Flickerer.png" width="100%"></img>
          <img src="/CustomCards/Frumblesea.png" width="100%"></img>
          <img src="/CustomCards/Future Flitterers.png" width="100%"></img>
          <img src="/CustomCards/Galvanising Goblins.png" width="100%"></img>
          <img
            src="/CustomCards/Garren, Marshall of the Gates.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Gentle Reclamation.png" width="100%"></img>
          <img src="/CustomCards/Ghora, Frail Mother.png" width="100%"></img>
          <img src="/CustomCards/Giant Wurm.png" width="100%"></img>
          <img
            src="/CustomCards/Giovnok, Guild Extortionist.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Giovnoks Charm.png" width="100%"></img>
          <img src="/CustomCards/Giovnoks Grasp.png" width="100%"></img>
          <img src="/CustomCards/Goat Pasture.png" width="100%"></img>
          <img src="/CustomCards/Goblin Krarkomancer.png" width="100%"></img>
          <img src="/CustomCards/Goblin Reforger.png" width="100%"></img>
          <img src="/CustomCards/Golgari Signet.png" width="100%"></img>
          <img src="/CustomCards/Gorankh the Ever-risen.png" width="100%"></img>
          <img src="/CustomCards/Grain Stomper.png" width="100%"></img>
          <img
            src="/CustomCards/Graulnor, Hungry Burrower.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Gravedigging.png" width="100%"></img>
          <img
            src="/CustomCards/Greater Demon of Minor Annoyance.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Grounded Lightning.png" width="100%"></img>
          <img src="/CustomCards/Growing Burden.png" width="100%"></img>
          <img src="/CustomCards/Grunvofk, Wolf Slayer.png" width="100%"></img>
          <img src="/CustomCards/Gruul Signet.png" width="100%"></img>
          <img
            src="/CustomCards/Gryliam, Gambler Extraordinaire.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Guttersnout.png" width="100%"></img>
          <img
            src="/CustomCards/Harbinger of the Worldscourge.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Hardmetal Strikeworker.png" width="100%"></img>
          <img src="/CustomCards/Harely There.png" width="100%"></img>
          <img src="/CustomCards/Harmbinger.png" width="100%"></img>
          <img src="/CustomCards/Harmful Herbalist.png" width="100%"></img>
          <img src="/CustomCards/Haruu Humph.png" width="100%"></img>
          <img src="/CustomCards/Hastily Built Wall.png" width="100%"></img>
          <img src="/CustomCards/Hatred for the Living.png" width="100%"></img>
          <img src="/CustomCards/Haven of Peace.png" width="100%"></img>
          <img src="/CustomCards/Healthy Haven.png" width="100%"></img>
          <img src="/CustomCards/Heartless Tutor.png" width="100%"></img>
          <img src="/CustomCards/Heaven.png" width="100%"></img>
          <img src="/CustomCards/Heavy Stompasaur.png" width="100%"></img>
          <img src="/CustomCards/Helix Auditor.png" width="100%"></img>
          <img src="/CustomCards/Herbalist Supplier.png" width="100%"></img>
          <img src="/CustomCards/Hired Hands.png" width="100%"></img>
          <img src="/CustomCards/Hold Identity.png" width="100%"></img>
          <img src="/CustomCards/Hooting Howler.png" width="100%"></img>
          <img src="/CustomCards/Horrifying Visager.png" width="100%"></img>
          <img src="/CustomCards/Hurricane Nester.png" width="100%"></img>
          <img src="/CustomCards/Illusory Glamour.png" width="100%"></img>
          <img src="/CustomCards/Imagine Anew.png" width="100%"></img>
          <img src="/CustomCards/In and Out.png" width="100%"></img>
          <img src="/CustomCards/Indignant Igniter.png" width="100%"></img>
          <img src="/CustomCards/Inexora, Cults Chorus.png" width="100%"></img>
          <img src="/CustomCards/Infected Urchin.png" width="100%"></img>
          <img src="/CustomCards/Insistent Recreation.png" width="100%"></img>
          <img src="/CustomCards/Insom, Shapechanger.png" width="100%"></img>
          <img src="/CustomCards/Insoms Charm.png" width="100%"></img>
          <img src="/CustomCards/Intrigue.png" width="100%"></img>
          <img src="/CustomCards/Invert.png" width="100%"></img>
          <img src="/CustomCards/Irreverant Smashwurm.png" width="100%"></img>
          <img src="/CustomCards/It That Observes.png" width="100%"></img>
          <img src="/CustomCards/Iyo Worldscourge.png" width="100%"></img>
          <img src="/CustomCards/Iyos Charm.png" width="100%"></img>
          <img src="/CustomCards/Izzet Signet.png" width="100%"></img>
          <img
            src="/CustomCards/Jacque, Retreating Inspiration.png"
            width="100%"
          ></img>
          <img
            src="/CustomCards/Jane Deese, Reckless Summoner.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Jet Lith.png" width="100%"></img>
          <img
            src="/CustomCards/Jorxi, Cultist Ringleader.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Jorxis Charm.png" width="100%"></img>
          <img src="/CustomCards/Jungle Forerunner.png" width="100%"></img>
          <img src="/CustomCards/Kaharl, Apex Mage.png" width="100%"></img>
          <img src="/CustomCards/Kaharls Charm.png" width="100%"></img>
          <img
            src="/CustomCards/Kami of the Endless Cycle.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Kami Portal.png" width="100%"></img>
          <img src="/CustomCards/Karplusan Forest.png" width="100%"></img>
          <img src="/CustomCards/Keep Order.png" width="100%"></img>
          <img src="/CustomCards/Keeper of Dark Tomes.png" width="100%"></img>
          <img src="/CustomCards/Kill.png" width="100%"></img>
          <img src="/CustomCards/Killer Ape.png" width="100%"></img>
          <img src="/CustomCards/Kon Ducta.png" width="100%"></img>
          <img src="/CustomCards/Kondas Masterpiece.png" width="100%"></img>
          <img src="/CustomCards/Krumplestumple.png" width="100%"></img>
          <img src="/CustomCards/Last Ditch Ditch.png" width="100%"></img>
          <img src="/CustomCards/Legacy Hero.png" width="100%"></img>
          <img src="/CustomCards/Lex Accorda.png" width="100%"></img>
          <img src="/CustomCards/Liberated Liferator.png" width="100%"></img>
          <img src="/CustomCards/Lick.png" width="100%"></img>
          <img src="/CustomCards/Lifeline Heritage.png" width="100%"></img>
          <img src="/CustomCards/Lightning Phoelix.png" width="100%"></img>
          <img src="/CustomCards/Lithic Abruption.png" width="100%"></img>
          <img src="/CustomCards/Lithic Landscape.png" width="100%"></img>
          <img src="/CustomCards/Lithic Medallion.png" width="100%"></img>
          <img src="/CustomCards/Lithic Petal.png" width="100%"></img>
          <img src="/CustomCards/Lithimancer of Throbe.png" width="100%"></img>
          <img src="/CustomCards/Lithimancers Tool.png" width="100%"></img>
          <img src="/CustomCards/Llacheilia Fleur.png" width="100%"></img>
          <img src="/CustomCards/Llanowar Wastes.png" width="100%"></img>
          <img
            src="/CustomCards/Loniron, King of the Pride.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Lonirons Charm.png" width="100%"></img>
          <img src="/CustomCards/Lootrunner.png" width="100%"></img>
          <img src="/CustomCards/Machine Cultist.png" width="100%"></img>
          <img src="/CustomCards/Madness.png" width="100%"></img>
          <img src="/CustomCards/Maintain Order.png" width="100%"></img>
          <img src="/CustomCards/Malignant Court.png" width="100%"></img>
          <img src="/CustomCards/Masako the Merciless.png" width="100%"></img>
          <img src="/CustomCards/Master of Construction.png" width="100%"></img>
          <img src="/CustomCards/Master of Rebirth.png" width="100%"></img>
          <img src="/CustomCards/Master of Toxins.png" width="100%"></img>
          <img src="/CustomCards/Merciless Ritualist.png" width="100%"></img>
          <img src="/CustomCards/Mired in Contemplation.png" width="100%"></img>
          <img src="/CustomCards/Monastery Midhouse.png" width="100%"></img>
          <img src="/CustomCards/Mountain Roamer.png" width="100%"></img>
          <img src="/CustomCards/Mox Lithic.png" width="100%"></img>
          <img src="/CustomCards/Mox Skull.png" width="100%"></img>
          <img src="/CustomCards/Murky Merger.png" width="100%"></img>
          <img src="/CustomCards/Mykaris, Cyclical Root.png" width="100%"></img>
          <img src="/CustomCards/Mystic Witch.png" width="100%"></img>
          <img
            src="/CustomCards/Narsutila, Magma Herald.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Narsutilas Carriage.png" width="100%"></img>{" "}
          <img src="/CustomCards/Narsutilas Charm.png" width="100%"></img>
          <img src="/CustomCards/Naturis Accorda.png" width="100%"></img>
          <img
            src="/CustomCards/Nibbles, Ascended Rabbit.png"
            width="100%"
          ></img>{" "}
          <img src="/CustomCards/No Time to Think.png" width="100%"></img>
          <img src="/CustomCards/Null Zone.png" width="100%"></img>
          <img src="/CustomCards/Ocean.png" width="100%"></img>
          <img src="/CustomCards/Odr the Mad.png" width="100%"></img>
          <img src="/CustomCards/Ohdrimah the Hoarder.png" width="100%"></img>
          <img src="/CustomCards/Oligarch Hedonist.png" width="100%"></img>
          <img
            src="/CustomCards/Ooukaaraa, Howling Chorus.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Ooze Clooze.png" width="100%"></img>
          <img src="/CustomCards/Opal Unicorn.png" width="100%"></img>
          <img src="/CustomCards/Orzhov Signet.png" width="100%"></img>
          <img src="/CustomCards/Oth Doomsayer.png" width="100%"></img>
          <img src="/CustomCards/Ouom, The Nothingness.png" width="100%"></img>
          <img src="/CustomCards/Overcommital.png" width="100%"></img>
          <img src="/CustomCards/Pain Respooler.png" width="100%"></img>
          <img src="/CustomCards/Parades Pride.png" width="100%"></img>
          <img
            src="/CustomCards/Paragor, Gorgon Absolutist.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Paragors Charm.png" width="100%"></img>
          <img src="/CustomCards/Pathmage Seritmul.png" width="100%"></img>
          <img src="/CustomCards/Pax Accorda.png" width="100%"></img>
          <img src="/CustomCards/Peacekeeper Centurion.png" width="100%"></img>
          <img src="/CustomCards/Pearl Lith.png" width="100%"></img>
          <img src="/CustomCards/Peel Away.png" width="100%"></img>
          <img src="/CustomCards/Penitent Reward.png" width="100%"></img>
          <img
            src="/CustomCards/Perelon, Crazed Alchemist.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Perelons Charm.png" width="100%"></img>
          <img src="/CustomCards/Petty Pilferer.png" width="100%"></img>
          <img src="/CustomCards/Pigeon Hoarder.png" width="100%"></img>
          <img src="/CustomCards/Pile of Dead Thrulls.png" width="100%"></img>
          <img src="/CustomCards/Pit Ritualist.png" width="100%"></img>
          <img src="/CustomCards/Plateau.png" width="100%"></img>
          <img src="/CustomCards/Polis Stayed.png" width="100%"></img>
          <img src="/CustomCards/Ponder, Stack Arbiter.png" width="100%"></img>
          <img src="/CustomCards/Pongo Pontificator.png" width="100%"></img>
          <img src="/CustomCards/Pongo Progression.png" width="100%"></img>
          <img
            src="/CustomCards/Preemptive Condemnation.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Preemptive Destruction.png" width="100%"></img>
          <img src="/CustomCards/Preemptive Disruption.png" width="100%"></img>
          <img src="/CustomCards/Preemptive Grudge.png" width="100%"></img>
          <img src="/CustomCards/Preemptive Impetus.png" width="100%"></img>
          <img src="/CustomCards/Preemptive Plagiarism.png" width="100%"></img>
          <img src="/CustomCards/Preemptive Rebuttal.png" width="100%"></img>
          <img src="/CustomCards/Preemptive Stampede.png" width="100%"></img>
          <img src="/CustomCards/Preemptive Warding.png" width="100%"></img>
          <img src="/CustomCards/Presence of Mind.png" width="100%"></img>
          <img src="/CustomCards/Prismatic Vista.png" width="100%"></img>
          <img src="/CustomCards/Prophetic Pummeller.png" width="100%"></img>
          <img src="/CustomCards/Prototype Firefang.png" width="100%"></img>
          <img src="/CustomCards/Pull from the Unknown.png" width="100%"></img>
          <img src="/CustomCards/Putrid Spirit.png" width="100%"></img>
          <img src="/CustomCards/Quander, Stack Auditor.png" width="100%"></img>
          <img src="/CustomCards/Quick Formulation.png" width="100%"></img>
          <img src="/CustomCards/Quick Reset.png" width="100%"></img>
          <img
            src="/CustomCards/Quonkle, Reverter of Time.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Quonkles Sentinel.png" width="100%"></img>
          <img src="/CustomCards/Quonkles Charm.png" width="100%"></img>
          <img src="/CustomCards/Rabbithole Retainer.png" width="100%"></img>
          <img src="/CustomCards/Rabid Prowler.png" width="100%"></img>
          <img src="/CustomCards/Rakdos Signet.png" width="100%"></img>
          <img src="/CustomCards/Rake the Corpse Pile.png" width="100%"></img>
          <img src="/CustomCards/Rallier of the Band.png" width="100%"></img>
          <img src="/CustomCards/Rampaging Beetle.png" width="100%"></img>
          <img src="/CustomCards/Rampant Vegetation.png" width="100%"></img>
          <img
            src="/CustomCards/Rayja, Desolation Champion.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Razor Wicker.png" width="100%"></img>
          <img src="/CustomCards/Reap the Thrullpits.png" width="100%"></img>
          <img src="/CustomCards/Rebirth Charm.png" width="100%"></img>
          <img src="/CustomCards/Reckless Plunderer.png" width="100%"></img>
          <img src="/CustomCards/Reclamation Machine.png" width="100%"></img>
          <img src="/CustomCards/Redraw Territory.png" width="100%"></img>
          <img src="/CustomCards/Reflame the Thought.png" width="100%"></img>
          <img src="/CustomCards/Reformation Nymph.png" width="100%"></img>
          <img src="/CustomCards/Refrazzle.png" width="100%"></img>
          <img
            src="/CustomCards/Reject the Worldscourge.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Relive the Pain.png" width="100%"></img>
          <img src="/CustomCards/Remove Soul.png" width="100%"></img>
          <img src="/CustomCards/Repeated Epiphany.png" width="100%"></img>
          <img src="/CustomCards/Requisite Replayer.png" width="100%"></img>
          <img src="/CustomCards/Research Gnomes.png" width="100%"></img>
          <img src="/CustomCards/Reset.png" width="100%"></img>
          <img src="/CustomCards/Restrainment Priest.png" width="100%"></img>
          <img src="/CustomCards/Retrotrigger Boundary.png" width="100%"></img>
          <img src="/CustomCards/Revealing Light.png" width="100%"></img>
          <img src="/CustomCards/Ritual Ascendant.png" width="100%"></img>
          <img src="/CustomCards/Ritual Circle.png" width="100%"></img>
          <img src="/CustomCards/Ritual of Death.png" width="100%"></img>
          <img src="/CustomCards/Ritual Summoner.png" width="100%"></img>
          <img src="/CustomCards/Roaka, Primal Champion.png" width="100%"></img>
          <img
            src="/CustomCards/Roar of the Worldscourge.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Rolling Stormvex.png" width="100%"></img>
          <img src="/CustomCards/Routine Cleanup.png" width="100%"></img>
          <img src="/CustomCards/Roza, Renegade Arbiter.png" width="100%"></img>
          <img src="/CustomCards/Rozas Charm.png" width="100%"></img>
          <img src="/CustomCards/Rubblised Renewal.png" width="100%"></img>
          <img src="/CustomCards/Ruby Lith.png" width="100%"></img>
          <img src="/CustomCards/Sallow.png" width="100%"></img>
          <img src="/CustomCards/Sanguine Gorilla.png" width="100%"></img>
          <img src="/CustomCards/Sap Out.png" width="100%"></img>
          <img src="/CustomCards/Sapphire Lith.png" width="100%"></img>
          <img src="/CustomCards/Savannah.png" width="100%"></img>
          <img src="/CustomCards/Savlatios Accorda.png" width="100%"></img>
          <img src="/CustomCards/Scaled Striker.png" width="100%"></img>
          <img src="/CustomCards/Scare Away.png" width="100%"></img>
          <img src="/CustomCards/Scrubland.png" width="100%"></img>
          <img src="/CustomCards/Secret Auditor.png" width="100%"></img>
          <img src="/CustomCards/Secret Sequester.png" width="100%"></img>
          <img src="/CustomCards/Seeds of Patience.png" width="100%"></img>
          <img src="/CustomCards/Seek Funding.png" width="100%"></img>
          <img src="/CustomCards/Selesnya Signet.png" width="100%"></img>
          <img src="/CustomCards/Self, Unrealised.png" width="100%"></img>
          <img src="/CustomCards/Selfs Charm.png" width="100%"></img>
          <img src="/CustomCards/Selvin Smith.png" width="100%"></img>
          <img
            src="/CustomCards/Serpentine Spiritualist.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Serum Infuser.png" width="100%"></img>
          <img src="/CustomCards/Shakey.png" width="100%"></img>
          <img src="/CustomCards/Shakeys Charm.png" width="100%"></img>
          <img src="/CustomCards/Shared Ploughs.png" width="100%"></img>
          <img src="/CustomCards/Shattered Time.png" width="100%"></img>
          <img src="/CustomCards/Shir, Sheer Shears.png" width="100%"></img>
          <img src="/CustomCards/Shivan Reef.png" width="100%"></img>
          <img src="/CustomCards/Showing Off.png" width="100%"></img>
          <img src="/CustomCards/Shrine of Self Hatred.png" width="100%"></img>
          <img src="/CustomCards/Shunk.png" width="100%"></img>
          <img src="/CustomCards/Sifted Legacy.png" width="100%"></img>
          <img src="/CustomCards/Simian Bloodsucker.png" width="100%"></img>
          <img src="/CustomCards/Simian Shrine.png" width="100%"></img>
          <img src="/CustomCards/Simian Stalker.png" width="100%"></img>
          <img src="/CustomCards/Simic Signet.png" width="100%"></img>
          <img src="/CustomCards/Simic Simulacrum.png" width="100%"></img>
          <img src="/CustomCards/Sink.png" width="100%"></img>
          <img
            src="/CustomCards/Sire of Stolen Sacraments.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Skeletons!.png" width="100%"></img>
          <img src="/CustomCards/Skittering Skrayer.png" width="100%"></img>
          <img
            src="/CustomCards/Skreeang, Heavy Slammer.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Skreeangs Charm.png" width="100%"></img>
          <img src="/CustomCards/Skreng.png" width="100%"></img>
          <img src="/CustomCards/Slag Collector.png" width="100%"></img>
          <img src="/CustomCards/Slagiron Giant.png" width="100%"></img>
          <img src="/CustomCards/Sleeping Simian.png" width="100%"></img>
          <img src="/CustomCards/Sleightveil Stalker.png" width="100%"></img>
          <img src="/CustomCards/Slimeraker.png" width="100%"></img>
          <img src="/CustomCards/Slow Written Note.png" width="100%"></img>
          <img src="/CustomCards/Slug from Beyond.png" width="100%"></img>
          <img src="/CustomCards/Smash Defenses.png" width="100%"></img>
          <img src="/CustomCards/Snapcast.png" width="100%"></img>
          <img src="/CustomCards/Sneaky Snake.png" width="100%"></img>
          <img src="/CustomCards/Sole Rule.png" width="100%"></img>
          <img src="/CustomCards/Some Cows.png" width="100%"></img>
          <img src="/CustomCards/Sootallo Cinder.png" width="100%"></img>
          <img src="/CustomCards/Soul Siphoner.png" width="100%"></img>
          <img src="/CustomCards/Sound the Bells.png" width="100%"></img>
          <img src="/CustomCards/Sovereign Firecurler.png" width="100%"></img>
          <img
            src="/CustomCards/Sphinx of Forgotten Promise.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Spirit Guide-Witch.png" width="100%"></img>
          <img src="/CustomCards/Spiritmonger.png" width="100%"></img>
          <img src="/CustomCards/Spiteful Slug.png" width="100%"></img>
          <img src="/CustomCards/Spiteful Visage.png" width="100%"></img>
          <img src="/CustomCards/Splendiforate.png" width="100%"></img>
          <img src="/CustomCards/Squeaking Ritualist.png" width="100%"></img>
          <img src="/CustomCards/Squelching Seer.png" width="100%"></img>
          <img src="/CustomCards/Squireless Knight.png" width="100%"></img>
          <img src="/CustomCards/Squires Interruption.png" width="100%"></img>
          <img src="/CustomCards/Stoke the Furnace.png" width="100%"></img>
          <img src="/CustomCards/Stomper Behemoth.png" width="100%"></img>
          <img src="/CustomCards/Stonegaze Breathtaker.png" width="100%"></img>
          <img src="/CustomCards/Stoneworks Garden.png" width="100%"></img>
          <img src="/CustomCards/Stormstone.png" width="100%"></img>
          <img src="/CustomCards/Stramboil.png" width="100%"></img>
          <img src="/CustomCards/Strict Flocketeer.png" width="100%"></img>
          <img src="/CustomCards/Strict Tutor.png" width="100%"></img>
          <img src="/CustomCards/Strobe.png" width="100%"></img>
          <img src="/CustomCards/Structural Rework.png" width="100%"></img>
          <img src="/CustomCards/Student of the Wind.png" width="100%"></img>
          <img src="/CustomCards/Subtle Strike Serpent.png" width="100%"></img>
          <img src="/CustomCards/Sudden Reduction.png" width="100%"></img>
          <img src="/CustomCards/Sudden Subsidence.png" width="100%"></img>
          <img src="/CustomCards/Sulfurous Springs.png" width="100%"></img>
          <img src="/CustomCards/Supplies Convoy.png" width="100%"></img>
          <img src="/CustomCards/Swift Naturalisation.png" width="100%"></img>
          <img src="/CustomCards/Taiga.png" width="100%"></img>
          <img src="/CustomCards/Take Charge.png" width="100%"></img>
          <img src="/CustomCards/Tall Tree Trampler.png" width="100%"></img>
          <img src="/CustomCards/Talon, Killing Shade.png" width="100%"></img>
          <img src="/CustomCards/Tamorc.png" width="100%"></img>
          <img src="/CustomCards/Tamorcs Command.png" width="100%"></img>
          <img
            src="/CustomCards/Tavok, Master of the Guard.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Tavoks Charm.png" width="100%"></img>
          <img src="/CustomCards/Tell and Show.png" width="100%"></img>
          <img src="/CustomCards/Terminor.png" width="100%"></img>
          <img src="/CustomCards/Territorial Screechmaw.png" width="100%"></img>
          <img src="/CustomCards/Terror of the Meek.png" width="100%"></img>
          <img src="/CustomCards/Terrormaster.png" width="100%"></img>
          <img
            src="/CustomCards/The Band of Banting Bunnies.png"
            width="100%"
          ></img>
          <img src="/CustomCards/The House of Flopsy.png" width="100%"></img>
          <img src="/CustomCards/The Incredible Zorbo!.png" width="100%"></img>
          <img src="/CustomCards/The Ovum-Progenitor.png" width="100%"></img>
          <img src="/CustomCards/The Ploughman.png" width="100%"></img>
          <img src="/CustomCards/The Pure.png" width="100%"></img>
          <img src="/CustomCards/The Red Rogue.png" width="100%"></img>
          <img src="/CustomCards/The Retaliatory War.png" width="100%"></img>
          <img src="/CustomCards/The Shaper of Flesh.png" width="100%"></img>
          <img src="/CustomCards/The Watchtower Behind.png" width="100%"></img>
          <img src="/CustomCards/The Watchtower Beside.png" width="100%"></img>
          <img src="/CustomCards/The Watchtower Beyond.png" width="100%"></img>
          <img
            src="/CustomCards/The Watchtower Over All.png"
            width="100%"
          ></img>
          <img src="/CustomCards/The Watchers Attention.png" width="100%"></img>
          <img src="/CustomCards/The Watchtower Within.png" width="100%"></img>
          <img src="/CustomCards/The Watchtower Without.png" width="100%"></img>
          <img src="/CustomCards/Throbes Passage.png" width="100%"></img>
          <img src="/CustomCards/Throben Aquarium.png" width="100%"></img>
          <img src="/CustomCards/Throben Archive.png" width="100%"></img>
          <img src="/CustomCards/Throben Armory.png" width="100%"></img>
          <img src="/CustomCards/Throben Researcher.png" width="100%"></img>
          <img src="/CustomCards/Throben Terror.png" width="100%"></img>
          <img src="/CustomCards/Tiny Rat.png" width="100%"></img>
          <img src="/CustomCards/Titan Taker.png" width="100%"></img>
          <img
            src="/CustomCards/Tomora, Frenzied Defiler.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Tomorrows Meal.png" width="100%"></img>
          <img src="/CustomCards/Trap Thought.png" width="100%"></img>
          <img
            src="/CustomCards/Triumvirate, Tricolour Triplet Trio.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Tropical Island.png" width="100%"></img>
          <img src="/CustomCards/Trove of Spawning.png" width="100%"></img>
          <img src="/CustomCards/Try Again.png" width="100%"></img>
          <img src="/CustomCards/Tumbling Brokenwood.png" width="100%"></img>
          <img src="/CustomCards/Tundra.png" width="100%"></img>
          <img
            src="/CustomCards/Tzaren, Hierarch of Chaos.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Underburrow.png" width="100%"></img>
          <img src="/CustomCards/Underground River.png" width="100%"></img>
          <img src="/CustomCards/Underground Sea.png" width="100%"></img>
          <img src="/CustomCards/Underworks Reputation.png" width="100%"></img>
          <img
            src="/CustomCards/Unkanash, Stomper of Foes.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Unkanashs Charm.png" width="100%"></img>
          <img src="/CustomCards/Unstable Lithic.png" width="100%"></img>
          <img src="/CustomCards/Unstable Valley.png" width="100%"></img>
          <img src="/CustomCards/Unwitting Apprentice.png" width="100%"></img>
          <img src="/CustomCards/Urayne, Powercore.png" width="100%"></img>
          <img src="/CustomCards/Valleyroar Dragon.png" width="100%"></img>
          <img src="/CustomCards/Varre of the All-Dust.png" width="100%"></img>
          <img src="/CustomCards/Veilpuller Grognit.png" width="100%"></img>
          <img src="/CustomCards/Vengeant Kami.png" width="100%"></img>
          <img src="/CustomCards/Vererberate.png" width="100%"></img>
          <img
            src="/CustomCards/Vilounk, Lord of Threats.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Volcanic Island.png" width="100%"></img>
          <img src="/CustomCards/Volcano.png" width="100%"></img>
          <img src="/CustomCards/Voltbeam.png" width="100%"></img>
          <img src="/CustomCards/Wake-Up Call.png" width="100%"></img>
          <img src="/CustomCards/Wall of Lith.png" width="100%"></img>
          <img
            src="/CustomCards/Wallflower, Gorgon of the Gate.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Wardstone.png" width="100%"></img>
          <img src="/CustomCards/Wasteful Scrounger.png" width="100%"></img>
          <img src="/CustomCards/Wastes.png" width="100%"></img>
          <img src="/CustomCards/Werrin Spellbreak.png" width="100%"></img>
          <img src="/CustomCards/Wickburn.png" width="100%"></img>
          <img src="/CustomCards/Wilderness.png" width="100%"></img>
          <img src="/CustomCards/Wildwood Protector.png" width="100%"></img>
          <img src="/CustomCards/Wildwood Tracker.png" width="100%"></img>
          <img src="/CustomCards/Wilebinder.png" width="100%"></img>
          <img src="/CustomCards/Wilful Ignorance.png" width="100%"></img>
          <img src="/CustomCards/Word of Constriction.png" width="100%"></img>
          <img src="/CustomCards/Word of Destruction.png" width="100%"></img>
          <img src="/CustomCards/Word of Law.png" width="100%"></img>
          <img src="/CustomCards/Word of Restoration.png" width="100%"></img>
          <img src="/CustomCards/Word of the Wild.png" width="100%"></img>
          <img src="/CustomCards/Wurm Den.png" width="100%"></img>
          <img src="/CustomCards/Wurmspyre Pyre.png" width="100%"></img>
          <img src="/CustomCards/Yavimaya Coast.png" width="100%"></img>
          <img src="/CustomCards/Yoink.png" width="100%"></img>
          <img src="/CustomCards/Yoke Folk.png" width="100%"></img>
          <img
            src="/CustomCards/Yom, Herald of the Feast.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Zorbchamber.png" width="100%"></img>
          <img src="/CustomCards/Zorbos Charm.png" width="100%"></img>
          <img
            src="/CustomCards/Zorbos Experimentations.png"
            width="100%"
          ></img>
          <img
            src="/CustomCards/Zorbos Presentation Stage.png"
            width="100%"
          ></img>
          <img src="/CustomCards/Zorbos Specimen.png" width="100%"></img>
        </>
      </Grid>
    </Grid>
  );
}
