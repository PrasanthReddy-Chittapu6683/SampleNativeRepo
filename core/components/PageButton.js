import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Spinner, useColorModeValue } from "native-base";

const PageButton = ({
  children,
  onPress,
  isDisabled,
  isLoading,
  isLoadingText,
  buttonProps,
  ...props
}) => {
  const spinnerColor = useColorModeValue("accent.500", "white");
  return (
    <Box pb={"page"} mt={8} {...props}>
      <Button
        size={"page"}
        onPress={onPress}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isLoadingText={isLoadingText || ""}
        spinner={<Spinner color={spinnerColor} />}
        {...buttonProps}
      >
        {children}
      </Button>
    </Box>
  );
};

PageButton.propTypes = {
  ...Box.propTypes,
  buttonProps: PropTypes.shape(Button.propTypes),
};

export default PageButton;
