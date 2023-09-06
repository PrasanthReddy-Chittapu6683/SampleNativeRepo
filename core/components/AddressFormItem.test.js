import React from "react";
import { fireEvent, waitFor } from "@testing-library/react-native";
import AddressFormItem from "./AddressFormItem";
import { api } from "../services/api";

jest.mock("../services/api", () => ({
  api: {
    get: jest.fn(),
  },
}));

jest.mock("../services/promises", () => ({
  ...jest.requireActual("../services/promises"),
  useDebounce: jest.fn((value) => [value, jest.fn()]),
}));

describe("AddressFormItem", () => {
  const props = {
    label: "Address",
    value: "",
    onChangeText: jest.fn(),
    containerProps: {},
  };

  it("should render without errors", () => {
    const { getByText } = global.render(<AddressFormItem {...props} />);
    expect(getByText(props.label)).toBeDefined();
  });

  it("should update input value when text is entered", () => {
    const { getByTestId } = global.render(<AddressFormItem {...props} />);
    const input = getByTestId("textarea-input");
    const text = "123 Main St";
    fireEvent.changeText(input, text);
    expect(props.onChangeText).toHaveBeenCalledWith(text);
  });

  it("should display suggestions when search is initiated", async () => {
    const mockResponse = {
      payload: [{ address: "123 Main St" }, { address: "456 Elm St" }],
    };
    api.get.mockResolvedValue(mockResponse);
    const { getByTestId, getAllByTestId } = global.render(
      <AddressFormItem {...props} value={"123 Main St"} />
    );
    const input = getByTestId("textarea-input");
    const text = "123 Main St changed";
    fireEvent.changeText(input, text);
    await waitFor(() => expect(api.get).toHaveBeenCalled());
    await waitFor(() =>
      expect(getAllByTestId("suggestion-item")).toHaveLength(2)
    );
    api.get.mockRestore();
  });

  it("should clear suggestions when clear button is pressed", async () => {
    const mockResponse = {
      payload: [{ address: "123 Main St" }],
    };
    api.get.mockResolvedValue(mockResponse);
    const { getByTestId, getByText, getAllByTestId, queryByTestId } =
      global.render(<AddressFormItem {...props} value={"123 Main St"} />);
    const input = getByTestId("textarea-input");
    const text = "123 Main St changed";
    fireEvent.changeText(input, text);
    await waitFor(() => expect(api.get).toHaveBeenCalled());
    await waitFor(() =>
      expect(getAllByTestId("suggestion-item")).toBeDefined()
    );
    const clearButton = getByText("Clear");
    fireEvent.press(clearButton);
    await waitFor(() => expect(queryByTestId("suggestion-item")).toBeNull());
    api.get.mockRestore();
  });
});
