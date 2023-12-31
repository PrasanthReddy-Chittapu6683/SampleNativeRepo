import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Box, Heading, Text, ChevronLeftIcon, Image } from "native-base";
import { isWeb, useDeviceOrientation } from "../../core/services/platform";
import {
  useWindowDimensions,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { goBack } from "../../core/services/navigation";
import ApolloLogo from "../../assets/ApolloLogo.png";
import motiveLogo from "../../assets/motiveLogo.jpg";
import * as WebBrowser from "expo-web-browser";
import {
  makeRedirectUri,
  TokenResponse,
  useAuthRequest,
  useAutoDiscovery,
  use,
} from "expo-auth-session";
import * as AuthSession from "expo-auth-session";
import { Platform } from "react-native";
import configFile from "./auth.config";
import { setAuthToken } from "../../core/services/auth";
import { TenantContext } from "../../core/contexts/TenantContext";
import Layout from "../../core/components/Layout";
import staticContentJSON from "../../core/staticContent/staticContent.json";

const EmailPageScreen = (props) => {
  const {
    emailPage: { body, layoutBgColor, darkLayoutBgColor },
  } = staticContentJSON;
  const tenentCtx = useContext(TenantContext);
  const navigation = useNavigation();
  WebBrowser.maybeCompleteAuthSession();

  const useProxy = Platform.select({
    web: true,
    android: true,
    ios: true,
    default: true,
  });

  const discovery = useAutoDiscovery(configFile.oidc.issuer);
  const [loginCode, setloginCode] = useState("");
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: configFile.oidc.clientId,
      scopes: configFile.oidc.scopes,
      responseType: "token",
      extraParams: {
        nonce: "foo",
      },
      preferEphemeralSession: true,
      redirectUri: configFile.oidc.redirectUri,
    },
    discovery
  );

  useEffect(() => {
    if (response && response?.type === "success") {
      // const { code } = response?.params;
      // setAuthToken("eyJraWQiOiI0Rk9Qak9pazVYVEtsZnBHc3FWb01GdkNFR2ZmTkZ0WDIzdGJuT2FWamo4IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULkUtT1Z6R1FhOUQ0aEMyUHdDR1NudmlsUFg4dkxCTEZ3YktaNTRiT1l2N28iLCJpc3MiOiJodHRwczovL2Fwb2xsb2lkLm9rdGFwcmV2aWV3LmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2OTQwNDQxOTcsImV4cCI6MTY5NDA0Nzc5NywiY2lkIjoiMG9hNXFxbjV6YlhLNzZyY2YxZDciLCJ1aWQiOiIwMHU1dncxaHRxWXBLdXVxNzFkNyIsInNjcCI6WyJvcGVuaWQiLCJwcm9maWxlIl0sImF1dGhfdGltZSI6MTY5NDA0NDE5Niwic3ViIjoicGt1bWFycmVkZHlAYXBvbGxvLWFkdmlzb3JzLmNvbSIsIkdyb3VwcyI6WyJva3RhLWFwcGxpY2F0aW9uLWVtcGxveWVlaW52ZXN0b3ItZGV2Iiwib2t0YS1hcHBsaWNhdGlvbi1lbXBsb3llZWludmVzdG9yLWFkbWluLWRldiJdLCJwb3J0YWxGZWRlcmF0aW9uSWRPdmVycmlkZSI6InNwYXRlbEBhcG9sbG8uY29tIn0.M4ffFl--KX9Yd81_bx9OzraX2XvDuNAf66_usG9Txgi3cBcCUS5rQLepyzVf9kLMDSGypN8hHG6rpbx3RWzzISh4-1MOTr-lkbUcc44Fo6jxVsUTLsJEOFN2f1ZqUxH4uLHwLf6NhG9yo1x0mpYBQkl4ItRoAziiVufbOE4hrcoxXBBpwvEs4twpn8GoIbiqhK2WTS7iGOhySq2UEz2N8BN5JHQ9CNJMyw70cUsKmRAG3zFnAuFyFFDdlpNvCQA-c7oKuSRKJYzuBs2AVha9gXFfMvw2nZKt44o8BTEgdrDxAQmNADwSKtA0hD-SfS1fYNeI166-Z13X0JsCOwFKHQ")

      setAuthToken(response?.authentication?.accessToken);

      navigation.push("TermsAndConditionsPage");
      // navigation.navigate("Login");
      // navigation.push("Main", {
      //   currentTab: "Dashboard",
      // });
    } else if (response !== null) {
      // setAuthToken("eyJraWQiOiI0Rk9Qak9pazVYVEtsZnBHc3FWb01GdkNFR2ZmTkZ0WDIzdGJuT2FWamo4IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULkUtT1Z6R1FhOUQ0aEMyUHdDR1NudmlsUFg4dkxCTEZ3YktaNTRiT1l2N28iLCJpc3MiOiJodHRwczovL2Fwb2xsb2lkLm9rdGFwcmV2aWV3LmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2OTQwNDQxOTcsImV4cCI6MTY5NDA0Nzc5NywiY2lkIjoiMG9hNXFxbjV6YlhLNzZyY2YxZDciLCJ1aWQiOiIwMHU1dncxaHRxWXBLdXVxNzFkNyIsInNjcCI6WyJvcGVuaWQiLCJwcm9maWxlIl0sImF1dGhfdGltZSI6MTY5NDA0NDE5Niwic3ViIjoicGt1bWFycmVkZHlAYXBvbGxvLWFkdmlzb3JzLmNvbSIsIkdyb3VwcyI6WyJva3RhLWFwcGxpY2F0aW9uLWVtcGxveWVlaW52ZXN0b3ItZGV2Iiwib2t0YS1hcHBsaWNhdGlvbi1lbXBsb3llZWludmVzdG9yLWFkbWluLWRldiJdLCJwb3J0YWxGZWRlcmF0aW9uSWRPdmVycmlkZSI6InNwYXRlbEBhcG9sbG8uY29tIn0.M4ffFl--KX9Yd81_bx9OzraX2XvDuNAf66_usG9Txgi3cBcCUS5rQLepyzVf9kLMDSGypN8hHG6rpbx3RWzzISh4-1MOTr-lkbUcc44Fo6jxVsUTLsJEOFN2f1ZqUxH4uLHwLf6NhG9yo1x0mpYBQkl4ItRoAziiVufbOE4hrcoxXBBpwvEs4twpn8GoIbiqhK2WTS7iGOhySq2UEz2N8BN5JHQ9CNJMyw70cUsKmRAG3zFnAuFyFFDdlpNvCQA-c7oKuSRKJYzuBs2AVha9gXFfMvw2nZKt44o8BTEgdrDxAQmNADwSKtA0hD-SfS1fYNeI166-Z13X0JsCOwFKHQ")
      // navigation.push("Main", {
      //   currentTab: "Dashboard",
      // });
      console.log("Login Failure Response >>>", response);
    }
    setloginCode(response?.type);
  }, [response]);

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
              {body?.title}
            </Heading>

            {body?.controls &&
              body?.controls.map((control) => (
                <Box style={styles.imageWrapper} key={control?.id}>
                  <TouchableOpacity
                    onPress={() => {
                      tenentCtx.updateTenant(control?.tenant);
                      navigation.navigate(control?.navigateTo);
                      // if (control?.tenant === "apollo") {
                      //   promptAsync({ useProxy, preferEphemeralSession: true });
                      // } else {
                      //   navigation.navigate(control?.navigateTo);
                      // }
                    }}
                  >
                    <Image
                      source={
                        control?.tenant === "apollo" ? ApolloLogo : motiveLogo
                      }
                      alt={control?.alt}
                      resizeMode={"contain"}
                      w={"100%"}
                      h={isWeb ? 250 : 200}
                    />
                  </TouchableOpacity>
                </Box>
              ))}

            {/* <Text variant={"subTitle"} style={[styles.btnText, styles.fw300]}>
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
            </Box> */}
          </Box>
          {/* <TouchableOpacity style={styles.loginBtn}>
          <Text style={[styles.btnText, styles.fw400]}>NEXT</Text>
        </TouchableOpacity> */}
        </Box>
      </Box>
    </Layout>
  );
};

EmailPageScreen.propTypes = {};

const styles = StyleSheet.create({
  ednaLogoWrapper: {
    width: 200,
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    padding: 16,
  },
  imageWrapper: {
    margin: 20,
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

export default EmailPageScreen;
