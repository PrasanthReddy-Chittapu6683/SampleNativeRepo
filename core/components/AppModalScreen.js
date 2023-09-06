import React from "react";
import { Box, Divider, Flex, Heading, HStack, useTheme } from "native-base";
import PropTypes from "prop-types";
import CloseIcon from "../images/CloseIcon";
import Touchable, { TOUCHABLE_HITSLOP_VALUE } from "./Touchable";
import { goBack } from "../services/navigation";
import { isAndroid } from "../services/platform";

const AppModalScreen = ({
  title,
  children,
  headingProps,
  closeButtonProps,
  ...props
}) => {
  const { colors } = useTheme();
  const closeButtonHitSlop = TOUCHABLE_HITSLOP_VALUE * 1.4;
  const closeButtonNavigation = () => {
    goBack();
  };
  const offsetTop = isAndroid ? 9 : 5;

  return (
    <Box
      bg={colors.gradients[900]}
      _light={{
        bg: colors.gradients[100],
      }}
      flex={1}
      {...props}
    >
      <Box pt={offsetTop} position={"relative"} zIndex={2}>
        {(title && (
          <>
            <HStack
              justifyContent={"space-between"}
              alignItems={"center"}
              pl={"modal"}
              pr={6}
            >
              <Heading size={"title2"} {...headingProps}>
                {title}
              </Heading>
              <Touchable
                onPress={closeButtonNavigation}
                hitSlop={closeButtonHitSlop}
                r={2}
              >
                <CloseIcon {...closeButtonProps} />
              </Touchable>
            </HStack>
            <Divider mt={4} mb={6} />
          </>
        )) || (
          <Flex
            justifyContent={"flex-end"}
            flexDirection={"row"}
            pl={"modal"}
            pr={6}
          >
            <Touchable
              onPress={closeButtonNavigation}
              hitSlop={closeButtonHitSlop}
            >
              <CloseIcon {...closeButtonProps} />
            </Touchable>
          </Flex>
        )}
      </Box>
      <Box pb={8} flex={1} position={"relative"} zIndex={1}>
        {children}
      </Box>
    </Box>
  );
};

AppModalScreen.propTypes = {
  ...Box.propTypes,
  title: PropTypes.string,
  headingProps: PropTypes.shape(Heading.propTypes),
  closeButtonProps: PropTypes.shape(CloseIcon.propTypes),
};

export default AppModalScreen;
