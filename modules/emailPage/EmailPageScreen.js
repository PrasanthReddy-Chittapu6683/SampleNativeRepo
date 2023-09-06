import React from "react";
import PropTypes from "prop-types";
import { Box, Heading, Text, ChevronLeftIcon } from "native-base";
import { isWeb, useDeviceOrientation } from "../../core/services/platform";
import {
  useWindowDimensions,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { goBack } from "../../core/services/navigation";

const EmailPageScreen = (props) => {
  const dimensions = useWindowDimensions();
  const orientation = useDeviceOrientation();
  const nonWebImgHeight = orientation.isLandscape
    ? dimensions.height / 2.8
    : dimensions.height / 1.5;
  const navigation = useNavigation();
  debugger;

  const handleRoute = () => {
    navigation.push("Login");
  };

  return (
    <Box style={styles.container}>
      <Box style={styles.ednaLogoWrapper}>
        <TouchableOpacity onPress={goBack}>
          <ChevronLeftIcon size={6} style={{ color: "#121220" }} />
        </TouchableOpacity>
      </Box>
      <Box style={styles.textAndBtnWrapper}>
        <Box>
          <Heading
            textAlign={"center"}
            style={[styles.mainTitle, styles.fw400]}
          >
            WHAT'S YOUR EMAIL ADDRESS?
          </Heading>
          <Text variant={"subTitle"} style={[styles.btnText, styles.fw300]}>
            To login, we'll need your email address.
          </Text>
          <Box style={{ marginTop: "36px" }}>
            <TextInput
              placeholder="Enter your email"
              style={{
                borderBottom: "1px solid #906aff",
                padding: "5px",
                outlineStyle: "none",
                outlineWidth: 0,
                outlineColor: "transparent",
              }}
            />
          </Box>
        </Box>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={[styles.btnText, styles.fw400]}>NEXT</Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

EmailPageScreen.propTypes = {};

const styles = StyleSheet.create({
  ednaLogoWrapper: {
    width: "200px",
  },
  container: {
    flex: 1,
    alignItems: "start",
    padding: "16px",
  },
  textAndBtnWrapper: {
    flex: 1,
    display: "flex",
    alignSelf: "center",
    justifyContent: "space-evenly",
  },
  loginBtn: {
    border: "1px solid #7b57fc",
    borderRadius: "8px",
    height: "53px",
    justifyContent: "center",
  },
  mainTitle: { fontSize: "25px", color: "#121220", marginBottom: "16px" },
  btnText: {
    color: "#121220",
    textAlign: "center",
    fontSize: "15px",
  },
  fw300: {
    fontWeight: 300,
  },
  fw400: {
    fontWeight: 400,
  },
});

export default EmailPageScreen;
