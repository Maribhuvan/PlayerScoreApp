/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import { PlayerProvider } from "./contexts";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ highScore: 200 }),
  })
);

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

jest.mock("./component/AppBackground", () => () => (
  <div data-testid="app-background" />
));

describe("App page", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("renders all child components", async () => {
    const score = 0;
    const playerName = "Messi";

    render(
      <PlayerProvider>
        <App />
      </PlayerProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("200")).toBeInTheDocument();
      expect(screen.getByText("Score")).toBeInTheDocument();
      expect(screen.getByText(score.toString())).toBeInTheDocument();
      expect(screen.getByText(playerName)).toBeInTheDocument();
    });
  });
});
