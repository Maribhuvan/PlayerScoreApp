import React, { useCallback, useEffect, useState } from "react";

import { Grid, Typography } from "@mui/material";

const HighScore = () => {
  const [highScore, setScore] = useState(0);

  const getHighScore = useCallback(async () => {
    try {
      const result = await fetch("http://echo.jsontest.com/highScore/200");
      const data = await result.json();
      setScore(data.highScore);
    } catch (e) {
      setScore(0);
    }
  }, []);

  useEffect(() => {
    getHighScore();
  }, []);

  return (
    <Grid
      container
      rowSpacing={1}
      direction="column"
      justifyContent="center"
      alignItems="left"
    >
      <Grid item>
        <Typography variant="h3" color={"text.secondary"}>
          High Score
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4" color={"text.secondary"}>
          {highScore}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HighScore;
