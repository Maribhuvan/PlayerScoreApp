import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PlayerScore from "../PlayerScore";
import { PlayerProvider, usePlayerContext } from "../../../contexts";

jest.mock("../../../contexts", () => ({
  ...jest.requireActual("../../../contexts"),
  usePlayerContext: jest.fn(),
}));

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

describe("PlayerScore component", () => {
  beforeEach(() => {
    usePlayerContext.mockReset();
  });

  it("displays the player's score correctly", () => {
    const score = 10;
    usePlayerContext.mockReturnValueOnce({ player: { score } });

    render(
      <PlayerProvider>
        <PlayerScore />
      </PlayerProvider>
    );

    expect(screen.getByText("Score")).toBeInTheDocument();
    expect(screen.getByText(score.toString())).toBeInTheDocument();
  });

  it("increases the score when increase button is clicked", () => {
    const increaseScore = jest.fn();
    usePlayerContext.mockReturnValueOnce({
      player: { score: 10 },
      increaseScore,
    });

    render(
      <PlayerProvider>
        <PlayerScore />
      </PlayerProvider>
    );

    fireEvent.click(screen.getByText("Increase"));
    expect(increaseScore).toHaveBeenCalledTimes(1);
  });

  it("decreases the score when decrease button is clicked", () => {
    const decreaseScore = jest.fn();
    usePlayerContext.mockReturnValueOnce({
      player: { score: 10 },
      decreaseScore,
    });

    render(
      <PlayerProvider>
        <PlayerScore />
      </PlayerProvider>
    );

    fireEvent.click(screen.getByText("Decrease"));
    expect(decreaseScore).toHaveBeenCalledTimes(1);
  });
});
