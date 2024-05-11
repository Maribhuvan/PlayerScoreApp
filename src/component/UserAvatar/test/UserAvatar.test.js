import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UserAvatar from "../UserAvatar";
import { PlayerProvider, usePlayerContext } from "../../../contexts";

jest.mock("../../../contexts", () => ({
  ...jest.requireActual("../../../contexts"),
  usePlayerContext: jest.fn(),
}));

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

describe("UserAvatar component", () => {
  beforeEach(() => {
    usePlayerContext.mockReset();
  });

  it("renders the player's name", () => {
    const playerName = "Messi";
    usePlayerContext.mockReturnValueOnce({ player: { playerName } });

    render(
      <PlayerProvider>
        <UserAvatar />
      </PlayerProvider>
    );

    expect(screen.getByText(playerName)).toBeInTheDocument();
  });
});
