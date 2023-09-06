import React from "react";
import PropTypes from "prop-types";
import { Box, ChevronLeftIcon, Pressable, useColorMode } from "native-base";
import Touchable from "./Touchable";

const BackButton = ({ variant = "primary", iconProps, onPress, ...props }) => {
  const { colorMode } = useColorMode();
  const variantPropsMap = {
    primary: {
      dark: {
        color: "accent.100",
      },
      light: {
        color: "accent.300",
      },
    },
    secondary: {
      dark: {
        color: "accent.500",
      },
      light: {
        color: "accent.325",
      },
    },
  };
  const variantProps = variantPropsMap[variant][colorMode] || {};

  return (
    <Touchable onPress={onPress}>
      <Box {...props}>
        <ChevronLeftIcon size={6} {...variantProps} {...iconProps} />
      </Box>
    </Touchable>
  );
};

BackButton.propTypes = {
  ...Pressable.prototypes,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  iconProps: PropTypes.object,
};

export default BackButton;
