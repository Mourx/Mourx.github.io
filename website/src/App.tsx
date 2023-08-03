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
  createTheme,
} from "@mui/material";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CommanderDecklistsPage } from "./Components/CommanderDecklistsPage";
import { RecipePage } from "./Components/RecipePage";
import { Link } from "react-router-dom";
import { ModernDecklistsPage } from "./Components/ModernDecklistsPage";

const theme = createTheme({ palette: { mode: "light" } });

function App() {
  const [openGames, setOpenGames] = React.useState(false);
  const [openMagic, setMagic] = React.useState(false);
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
              width: `calc(100% - ${240}px)`,
              ml: `${240}px`,
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
              width: 240,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: 240,
                minHeight: "100vh",
                boxSizing: "border-box",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                Where Go?
              </Typography>
            </Toolbar>
            <List>
              <ListItemButton to={"/Recipes"} component={Link}>
                Recipes
              </ListItemButton>
              <ListItemButton onClick={changeOpenGames}>
                Games
                {openGames ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openGames}>
                <List>
                  {["Forty Frogs", "Shapez"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
              <ListItemButton onClick={changeOpenMagic}>
                Magic Decks
                {openMagic ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openMagic}>
                <List>
                  <ListItem sx={{ paddingLeft: "2vw" }}>
                    <ListItemButton to={"/Commander"} component={Link}>
                      Commander
                    </ListItemButton>
                  </ListItem>

                  <ListItem sx={{ paddingLeft: "2vw" }}>
                    <ListItemButton to={"/Modern"} component={Link}>
                      Modern
                    </ListItemButton>
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Routes>
              <Route path="/" element={<CommanderDecklistsPage />} />
              <Route path="/Commander" element={<CommanderDecklistsPage />} />
              <Route path="/Modern" element={<ModernDecklistsPage />} />
              <Route path="/Recipes" element={<RecipePage />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </Box>
    </BrowserRouter>
  );
}

export default App;
