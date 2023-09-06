import React from "react";
import PropTypes from "prop-types";
import { FormControl, Input, Text } from "native-base";
import { useColor } from "../theme/colors";

const FormItem = ({
  label,
  labelProps,
  type,
  name,
  placeholder,
  value,
  defaultValue,
  errorMessage,
  onChangeText,
  autoComplete,
  autoCapitalize,
  autoCorrect,
  keyboardType,
  inputProps,
  renderInput,
  ...props
}) => {
  const baseInputProps = {
    variant: "underlined",
    placeholder,
    placeholderTextColor: "rgba(255, 255, 255, 0.5)",
    defaultValue,
    value,
    name,
    type,
    fontSize: 15,
    onChangeText,
    keyboardType,
    autoComplete,
    autoCapitalize,
    autoCorrect,
    h: "auto",
    ...inputProps,
  };
  const labelColor = useColor("headings.subTitle");

  return (
    <FormControl {...props}>
      {label && (
        <FormControl.Label
          mb={0}
          {...(labelProps || {})}
          _astrick={{
            color: labelColor,
            mt: "-2px",
            ...labelProps?._astrick,
          }}
          _text={{
            fontSize: "11px",
            color: labelColor,
            letterSpacing: "2px",
            textTransform: "uppercase",
            ...labelProps?._text,
          }}
        >
          {label}
        </FormControl.Label>
      )}
      {renderInput ? (
        renderInput(baseInputProps)
      ) : (
        <Input {...baseInputProps} />
      )}
      {errorMessage && (
        <Text color={"error.400"} mt={1}>
          {errorMessage}
        </Text>
      )}
    </FormControl>
  );
};

FormItem.propTypes = {
  ...FormControl.propTypes,
  label: PropTypes.string,
  labelProps: PropTypes.shape(FormControl.Label.propTypes),
  inputProps: PropTypes.shape(Input.propTypes),
  renderInput: PropTypes.func,
};

export default FormItem;
