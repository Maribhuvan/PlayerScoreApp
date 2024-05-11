import React from "react";

import { Grid, Container } from "@mui/material";

import { styles } from "./styles";
import ThemeCustomization from "./theme";
import { PlayerProvider } from "./contexts";
import { UserAvatar, PlayerScore, HighScore, AppBackground } from "./component";

const App = () => {
  return (
    <ThemeCustomization>
      <PlayerProvider>
        <AppBackground />
        <Container sx={styles.rootContainer}>
          <Grid sx={styles.headerGrid}>
            <Grid item>
              <HighScore />
            </Grid>
            <Grid item>
              <UserAvatar />
            </Grid>
          </Grid>
          <Grid sx={styles.playerGrid}>
            <PlayerScore />
          </Grid>
        </Container>
      </PlayerProvider>
    </ThemeCustomization>
  );
};

export default App;
