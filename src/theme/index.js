import React, { useMemo } from "react";

import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Typography from "./typography";

export default function ThemeCustomization({ children }) {
  const themeTypography = Typography(`'Poppins'`);

  const themeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536,
        },
      },
      direction: "ltr",
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
      palette: {
        primary: {
          main: "#0d47a1",
        },
        secondary: {
          main: "#64b5f6",
          contrastText: "#ffffff",
        },
        accent: {
          main: "#ff9800",
        },
        text: {
          primary: "#333333",
          secondary: "#ffffff",
        },
      },
      typography: themeTypography,
    }),
    [themeTypography]
  );

  const themes = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
