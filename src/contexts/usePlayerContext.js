import React, { createContext, useContext, useState } from "react";

export const PlayerContext = createContext();

export const usePlayerContext = () => useContext(PlayerContext);

export const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState({ playerName: "Messi", score: 0 });

  const increaseScore = () => {
    if (player.score < 100) {
      setPlayer((prevPlayer) => ({
        ...prevPlayer,
        score: prevPlayer.score + 1,
      }));
    }
  };

  const decreaseScore = () => {
    if (player.score > 0) {
      setPlayer((prevPlayer) => ({
        ...prevPlayer,
        score: prevPlayer.score - 1,
      }));
    }
  };

  return (
    <PlayerContext.Provider value={{ player, increaseScore, decreaseScore }}>
      {children}
    </PlayerContext.Provider>
  );
};
