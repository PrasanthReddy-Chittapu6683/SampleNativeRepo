import React, { useContext } from "react";
import Layout from "../../../core/components/Layout";
import { InvestContext } from "../contexts/InvestContext";
import { Box, Heading, HStack, ScrollView } from "native-base";
import CloseIcon from "../../../core/images/CloseIcon";
import { useNavigation } from "@react-navigation/native";
import { colors, resolveColor, useColor } from "../../../core/theme/colors";
import PageButton from "../../../core/components/PageButton";
import PropTypes from "prop-types";
import BackButton from "../../../core/components/BackButton";
import Touchable from "../../../core/components/Touchable";
import { FundContext } from "../contexts/FundContext";
import { isWeb } from "../../../core/services/platform";
import { goBack } from "../../../core/services/navigation";

const InvestLayout = ({
  children,
  title,
  canNext = true,
  onClosePress,
  onNextPress,
  buttonText = "Next Step",
  hideButton,
  showBackButton,
  buttonProps,
  contentContainerProps,
  scroll = true,
  ...props
}) => {
  const { fund } = useContext(FundContext);
  const navigation = useNavigation();
  const { step, steps, nextStep, previousStep } = useContext(InvestContext);
  const muted = useColor("borders.muted");
  const progressColor = useColor("buttons.base");
  const currentStepIndex = steps.findIndex((s) => step === s.name);
  const stepProgress = ((currentStepIndex + 1) / (steps.length + 1)) * 100;
  const fundStyle = fund?.style;
  const textColor = fundStyle?.primaryColor?.main || "white";
  const headingColor = fundStyle?.primaryColor?.main || "white";

  const renderScreen = (content) => {
    if (scroll) {
      return (
        <ScrollView
          flex={1}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          keyboardShouldPersistTaps={"always"}
        >
          {content}
        </ScrollView>
      );
    }
    return content;
  };

  return (
    <Layout
      showBlank
      offsetSides={0}
      offsetTop={!isWeb ? 55 : 0}
      scroll={false}
      bg={fundStyle?.backgroundColor || colors.gradients[900]}
      _dark={{
        bg: fundStyle?.backgroundColor || colors.gradients[900],
      }}
      {...props}
    >
      <Box flex={1}>
        {renderScreen(
          <Box pb={8} flex={1}>
            <HStack
              justifyContent={"space-between"}
              alignItems={"center"}
              borderTopWidth={"1px"}
              borderColor={muted}
              py={5}
              px={3}
            >
              <Box w={"20px"}>
                {showBackButton && (
                  <BackButton
                    onPress={() => goBack()}
                    iconProps={{
                      color: fundStyle?.primaryColor?.main,
                    }}
                  />
                )}
              </Box>
              <Heading
                size={"title3"}
                letterSpacing={"1px"}
                color={headingColor}
              >
                {title}
              </Heading>
              <Box>
                <Touchable
                  hitSlop={40}
                  onPress={() => {
                    if (onClosePress) {
                      return onClosePress(() => navigation.push("Main"));
                    }

                    return navigation.push("Main");
                  }}
                >
                  <CloseIcon fillColor={resolveColor(headingColor)} />
                </Touchable>
              </Box>
            </HStack>
            <Box position={"relative"}>
              <Box w={"100%"} h={"2px"} bg={muted} />
              <Box
                w={`${stepProgress}%`}
                position={"absolute"}
                bg={progressColor}
                h={"2px"}
              />
            </Box>
            <Box mt={7} {...contentContainerProps}>
              {children}
            </Box>
          </Box>
        )}
      </Box>

      {!hideButton && (
        <PageButton
          isDisabled={!canNext}
          px={"page"}
          pt={"page"}
          mt={0}
          bg={fundStyle?.backgroundColor}
          _light={{
            bg: fundStyle?.backgroundColor,
          }}
          buttonProps={{
            _text: {
              color: textColor,
              _light: {
                color: textColor,
              },
            },
          }}
          onPress={() => {
            if (onNextPress) {
              onNextPress(nextStep);
            } else {
              nextStep();
            }
          }}
          isLoadingText={buttonText}
          {...buttonProps}
        >
          {buttonText}
        </PageButton>
      )}
    </Layout>
  );
};

InvestLayout.propTypes = {
  ...Layout.propTypes,
  canNext: PropTypes.bool,
  onNextPress: PropTypes.func,
  onClosePress: PropTypes.func,
};

export default InvestLayout;
