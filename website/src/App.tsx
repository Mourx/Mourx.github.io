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
import { Insom } from "./Components/Magic/Insom";
import { Quonkle } from "./Components/Magic/Quonkle";

function App() {
  const [openGames, setOpenGames] = React.useState(false);
  const [openMagic, setMagic] = React.useState(false);
  const [openCustomPrecons, setCustomPrecons] = React.useState(false);
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

  const changeOpenCustomPrecons = () => {
    setCustomPrecons(!openCustomPrecons);
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
                Things to Do
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
                    <ListItem>
                      <ListItemButton href="https://fklfkl.itch.io/which-mode">
                        <Typography>Which Mode?</Typography>
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
                    <ListItem sx={{ paddingLeft: "1vw" }} onClick={changeDnd}>
                      <ListItemButton>
                        <Typography>
                          <ListItemButton href="/Santryl.pdf" target="_blank">
                            DnD 5e Homebrew - Santryl
                          </ListItemButton>
                        </Typography>
                        {/* {openDnd ? <ExpandLess /> : <ExpandMore />} */}
                      </ListItemButton>
                    </ListItem>

                    <ListItem sx={{ paddingLeft: "1vw" }} onClick={changeBtv}>
                      <ListItemButton>
                        <Typography>
                          <ListItemButton
                            href="/Beyond The Veil.pdf"
                            target="_blank"
                          >
                            Beyond The Veil
                          </ListItemButton>
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                    <ListItem sx={{ paddingLeft: "1vw" }} onClick={changeBtv}>
                      <ListItemButton>
                        <Typography>
                          <ListItemButton
                            href="/BtvCharacterSheet.pdf"
                            target="_blank"
                          >
                            Beyond The Veil Character Sheet
                          </ListItemButton>
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                    <ListItem sx={{ paddingLeft: "1vw" }} onClick={changeBtv}>
                      <ListItemButton>
                        <Typography>
                          <ListItemButton
                            href="/SantrylComplete.png"
                            target="_blank"
                          >
                            Santryl Map
                          </ListItemButton>
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Collapse>

                {/* Custom Magic */}
                <ListItemButton onClick={changeOpenCustomPrecons}>
                  <Typography>Custom Precons</Typography>
                  {openCustomPrecons ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openCustomPrecons}>
                  <List>
                    <ListItem sx={{ paddingLeft: "1vw" }}>
                      <ListItemButton
                        to={"/CustomPrecon/Quonkle"}
                        component={Link}
                      >
                        <Typography>Quonkle</Typography>
                      </ListItemButton>
                    </ListItem>

                    <ListItem sx={{ paddingLeft: "1vw" }}>
                      <ListItemButton
                        to={"/CustomPrecon/Insom"}
                        component={Link}
                      >
                        <Typography>Insom</Typography>
                      </ListItemButton>
                    </ListItem>
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
                  path="/CustomPrecon/Quonkle"
                  element={<Quonkle />}
                />{" "}
                <Route path="/CustomPrecon/Insom" element={<Insom />} />
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
