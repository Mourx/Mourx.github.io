import React, { useEffect } from "react";

import "./App.css";
import {
  AppBar,
  Box,
  Collapse,
  CssBaseline,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CommanderDecklistsPage } from "./Components/Magic/CommanderDecklistsPage";
import { RecipePage } from "./Components/RecipePage";
import { Link } from "react-router-dom";
import { ModernDecklistsPage } from "./Components/Magic/ModernDecklistsPage";
import { MainPage } from "./Components/MainPage";
import { HistoryPage } from "./Components/Santryl/HistoryPage";
import { DndRulesPage } from "./Components/Dnd/DndRules";
import { theme } from "./Components/theme";
import { FaithPage } from "./Components/Santryl/Faith";
import { BtvRulesPage } from "./Components/Btv/BtvRules";
import { AubergineMeatballs } from "./Components/Recipes/AubergineMeatballs";
import { BlackBeanBurgers } from "./Components/Recipes/BlackBeanBurgers";
import { ButternutSquashPasta } from "./Components/Recipes/ButternutSquashPasta";
import { CreamyMushroomPasta } from "./Components/Recipes/CreamyMushroomPasta";
import { DoubleBeanAndRoastedPepperChilli } from "./Components/Recipes/DoubleBeanAndRoastedPepperChilli";
import { DutchBoerenKoolStamppot } from "./Components/Recipes/DutchBoerenKoolStamppot";
import { Falafels } from "./Components/Recipes/Falafels";
import { GreenRisotto } from "./Components/Recipes/GreenRisotto";
import { HalloumiSpinachCurry } from "./Components/Recipes/HalloumiSpinachCurry";
import { HarissaPasta } from "./Components/Recipes/HarissaPasta";
import { HeartyLentilStew } from "./Components/Recipes/HeartyLentilStew";
import { JewelledMoutzentra } from "./Components/Recipes/JewelledMoutzentra";
import { KungPaoCauliflower } from "./Components/Recipes/KungPaoCauliflower";
import { LentilShepherdsPie } from "./Components/Recipes/LentilShepherdsPie";
import { MapuTofu } from "./Components/Recipes/MapuTofu";
import { MinnestroneSoup } from "./Components/Recipes/MinnestroneSoup";
import { NamKhao } from "./Components/Recipes/NamKhao";
import { PastaBake } from "./Components/Recipes/PastaBake";
import { PotatoLentilSoup } from "./Components/Recipes/PotatoLentilSoup";
import { PuffPastryVegetableTart } from "./Components/Recipes/PuffPastryVegetableTart";
import { Quesadillas } from "./Components/Recipes/Quesadillas";
import { RedKidneyBeanCurry } from "./Components/Recipes/RedKidneyBeanCurry";
import { WinterQuinoaSalad } from "./Components/Recipes/WinterQuinoaSalad";
import { VegetableJambalaya } from "./Components/Recipes/VegetableJambalaya";
import { VegetableEnchiladas } from "./Components/Recipes/VegetableEnchiladas";
import { SweetPotatoTortilla } from "./Components/Recipes/SweetPotatoTortilla";
import { SweetPotatoChilli } from "./Components/Recipes/SweetPotatoChilli";
import { VeganKofta } from "./Components/Recipes/VeganKofta";
import { SweetTofu } from "./Components/Recipes/SweetTofu";
import { SpringPilau } from "./Components/Recipes/SpringPilau";
import { SpinachPaneerPulao } from "./Components/Recipes/SpinachPaneerPulao";
import { SausagePotatoKaleSoup } from "./Components/Recipes/SausagePotatoKaleSoup";
import { Samosas } from "./Components/Recipes/Samosas";
import { RedLentilCurry } from "./Components/Recipes/RedLentilCurry";

