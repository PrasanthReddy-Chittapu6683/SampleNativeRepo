import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Box, Text, Image } from "native-base";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TenantContext } from "../../core/contexts/TenantContext";
import Layout from "../../core/components/Layout";
import apolloLogoSvg from "../../assets/apolloLogoSVG.svg";
import motiveLogoSvg from "../../assets/motiveLogoSVG.svg";
import { ScrollView } from "react-native";

const TermsAndConditions = (props) => {
  const tenentCtx = useContext(TenantContext);
  const navigation = useNavigation();
  return (
    <Layout scroll={false} offsetSides={0}>
      <Box style={styles.container}>
        <Box style={styles.ednaLogoWrapper}>
            <Image
              source={
                tenentCtx.tenant === "apollo" ? apolloLogoSvg : motiveLogoSvg
              }
              alt={"slide.title"}
              resizeMode={"contain"}
              w={tenentCtx.tenant === "apollo" ? 102 : 142}
              h={30}
            />
        </Box>
        <ScrollView>
          <Text
            style={[
              styles.termsText,
              styles.mb20,
              tenentCtx.tenant === "apollo"
                ? styles.apolloTextClr
                : styles.motiveTextClr,
            ]}
          >
            TERMS AND CONDITIONS
          </Text>
          <Text
            style={[
              styles.termsText,
              styles.mb20,
              tenentCtx.tenant === "apollo"
                ? styles.apolloTextClr
                : styles.motiveTextClr,
            ]}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text
            style={[
              styles.termsText,
              styles.mb20,
              tenentCtx.tenant === "apollo"
                ? styles.apolloTextClr
                : styles.motiveTextClr,
            ]}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text
            style={[
              styles.termsText,
              styles.mb20,
              tenentCtx.tenant === "apollo"
                ? styles.apolloTextClr
                : styles.motiveTextClr,
            ]}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text
            style={[
              styles.termsText,
              styles.mb20,
              tenentCtx.tenant === "apollo"
                ? styles.apolloTextClr
                : styles.motiveTextClr,
            ]}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text
            style={[
              styles.termsText,
              styles.mb20,
              tenentCtx.tenant === "apollo"
                ? styles.apolloTextClr
                : styles.motiveTextClr,
            ]}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text
            style={[
              styles.termsText,
              styles.mb20,
              tenentCtx.tenant === "apollo"
                ? styles.apolloTextClr
                : styles.motiveTextClr,
            ]}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </ScrollView>
        <TouchableOpacity
          style={styles.acceptBtn}
          onPress={() => {
            // navigation.goBack();

            if (tenentCtx.tenant === "apollo") {
              navigation.push("Main", {
                currentTab: "Dashboard",
              });
            } else {
              navigation.push("Login", {
                userDomain: "APOLLO",
              });
            }

          }}
        >
          <Text style={[styles.btnText, styles.fw400]}>ACCEPT</Text>
        </TouchableOpacity>
      </Box>
    </Layout >
  );
};

TermsAndConditions.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    rowGap: 20,
  },
  ednaLogoWrapper: {
    alignSelf: "flex-start",
  },
  mb20: {
    marginBottom: 20,
  },
  apolloTextClr: {
    color: "#010101",
  },
  motiveTextClr: {
    color: "#fff",
  },
  termsText: { fontSize: 13 },
  acceptBtn: {
    border: "1px solid #7b57fc",
    borderRadius: 8,
    backgroundColor: "#7b57fc",
    height: 53,
    width: "100%",
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 15,
  },
  fw400: {
    fontWeight: 400,
  },
});

export default TermsAndConditions;
