import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Box, Text } from "native-base";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TenantContext } from "../../core/contexts/TenantContext";
import Layout from "../../core/components/Layout";
import { ScrollView } from "react-native";
import ApolloSVGLogo from "../../core/images/ApolloSVGLogo";
import MotivePartnersSVGLogo from "../../core/images/MotivePartnersSVGLogo";
import staticContentJSON from "../../core/staticContent/staticContent.json";

const TermsAndConditions = (props) => {
  const {
    termsAndConditionsPage: { body },
  } = staticContentJSON;
  const tenentCtx = useContext(TenantContext);
  const navigation = useNavigation();
  return (
    <Layout scroll={false} offsetSides={0}>
      <Box style={styles.container}>
        <Box style={styles.ednaLogoWrapper}>
          {tenentCtx.tenant === "apollo" ? (
            <ApolloSVGLogo />
          ) : (
            <MotivePartnersSVGLogo />
          )}
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
            {body?.title}
          </Text>
          {body?.description &&
            body?.description.map((item) => (
              <Text
                key={item?.id}
                style={[
                  styles.termsText,
                  styles.mb20,
                  tenentCtx.tenant === "apollo"
                    ? styles.apolloTextClr
                    : styles.motiveTextClr,
                ]}
              >
                {item?.displayContent}
              </Text>
            ))}
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
    </Layout>
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
