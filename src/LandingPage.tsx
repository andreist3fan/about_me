import * as React from "react";
import { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "./components/AppAppBar";
import Hero from "./components/Hero";
// import LogoCollection from "./components/LogoCollection";
import Highlights from "./components/Highlights";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import TimelineComponent from "./components/Timeline";

export default function LandingPage() {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        {/* <LogoCollection /> */}
        <TimelineComponent/>
        <Divider />
        <Projects />
        <Divider />
        <ContactMe />
        <Divider />
        <Highlights />
        <Divider />
      </Box>
    </ThemeProvider>
  );
}
