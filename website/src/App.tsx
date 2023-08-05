import React, { useEffect } from "react";

import "./App.css";
import {
  AppBar,
  Box,
  Collapse,
  CssBaseline,
  Drawer,
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
import { RulesPage } from "./Components/Dnd/Rules";
import { theme } from "./Components/theme";

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
        <CssBaseline />

        <ThemeProvider theme={theme}>
          <AppBar
            position="fixed"
            sx={{
              width: `calc(100% - ${20}vw)`,
              ml: `${20}vw`,
            }}
          >
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                This is always here wow
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: "20vw",
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: "20vw",
                minHeight: "100vh",
                boxSizing: "border-box",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Toolbar>
              <Typography
                sx={{ paddingLeft: "10%" }}
                variant="h6"
                noWrap
                component="div"
              >
                What we doin' now?
              </Typography>
            </Toolbar>
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
                  {["Forty Frogs", "Shapez"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText>
                          <Typography>{text}</Typography>
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>

              {/* TTRPG */}
              <ListItemButton onClick={changeTTRPG}>
                <Typography>TTRPG Info </Typography>
                {openTTRPG ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openTTRPG}>
                <List>
                  <ListItem sx={{ paddingLeft: "1vw" }}>
                    <ListItemButton onClick={changeSantryl}>
                      <Typography>Santryl</Typography>
                      {openSantryl ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
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
                        <ListItemButton to={"/Santryl/Faith"} component={Link}>
                          <Typography> Faith and Religion</Typography>
                        </ListItemButton>
                      </ListItem>
                      <ListItem sx={{ paddingLeft: "2vw" }}>
                        <ListItemButton to={"/Santryl/Gallia"} component={Link}>
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
                  </Collapse>

                  <ListItem sx={{ paddingLeft: "1vw" }} onClick={changeDnd}>
                    <ListItemButton>
                      <Typography>D&D 5e Homebrew</Typography>
                      {openDnd ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                  </ListItem>
                  <Collapse in={openDnd}>
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
                  </Collapse>

                  <ListItem sx={{ paddingLeft: "1vw" }} onClick={changeBtv}>
                    <ListItemButton>
                      <Typography>Beyond The Veil</Typography>
                      {openBtv ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                  </ListItem>
                  <Collapse in={openBtv}>
                    <List>
                      <ListItem sx={{ paddingLeft: "2vw" }}>
                        <ListItemButton to={"/Btv/Rules"} component={Link}>
                          <Typography>Basic Rules</Typography>
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </Collapse>
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
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Routes>
              <Route path="/" element={<MainPage />} />

              <Route
                path="/Magic/Commander"
                element={<CommanderDecklistsPage />}
              />
              <Route path="/Magic/Modern" element={<ModernDecklistsPage />} />

              <Route path="/Recipes" element={<RecipePage />} />

              <Route path="/Santryl/History" element={<HistoryPage />} />

              <Route path="/Dnd/Rules" element={<RulesPage />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </Box>
    </BrowserRouter>
  );
}

export default App;
