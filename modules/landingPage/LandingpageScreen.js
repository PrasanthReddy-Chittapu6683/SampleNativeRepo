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
import PageButton from "../../core/components/PageButton";
import staticContentJSON from "../../core/staticContent/staticContent.json";
import EdnaSVGLogo from "../../core/images/EdnaSVGLogo";

const LandingpageScreen = (props) => {
  const {
    landingPage: { header, body, layoutBgColor, darkLayoutBgColor },
  } = staticContentJSON;

  const dimensions = useWindowDimensions();
  const orientation = useDeviceOrientation();
  const nonWebImgHeight = orientation.isLandscape
    ? dimensions.height / 2.8
    : dimensions.height / 1.5;
  const navigation = useNavigation();

  // const handleRoute = () => {
  //   navigation.push("Login");
  // };

  return (
    <Layout
      offsetTop={0}
      offsetSides={0}
      bg={layoutBgColor}
      _dark={{
        bg: darkLayoutBgColor,
      }}
    >
      <Box style={styles.container}>
        <Box style={styles.ednaLogoWrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.push(header?.logo?.navigateTo);
            }}
          >
            <EdnaSVGLogo />
          </TouchableOpacity>
        </Box>
        <Box style={styles.textAndBtnWrapper}>
          <Box>
            <Heading
              textAlign={"center"}
              style={[styles.mainTitle, styles.fw400]}
            >
              {body?.title}
            </Heading>
            <Text variant={"subTitle"} style={[styles.btnText, styles.fw300]}>
              {body?.description}
            </Text>
          </Box>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              navigation.push(body?.controls?.navigateTo);
            }}
          >
            <Text style={[styles.btnText, styles.fw400]}>
              {body?.controls?.displayName}
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </Layout>

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
    alignItems: "flex-start",
    padding: 16,
  },
  textAndBtnWrapper: {
    flex: 1,
    display: "flex",
    alignSelf: "center",
    justifyContent: "space-evenly",
  },
  loginBtn: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#7b57fc",
    borderRadius: 8,
    height: 53,
    justifyContent: "center",
  },
  mainTitle: { fontSize: 25, color: "#121220", marginBottom: 16 },
  btnText: {
    color: "#121220",
    textAlign: "center",
    fontSize: 15,
  },
  fw300: {
    fontWeight: 300,
  },
  fw400: {
    fontWeight: 400,
  },
});

export default LandingpageScreen;
