import React from "react";
import PropTypes from "prop-types";
import { Box, Center, Image, Text, View } from "native-base";
import { isWeb, useDeviceOrientation } from "../../core/services/platform";
import {
  useWindowDimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../core/components/Layout";
import Card from "../../core/components/Card";
import ApolloLogo from "../../assets/ApolloLogo.png";
import motiveLogo from "../../assets/motiveLogo.jpg";

const LandingpageScreen = (props) => {
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
    <Layout offsetSides={0}>
      <Box style={styles.container}>
        <Card
          header={<Box>Header for card</Box>}
          body={<Box>Body for card</Box>}
          footer={<Box>Footer for card</Box>}
          onPress={handleRoute}
          dividerColor="#fff"
          cssStyles={styles.cardWrapperStyles}
        />
        <Box style={styles.imageWrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.push("Login", {
                userDomain: "APOLLO",
              });
            }}
          >
            <Image
              source={ApolloLogo}
              alt={"slide.title"}
              resizeMode={"contain"}
              w={"100%"}
              h={isWeb ? "250px" : `300px`}
            />
          </TouchableOpacity>
        </Box>

        <Box style={styles.imageWrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.push("Welcome", {
                userDomain: "MOTIVE",
              });
            }}
          >
            <Image
              source={motiveLogo}
              alt={"slide.title"}
              resizeMode={"contain"}
              w={"100%"}
              h={isWeb ? "250px" : `300px`}
            />
          </TouchableOpacity>
        </Box>
      </Box>
    </Layout>
  );
};

LandingpageScreen.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  imageWrapper: {
    width: "250px",
  },
  cardWrapperStyles: {
    border: "1px solid #fff",
    borderRadius: "0px",
  },
});

export default LandingpageScreen;