function App() {
  const [openGames, setOpenGames] = React.useState(false);
  const [openMagic, setMagic] = React.useState(false);
  const [openTTRPG, setTTRPG] = React.useState(false);
  const [openDnd, setDnd] = React.useState(false);
  const [openBtv, setBtv] = React.useState(false);
  const [openSantryl, setSantryl] = React.useState(false);

  const changeBtv = () => {
    setBtv(!openBtv);
  };

  const changeDnd = () => {
    setDnd(!openDnd);
  };

  const changeSantryl = () => {
    setSantryl(!openSantryl);
  };

  const changeTTRPG = () => {
    setTTRPG(!openTTRPG);
  };

  const changeOpenGames = () => {
    setOpenGames(!openGames);
  };

  const changeOpenMagic = () => {
    setMagic(!openMagic);
  };
  useEffect(() => {
    document.title = "Morx's Stuff :)";
  }, []);
  return (
    <BrowserRouter>
      <Box display={"flex"}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          {/* <AppBar
            elevation={0}
            sx={{
              width: `100%`,
            }}
          >
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                This is always here wow
              </Typography>
            </Toolbar>
          </AppBar> */}
          <Grid
            container
            xs={12}
            display="grid"
            sx={{ gridTemplateColumns: { md: "3fr 10fr" } }}
          >
            <Box sx={{ outline: "solid", height: "100%" }}>
              <Toolbar />
              <Typography textAlign="center" variant="h4">
                What we doin' now?
              </Typography>

              <List sx={{ paddingLeft: "4%" }}>
                {/* Recipes */}
                <ListItemButton to={"/Recipes"} component={Link}>
                  <Typography>Recipes</Typography>
                </ListItemButton>

                {/* Games */}
                <ListItemButton onClick={changeOpenGames}>
                  <Typography>Games</Typography>
                  {openGames ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openGames}>
                  <List>
                    <ListItem>
                      <ListItemButton href="https://mourx.itch.io/forty-frogs">
                        <Typography>Forty Frogs </Typography>
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton href="https://mourx.itch.io/shpz">
                        <Typography>Shpz </Typography>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Collapse>

                {/* TTRPG */}
                <ListItemButton onClick={changeTTRPG}>
                  <Typography>TTRPG Info </Typography>
                  {openTTRPG ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openTTRPG}>
                  <List>
                    {/* <ListItem
                      sx={{ paddingLeft: "1vw" }}
                      onClick={changeSantryl}
                    >
                      <ListItemButton>
                        <Typography>Santryl</Typography>
                        {/* {openSantryl ? <ExpandLess /> : <ExpandMore />} */}
                    {/* </ListItemButton>
                    </ListItem>
                    <Collapse in={openSantryl}>
                      <List>
                        <ListItem sx={{ paddingLeft: "2vw" }}>
                          <ListItemButton
                            to={"/Santryl/History"}
                            component={Link}
                          >
                            <Typography>History</Typography>
                          </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ paddingLeft: "2vw" }}>
                          <ListItemButton
                            to={"/Santryl/Faith"}
                            component={Link}
                          >
                            <Typography> Faith and Religion</Typography>
                          </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ paddingLeft: "2vw" }}>
                          <ListItemButton
                            to={"/Santryl/Gallia"}
                            component={Link}
                          >
                            <Typography>Gallia</Typography>
                          </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ paddingLeft: "2vw" }}>
                          <ListItemButton
                            to={"/Santryl/UnvariantEmpire"}
                            component={Link}
                          >
                            <Typography>Unvariant Empire</Typography>
                          </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ paddingLeft: "2vw" }}>
                          <ListItemButton
                            to={"/Santryl/CroakingConclave"}
                            component={Link}
                          >
                            <Typography>Croaking Conclave</Typography>
                          </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ paddingLeft: "2vw" }}>
                          <ListItemButton
                            to={"/Santryl/HighMount"}
                            component={Link}
                          >
                            <Typography>High Mount</Typography>
                          </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ paddingLeft: "2vw" }}>
                          <ListItemButton
                            to={"/Santryl/TheGoblins"}
                            component={Link}
                          >
                            <Typography>The Goblins</Typography>
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </Collapse> } */}

                    <ListItem sx={{ paddingLeft: "1vw" }} onClick={changeDnd}>
                      <ListItemButton>
                        <Typography>
                          <a href="/Santryl.pdf" target="_blank">
                            DnD 5e Homebrew - Santryl
                          </a>
                        </Typography>
                        {/* {openDnd ? <ExpandLess /> : <ExpandMore />} */}
                      </ListItemButton>
                    </ListItem>
                    {/* <Collapse in={openDnd}>
                      <List>
                        <ListItem sx={{ paddingLeft: "2vw" }}>
                          <ListItemButton to={"/Dnd/Rules"} component={Link}>
                            <Typography>Rule Differences</Typography>
                          </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ paddingLeft: "2vw" }}>
                          <ListItemButton
                            to={"/Dnd/Backgrounds"}
                            component={Link}
                          >
                            <Typography>Backgrounds</Typography>
                          </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ paddingLeft: "2vw" }}>
                          <ListItemButton to={"/Dnd/Race"} component={Link}>
                            <Typography>Race</Typography>
                          </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ paddingLeft: "2vw" }}>
                          <ListItemButton to={"/Dnd/Feats"} component={Link}>
                            <Typography>Feats</Typography>
                          </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ paddingLeft: "2vw" }}>
                          <ListItemButton to={"/Dnd/Classes"} component={Link}>
                            <Typography>Classes</Typography>
                          </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ paddingLeft: "2vw" }}>
                          <ListItemButton to={"/Dnd/Spells"} component={Link}>
                            <Typography>Spells</Typography>
                          </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ paddingLeft: "2vw" }}>
                          <ListItemButton to={"/Dnd/Factions"} component={Link}>
                            <Typography>Factions</Typography>
                          </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ paddingLeft: "2vw" }}>
                          <ListItemButton to={"/Dnd/Treasure"} component={Link}>
                            <Typography>Treasure</Typography>
                          </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ paddingLeft: "2vw" }}>
                          <ListItemButton to={"/Dnd/Bestiary"} component={Link}>
                            <Typography>Bestiary</Typography>
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </Collapse> */}

                    <ListItem sx={{ paddingLeft: "1vw" }} onClick={changeBtv}>
                      <ListItemButton>
                        <Typography>
                          <a href="/Beyond The Veil.pdf" target="_blank">
                            Beyond The Veil
                          </a>
                        </Typography>

                        {/* {openBtv ? <ExpandLess /> : <ExpandMore />} */}
                      </ListItemButton>
                    </ListItem>
                    <ListItem sx={{ paddingLeft: "1vw" }} onClick={changeBtv}>
                      <ListItemButton>
                        <Typography>
                          <a href="/SantrylComplete.png" target="_blank">
                            Santryl Map
                          </a>
                        </Typography>

                        {/* {openBtv ? <ExpandLess /> : <ExpandMore />} */}
                      </ListItemButton>
                    </ListItem>
                    {/* <Collapse in={openBtv}>
                      <List>
                        <ListItem sx={{ paddingLeft: "2vw" }}>
                          <ListItemButton to={"/Btv/Rules"} component={Link}>
                            <Typography>Basic Rules</Typography>
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </Collapse> */}
                  </List>
                </Collapse>

                {/* Magic */}
                <ListItemButton onClick={changeOpenMagic}>
                  <Typography>Magic Decks</Typography>
                  {openMagic ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openMagic}>
                  <List>
                    <ListItem sx={{ paddingLeft: "1vw" }}>
                      <ListItemButton to={"/Magic/Commander"} component={Link}>
                        <Typography>Commander</Typography>
                      </ListItemButton>
                    </ListItem>

                    <ListItem sx={{ paddingLeft: "1vw" }}>
                      <ListItemButton to={"/Magic/Modern"} component={Link}>
                        <Typography>Modern</Typography>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Collapse>
              </List>
            </Box>
            <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
              {/* <Toolbar /> */}
              <Routes>
                <Route path="/" element={<MainPage />} />

                <Route
                  path="/Magic/Commander"
                  element={<CommanderDecklistsPage />}
                />
                <Route path="/Magic/Modern" element={<ModernDecklistsPage />} />

                <Route path="/Santryl/History" element={<HistoryPage />} />
                <Route path="/Santryl/Faith" element={<FaithPage />} />

                <Route path="/Dnd/DndRules" element={<DndRulesPage />} />

                <Route path="/Btv/Rules" element={<BtvRulesPage />} />

                <Route path="/Recipes" element={<RecipePage />} />
                <Route
                  path="/Recipes/AubergineMeatballs"
                  element={<AubergineMeatballs />}
                />
                <Route
                  path="/Recipes/BlackBeanBurgers"
                  element={<BlackBeanBurgers />}
                />
                <Route
                  path="/Recipes/ButternutSquashPasta"
                  element={<ButternutSquashPasta />}
                />
                <Route
                  path="/Recipes/CreamyMushroomPasta"
                  element={<CreamyMushroomPasta />}
                />
                <Route
                  path="/Recipes/DoubleBeanAndRoastedPepperChilli"
                  element={<DoubleBeanAndRoastedPepperChilli />}
                />
                <Route
                  path="/Recipes/DutchBoerenKoolStamppot"
                  element={<DutchBoerenKoolStamppot />}
                />
                <Route path="/Recipes/Falafels" element={<Falafels />} />
                <Route
                  path="/Recipes/GreenRisotto"
                  element={<GreenRisotto />}
                />
                <Route
                  path="/Recipes/HalloumiSpinachCurry"
                  element={<HalloumiSpinachCurry />}
                />
                <Route
                  path="/Recipes/HarissaPasta"
                  element={<HarissaPasta />}
                />
                <Route
                  path="/Recipes/HeartyLentilStew"
                  element={<HeartyLentilStew />}
                />
                <Route
                  path="/Recipes/JewelledMoutzentra"
                  element={<JewelledMoutzentra />}
                />
                <Route
                  path="/Recipes/KungPaoCauliflower"
                  element={<KungPaoCauliflower />}
                />
                <Route
                  path="/Recipes/LentilShepherdsPie"
                  element={<LentilShepherdsPie />}
                />
                <Route path="/Recipes/MapuTofu" element={<MapuTofu />} />
                <Route
                  path="/Recipes/MinnestroneSoup"
                  element={<MinnestroneSoup />}
                />
                <Route path="/Recipes/NamKhao" element={<NamKhao />} />
                <Route path="/Recipes/PastaBake" element={<PastaBake />} />
                <Route
                  path="/Recipes/PotatoLentilSoup"
                  element={<PotatoLentilSoup />}
                />
                <Route
                  path="/Recipes/PuffPastryVegetableTart"
                  element={<PuffPastryVegetableTart />}
                />
                <Route path="/Recipes/Quesadillas" element={<Quesadillas />} />
                <Route
                  path="/Recipes/RedKidneyBeanCurry"
                  element={<RedKidneyBeanCurry />}
                />
                <Route
                  path="/Recipes/RedLentilCurry"
                  element={<RedLentilCurry />}
                />
                <Route path="/Recipes/Samosas" element={<Samosas />} />
                <Route
                  path="/Recipes/SausagePotatoKaleSoup"
                  element={<SausagePotatoKaleSoup />}
                />
                <Route
                  path="/Recipes/SpinachPaneerPulao"
                  element={<SpinachPaneerPulao />}
                />
                <Route path="/Recipes/SpringPilau" element={<SpringPilau />} />
                <Route
                  path="/Recipes/SweetPotatoChilli"
                  element={<SweetPotatoChilli />}
                />
                <Route
                  path="/Recipes/SweetPotatoTortilla"
                  element={<SweetPotatoTortilla />}
                />
                <Route path="/Recipes/SweetTofu" element={<SweetTofu />} />
                <Route path="/Recipes/VeganKofta" element={<VeganKofta />} />
                <Route
                  path="/Recipes/VegetableEnchiladas"
                  element={<VegetableEnchiladas />}
                />
                <Route
                  path="/Recipes/VegetableJambalaya"
                  element={<VegetableJambalaya />}
                />
                <Route
                  path="/Recipes/WinterQuinoaSalad"
                  element={<WinterQuinoaSalad />}
                />
              </Routes>
            </Box>
          </Grid>
        </ThemeProvider>
      </Box>
    </BrowserRouter>
  );
}

export default App;
