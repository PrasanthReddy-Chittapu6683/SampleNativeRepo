import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Box, HStack, KeyboardAvoidingView, ScrollView } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import BackButton from "./BackButton";
import LogoLetters from "./LogoLetters";
import { isNil } from "ramda";
import NotificationsButton from "../../modules/notfications/components/NotificationsButton";
import ScreenContainer from "./ScreenContainer";
import PageTitle from "./PageTitle";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import Touchable from "./Touchable";
import ProfileIcon from "../images/ProfileIcon";
import { colors } from "../theme/colors";
import { goBack } from "../services/navigation";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { apolloColors } from "../theme/apolloColors";
import { TenantContext } from "../contexts/TenantContext";

const Layout = ({
  title,
  titleProps,
  children,
  offsetTop,
  offsetSides,
  offsetBottom,
  showBackButton,
  showBlank,
  onBackPress,
  backButtonProps,
  avoidKeyboard,
  scroll = true,
  renderHeaderRight,
  ...props
}) => {
  const insets = useSafeAreaInsets();
  const baseTopInset = insets.top;
  const route = useRoute();
  const navigation = useNavigation();
  const headingOffsetMultiplier = showBackButton ? 0.95 : 0.6;
  const headingOffset = `${baseTopInset * headingOffsetMultiplier}px`;
  const offsetTopToUse = offsetTop || "15px";
  const offsetSidesToUse = isNil(offsetSides) ? "page" : offsetSides;
  const offsetBottomToUse = isNil(offsetBottom) ? "0px" : offsetBottom;
  const tenentCtx = useContext(TenantContext);

  const renderPage = (content) => {
    if (avoidKeyboard) {
      content = (
        <TouchableWithoutFeedback
          onPress={() => {
            if (Keyboard.isVisible?.()) {
              Keyboard.dismiss();
            }
          }}
        >
          <KeyboardAvoidingView flex={1} behavior={"padding"}>
            {content}
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      );
    }

    if (scroll) {
      content = (
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

    return (
      <ScreenContainer>
        <Box
          _dark={{
            bg: tenentCtx.tenant === "motive" ? colors.gradients[900] : apolloColors.gradients[900],
          }}
          bg={tenentCtx.tenant === "motive" ? colors.gradients[100] : apolloColors.gradients[100]}
          flex={1}
          {...props}
        >
          {content}
        </Box>
      </ScreenContainer>
    );
  };

  return renderPage(
    <Box flex={1} pt={headingOffset}>
      {!showBlank && (
        <HStack
          alignItems={"center"}
          px={"page"}
          justifyContent={"space-between"}
        >
          {(showBackButton && (
            <BackButton
              mb={2}
              onPress={onBackPress || goBack}
              {...backButtonProps}
            />
          )) || <LogoLetters />}
          {route.name === "Main" ? (
            <HStack alignItems={"center"} space={3}>
              <NotificationsButton />
              <Touchable onPress={() => navigation.push("Profile")}>
                <ProfileIcon />
              </Touchable>
            </HStack>
          ) : null}
          {renderHeaderRight?.()}
        </HStack>
      )}
      {title && <PageTitle title={title} titleProps={titleProps} />}
      <Box
        flex={1}
        justifyContent={"space-between"}
        pt={`${offsetTopToUse}px`}
        px={offsetSidesToUse}
        pb={offsetBottomToUse}
      >
        {children}
      </Box>
    </Box>
  );
};

Layout.propTypes = {
  ...Box.propTypes,
  offsetTop: PropTypes.number,
  offsetSides: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  offsetBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  showBackButton: PropTypes.bool,
  showBlank: PropTypes.bool,
  onBackPress: PropTypes.func,
  backButtonProps: PropTypes.shape(BackButton.propTypes),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  titleProps: PropTypes.object,
  avoidKeyboard: PropTypes.bool,
  scroll: PropTypes.bool,
  children: PropTypes.node,
  renderHeaderRight: PropTypes.func,
};

export default Layout;
