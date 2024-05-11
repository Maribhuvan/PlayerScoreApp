/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HighScore from "../HighScore";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ highScore: 200 }),
  })
);

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

describe("HighScore component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("renders the high score", async () => {
    render(<HighScore />);
    await waitFor(() => {
      expect(screen.getByText("High Score")).toBeInTheDocument();
      expect(screen.getByText("200")).toBeInTheDocument();
    });
  });

  it("fetches the high score from the API and updates the state", async () => {
    render(<HighScore />);
    expect(fetch).toHaveBeenCalledWith(
      "http://echo.jsontest.com/highScore/200"
    );
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  it("handles fetching failure gracefully", async () => {
    global.fetch = jest.fn(() => Promise.reject("Fetch error"));
    render(<HighScore />);
    await waitFor(() => {
      expect(screen.getByText("High Score")).toBeInTheDocument();
      expect(screen.getByText("0")).toBeInTheDocument();
    });
  });
});
