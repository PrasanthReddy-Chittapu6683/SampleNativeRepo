import React from "react";
import { render } from "@testing-library/react-native";
import App from "./App";

jest.mock("expo-font", () => ({
  useFonts: jest.fn().mockReturnValue([true]),
}));

describe("App", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("app-container")).toBeTruthy();
  });
});
