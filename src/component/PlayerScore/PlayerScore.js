import React from "react";

import { Button, Grid, Typography } from "@mui/material";

import { usePlayerContext } from "../../contexts";

const PlayerScore = () => {
  const { player, increaseScore, decreaseScore } = usePlayerContext();

  return (
    <Grid
      container
      rowSpacing={10}
      alignItems="center"
      direction="column"
      justifyContent="center"
    >
      <Grid item>
        <Grid container direction={"column"} spacing={2} alignItems={"center"}>
          <Grid item>
            <Typography variant="h1" color={"text.secondary"}>
              Score
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1" color={"text.secondary"}>
              {player.score}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction={"row"} spacing={10}>
          <Grid item>
            <Button variant="contained" size="large" onClick={decreaseScore}>
              Decrease
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" size="large" onClick={increaseScore}>
              Increase
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PlayerScore;
