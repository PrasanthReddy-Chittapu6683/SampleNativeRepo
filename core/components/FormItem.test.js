import React from "react";
import { fireEvent } from "@testing-library/react-native";
import FormItem from "./FormItem";
import { Input } from "native-base";

describe("FormItem", () => {
  it("renders label and input correctly", () => {
    const { getByText, getByPlaceholderText } = global.render(
      <FormItem label="Username" placeholder="Enter username" />
    );
    const label = getByText("Username");
    const input = getByPlaceholderText("Enter username");

    expect(label).toBeDefined();
    expect(input).toBeDefined();
  });

  it("calls onChangeText handler on input change", () => {
    const mockOnChangeText = jest.fn();
    const { getByPlaceholderText } = global.render(
      <FormItem
        label="Password"
        placeholder="Enter password"
        onChangeText={mockOnChangeText}
      />
    );
    const input = getByPlaceholderText("Enter password");

    fireEvent.changeText(input, "password123");

    expect(mockOnChangeText).toHaveBeenCalledWith("password123");
  });

  it("renders error message if provided", () => {
    const { getByText } = global.render(
      <FormItem
        label="Email"
        placeholder="Enter email"
        errorMessage="Invalid email address"
      />
    );
    const errorMessage = getByText("Invalid email address");

    expect(errorMessage).toBeDefined();
  });

  it("renders custom input component if provided", () => {
    const CustomInput = (props) => <Input {...props} testID="custom-input" />;
    const { getByTestId } = global.render(
      <FormItem label="Custom Input" renderInput={CustomInput} />
    );
    const customInput = getByTestId("custom-input");

    expect(customInput).toBeDefined();
  });
});
