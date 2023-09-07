import React from "react";
import PropTypes from "prop-types";
import { Box, Image, Text, Heading } from "native-base";
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
import ednaSvgLogo from "../../assets/ednaLogoSVG.svg";
import PageButton from "../../core/components/PageButton";

const LandingpageScreen = (props) => {
  const dimensions = useWindowDimensions();
  const orientation = useDeviceOrientation();
  const nonWebImgHeight = orientation.isLandscape
    ? dimensions.height / 2.8
    : dimensions.height / 1.5;
  const navigation = useNavigation();
  // debugger;

  const handleRoute = () => {
    navigation.push("Login");
  };

  return (
    <Box style={styles.container}>
      <Box style={styles.ednaLogoWrapper}>
        <TouchableOpacity
          onPress={() => {
            navigation.push("/");
          }}
        >
          <Image
            source={ednaSvgLogo}
            alt={"slide.title"}
            resizeMode={"contain"}
            w={"147px"}
            h={"57px"}
          />
        </TouchableOpacity>
      </Box>
      <Box style={styles.textAndBtnWrapper}>
        <Box>
          <Heading
            textAlign={"center"}
            style={[styles.mainTitle, styles.fw400]}
          >
            Welcome
          </Heading>
          <Text variant={"subTitle"} style={[styles.btnText, styles.fw300]}>
            You’re just a few steps away from having the ability to invest in
            your employer's funds.
          </Text>
        </Box>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            navigation.push("EmailPage");
          }}
        >
          <Text style={[styles.btnText, styles.fw400]}>LOG IN</Text>
        </TouchableOpacity>
      </Box>
    </Box>

    // <Layout offsetSides={0}>
    //   <Box style={styles.container}>
    //     <Card
    //       body={
    //         <Box style={styles.imageWrapper}>
    //           <TouchableOpacity
    //             onPress={() => {
    //               navigation.push("Login", {
    //                 userDomain: "APOLLO",
    //               });
    //             }}
    //           >
    //             <Image
    //               source={ApolloLogo}
    //               alt={"slide.title"}
    //               resizeMode={"contain"}
    //               w={"100%"}
    //               h={isWeb ? "250px" : `300px`}
    //             />
    //           </TouchableOpacity>
    //         </Box>
    //       }
    //       onPress={handleRoute}
    //       dividerColor="#fff"
    //       cssStyles={styles.cardWrapperStyles}
    //     />
    //     <Box style={styles.imageWrapper}>
    //       <TouchableOpacity
    //         onPress={() => {
    //           navigation.push("Login", {
    //             userDomain: "APOLLO",
    //           });
    //         }}
    //       >
    //         <Image
    //           source={ApolloLogo}
    //           alt={"slide.title"}
    //           resizeMode={"contain"}
    //           w={"100%"}
    //           h={isWeb ? "250px" : `300px`}
    //         />
    //       </TouchableOpacity>
    //     </Box>

    //     <Box style={styles.imageWrapper}>
    //       <TouchableOpacity
    //         onPress={() => {
    //           navigation.push("Welcome", {
    //             userDomain: "MOTIVE",
    //           });
    //         }}
    //       >
    //         <Image
    //           source={motiveLogo}
    //           alt={"slide.title"}
    //           resizeMode={"contain"}
    //           w={"100%"}
    //           h={isWeb ? "250px" : `300px`}
    //         />
    //       </TouchableOpacity>
    //     </Box>
    //   </Box>
    // </Layout>
  );
};

LandingpageScreen.propTypes = {};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: "space-evenly",
  //   alignItems: "center",
  // },
  // imageWrapper: {
  //   width: "250px",
  // },
  // cardWrapperStyles: {
  //   border: "1px solid #fff",
  //   borderRadius: "0px",
  //   backgroundColor: "#eae7e4",
  // },
  ednaLogoWrapper: {
    width: 200,
  },
  container: {
    flex: 1,
    alignItems: "start",
    padding: 16,
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
    height: 53,
    justifyContent: "center",
  },
  mainTitle: { fontSize: 25, color: "#121220", marginBottom: 16 },
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

export default LandingpageScreen;
