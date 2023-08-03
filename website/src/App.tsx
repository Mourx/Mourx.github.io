import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MagicDeckPreviewCard } from "./Components/MagicDeckPreviewCard";
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
  createTheme,
} from "@mui/material";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CommanderDecklistsPage } from "./Components/CommanderDecklistsPage";
import { RecipePage } from "./Components/RecipePage";
import { useNavigate, Link } from "react-router-dom";
import { link } from "fs";

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
                  <ListItemButton to={"/Magic"} component={Link}>
                    Commander
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Routes>
              <Route path="/" element={<CommanderDecklistsPage />} />
              <Route path="/Magic" element={<CommanderDecklistsPage />} />
              <Route path="/Recipes" element={<RecipePage />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </Box>
    </BrowserRouter>
  );
}

export default App;