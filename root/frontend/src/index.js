import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import themeGlobal from "./styling/themes";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={themeGlobal}>
    <CssBaseline />
    <Box
      height="100vh"
      display="flex"
      flex="1 0 1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding={1}
      sx={{
        fontFamily: "Rubik",
      }}
    >
      <App />
    </Box>
  </ThemeProvider>
);
