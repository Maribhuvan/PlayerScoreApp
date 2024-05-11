import React from "react";

import { Avatar, Grid, Typography } from "@mui/material";
import { usePlayerContext } from "../../contexts";

const UserAvatar = () => {
  const {
    player: { playerName },
  } = usePlayerContext();
  const avatarUrl = "https://picsum.photos/50";

  return (
    <Grid container columnGap={1} alignItems={"center"}>
      <Avatar alt={playerName} src={avatarUrl} />
      <Typography variant="h5" color={"text.secondary"}>
        {playerName}
      </Typography>
    </Grid>
  );
};

export default UserAvatar;
