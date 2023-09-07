import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Center, Image, Text, View } from "native-base";
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
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, TokenResponse, useAuthRequest, useAutoDiscovery, use } from 'expo-auth-session';
import * as AuthSession from "expo-auth-session";
import { Platform } from "react-native";
import configFile from '../emailPage/auth.config';
import { setAuthToken } from "../../core/services/auth";


const LandingpageScreen = (props) => {
  WebBrowser.maybeCompleteAuthSession()

  const useProxy = Platform.select({ web: true, android: true, ios: true, default: true });


  const discovery = useAutoDiscovery(configFile.oidc.issuer);
  const [loginCode, setloginCode] = useState("")
  const navigation = useNavigation();

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: configFile.oidc.clientId,
      scopes: configFile.oidc.scopes,
      responseType: "token",
      extraParams: {
        nonce: "foo",
      },
      preferEphemeralSession: true,


      // For usage in managed apps using the proxy
      redirectUri: configFile.oidc.redirectUri,
      //     makeRedirectUri({
      //   // For usage in bare and standalone
      //   native: configFile.oidc.redirectUri,
      //   useProxy,
      // }),
    },
    discovery
  );

  // useEffect(() => {
  //   if (response && response?.type === 'success') {
  //     console.log("Login Access Token >>>", response?.authentication?.accessToken)
  //     // const { code } = response?.params;
  //     setAuthToken("eyJraWQiOiI0Rk9Qak9pazVYVEtsZnBHc3FWb01GdkNFR2ZmTkZ0WDIzdGJuT2FWamo4IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULkUtT1Z6R1FhOUQ0aEMyUHdDR1NudmlsUFg4dkxCTEZ3YktaNTRiT1l2N28iLCJpc3MiOiJodHRwczovL2Fwb2xsb2lkLm9rdGFwcmV2aWV3LmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2OTQwNDQxOTcsImV4cCI6MTY5NDA0Nzc5NywiY2lkIjoiMG9hNXFxbjV6YlhLNzZyY2YxZDciLCJ1aWQiOiIwMHU1dncxaHRxWXBLdXVxNzFkNyIsInNjcCI6WyJvcGVuaWQiLCJwcm9maWxlIl0sImF1dGhfdGltZSI6MTY5NDA0NDE5Niwic3ViIjoicGt1bWFycmVkZHlAYXBvbGxvLWFkdmlzb3JzLmNvbSIsIkdyb3VwcyI6WyJva3RhLWFwcGxpY2F0aW9uLWVtcGxveWVlaW52ZXN0b3ItZGV2Iiwib2t0YS1hcHBsaWNhdGlvbi1lbXBsb3llZWludmVzdG9yLWFkbWluLWRldiJdLCJwb3J0YWxGZWRlcmF0aW9uSWRPdmVycmlkZSI6InNwYXRlbEBhcG9sbG8uY29tIn0.M4ffFl--KX9Yd81_bx9OzraX2XvDuNAf66_usG9Txgi3cBcCUS5rQLepyzVf9kLMDSGypN8hHG6rpbx3RWzzISh4-1MOTr-lkbUcc44Fo6jxVsUTLsJEOFN2f1ZqUxH4uLHwLf6NhG9yo1x0mpYBQkl4ItRoAziiVufbOE4hrcoxXBBpwvEs4twpn8GoIbiqhK2WTS7iGOhySq2UEz2N8BN5JHQ9CNJMyw70cUsKmRAG3zFnAuFyFFDdlpNvCQA-c7oKuSRKJYzuBs2AVha9gXFfMvw2nZKt44o8BTEgdrDxAQmNADwSKtA0hD-SfS1fYNeI166-Z13X0JsCOwFKHQ")

  //     // setAuthToken(response?.authentication?.accessToken)
  //     // navigation.navigate("Login")
  //     navigation.push("Main", {
  //       currentTab: "Dashboard",
  //     });
  //   }
  //   else if (response !== null) {
  //     setAuthToken("eyJraWQiOiI0Rk9Qak9pazVYVEtsZnBHc3FWb01GdkNFR2ZmTkZ0WDIzdGJuT2FWamo4IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULkUtT1Z6R1FhOUQ0aEMyUHdDR1NudmlsUFg4dkxCTEZ3YktaNTRiT1l2N28iLCJpc3MiOiJodHRwczovL2Fwb2xsb2lkLm9rdGFwcmV2aWV3LmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2OTQwNDQxOTcsImV4cCI6MTY5NDA0Nzc5NywiY2lkIjoiMG9hNXFxbjV6YlhLNzZyY2YxZDciLCJ1aWQiOiIwMHU1dncxaHRxWXBLdXVxNzFkNyIsInNjcCI6WyJvcGVuaWQiLCJwcm9maWxlIl0sImF1dGhfdGltZSI6MTY5NDA0NDE5Niwic3ViIjoicGt1bWFycmVkZHlAYXBvbGxvLWFkdmlzb3JzLmNvbSIsIkdyb3VwcyI6WyJva3RhLWFwcGxpY2F0aW9uLWVtcGxveWVlaW52ZXN0b3ItZGV2Iiwib2t0YS1hcHBsaWNhdGlvbi1lbXBsb3llZWludmVzdG9yLWFkbWluLWRldiJdLCJwb3J0YWxGZWRlcmF0aW9uSWRPdmVycmlkZSI6InNwYXRlbEBhcG9sbG8uY29tIn0.M4ffFl--KX9Yd81_bx9OzraX2XvDuNAf66_usG9Txgi3cBcCUS5rQLepyzVf9kLMDSGypN8hHG6rpbx3RWzzISh4-1MOTr-lkbUcc44Fo6jxVsUTLsJEOFN2f1ZqUxH4uLHwLf6NhG9yo1x0mpYBQkl4ItRoAziiVufbOE4hrcoxXBBpwvEs4twpn8GoIbiqhK2WTS7iGOhySq2UEz2N8BN5JHQ9CNJMyw70cUsKmRAG3zFnAuFyFFDdlpNvCQA-c7oKuSRKJYzuBs2AVha9gXFfMvw2nZKt44o8BTEgdrDxAQmNADwSKtA0hD-SfS1fYNeI166-Z13X0JsCOwFKHQ")
  //     navigation.push("Main", {
  //       currentTab: "Dashboard",
  //     });
  //     console.log("Login Failure Response >>>", response)
  //   }
  //   setloginCode(response?.type)
  // }, [response]);

  const handleRoute = () => {
    navigation.push("Main", {
      currentTab: "Dashboard",
    });
  };
  const onPressClick = () => {
    alert("Hey")
  };

  // const res = {
  //   "authentication":
  //   {
  //     "accessToken":
  //       "eyJraWQiOiI0Rk9Qak9pazVYVEtsZnBHc3FWb01GdkNFR2ZmTkZ0WDIzdGJuT2FWamo4IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULkt3VFFkRW5UZ3RDN2tQVUIzc05XdmtIZDdKZG1Uams3U0pOcmF3MTNLa2ciLCJpc3MiOiJodHRwczovL2Fwb2xsb2lkLm9rdGFwcmV2aWV3LmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2OTQwMDQwMDUsImV4cCI6MTY5NDAwNzYwNSwiY2lkIjoiMG9hNXFxbjV6YlhLNzZyY2YxZDciLCJ1aWQiOiIwMHU1dncxaHRxWXBLdXVxNzFkNyIsInNjcCI6WyJwcm9maWxlIiwib3BlbmlkIl0sImF1dGhfdGltZSI6MTY5NDAwNDAwNCwic3ViIjoicGt1bWFycmVkZHlAYXBvbGxvLWFkdmlzb3JzLmNvbSIsIkdyb3VwcyI6WyJva3RhLWFwcGxpY2F0aW9uLWVtcGxveWVlaW52ZXN0b3ItZGV2Iiwib2t0YS1hcHBsaWNhdGlvbi1lbXBsb3llZWludmVzdG9yLWFkbWluLWRldiJdLCJwb3J0YWxGZWRlcmF0aW9uSWRPdmVycmlkZSI6InNwYXRlbEBhcG9sbG8uY29tIn0.lCKuMJSbnNLazS-4tMjls8MWinfKuxa4SlXq5OSfjGf-Ef0JVxVM-vy6NHWmQ0wFzdD05iW0FGuHCwc2GpEy9up7Phc2asPvobc7fVe5audjy9t03FzW33ePd_2lKac2XcaZTX--8GH6fsqshl__B53OQhw-6uO76h5P8rLNJCFn8Mc8pfLu2FYEVZPim8mnyHv85UpwMpcOAMQYbQLXCp7H35TR7qJvUY4irCUKhl-f0UStN4NlT7Dq0N00VC9v3XLt5GixjxHkipKl05f2r5IkLik7VY-6pCzyLQBHE3kMBQqRs8Tmai0XrEmc4yGQQ-_Sy0qUh5L_q1F2qyhTyw", "expiresIn": "3600", "idToken": undefined, "issuedAt": 1694004005, "refreshToken": undefined, "scope": "profile openid", "state": "KjN1PiksyP", "tokenType": "Bearer"
  //   }, "error": null, "errorCode": null, "params": { "access_token": "eyJraWQiOiI0Rk9Qak9pazVYVEtsZnBHc3FWb01GdkNFR2ZmTkZ0WDIzdGJuT2FWamo4IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULkt3VFFkRW5UZ3RDN2tQVUIzc05XdmtIZDdKZG1Uams3U0pOcmF3MTNLa2ciLCJpc3MiOiJodHRwczovL2Fwb2xsb2lkLm9rdGFwcmV2aWV3LmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2OTQwMDQwMDUsImV4cCI6MTY5NDAwNzYwNSwiY2lkIjoiMG9hNXFxbjV6YlhLNzZyY2YxZDciLCJ1aWQiOiIwMHU1dncxaHRxWXBLdXVxNzFkNyIsInNjcCI6WyJwcm9maWxlIiwib3BlbmlkIl0sImF1dGhfdGltZSI6MTY5NDAwNDAwNCwic3ViIjoicGt1bWFycmVkZHlAYXBvbGxvLWFkdmlzb3JzLmNvbSIsIkdyb3VwcyI6WyJva3RhLWFwcGxpY2F0aW9uLWVtcGxveWVlaW52ZXN0b3ItZGV2Iiwib2t0YS1hcHBsaWNhdGlvbi1lbXBsb3llZWludmVzdG9yLWFkbWluLWRldiJdLCJwb3J0YWxGZWRlcmF0aW9uSWRPdmVycmlkZSI6InNwYXRlbEBhcG9sbG8uY29tIn0.lCKuMJSbnNLazS-4tMjls8MWinfKuxa4SlXq5OSfjGf-Ef0JVxVM-vy6NHWmQ0wFzdD05iW0FGuHCwc2GpEy9up7Phc2asPvobc7fVe5audjy9t03FzW33ePd_2lKac2XcaZTX--8GH6fsqshl__B53OQhw-6uO76h5P8rLNJCFn8Mc8pfLu2FYEVZPim8mnyHv85UpwMpcOAMQYbQLXCp7H35TR7qJvUY4irCUKhl-f0UStN4NlT7Dq0N00VC9v3XLt5GixjxHkipKl05f2r5IkLik7VY-6pCzyLQBHE3kMBQqRs8Tmai0XrEmc4yGQQ-_Sy0qUh5L_q1F2qyhTyw", "com.oktapreview.apolloid:/callback": "", "expires_in": "3600", "scope": "profile openid", "state": "KjN1PiksyP", "token_type": "Bearer" }, "type": "success", "url": "com.oktapreview.apolloid:/callback#access_token=eyJraWQiOiI0Rk9Qak9pazVYVEtsZnBHc3FWb01GdkNFR2ZmTkZ0WDIzdGJuT2FWamo4IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULkt3VFFkRW5UZ3RDN2tQVUIzc05XdmtIZDdKZG1Uams3U0pOcmF3MTNLa2ciLCJpc3MiOiJodHRwczovL2Fwb2xsb2lkLm9rdGFwcmV2aWV3LmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2OTQwMDQwMDUsImV4cCI6MTY5NDAwNzYwNSwiY2lkIjoiMG9hNXFxbjV6YlhLNzZyY2YxZDciLCJ1aWQiOiIwMHU1dncxaHRxWXBLdXVxNzFkNyIsInNjcCI6WyJwcm9maWxlIiwib3BlbmlkIl0sImF1dGhfdGltZSI6MTY5NDAwNDAwNCwic3ViIjoicGt1bWFycmVkZHlAYXBvbGxvLWFkdmlzb3JzLmNvbSIsIkdyb3VwcyI6WyJva3RhLWFwcGxpY2F0aW9uLWVtcGxveWVlaW52ZXN0b3ItZGV2Iiwib2t0YS1hcHBsaWNhdGlvbi1lbXBsb3llZWludmVzdG9yLWFkbWluLWRldiJdLCJwb3J0YWxGZWRlcmF0aW9uSWRPdmVycmlkZSI6InNwYXRlbEBhcG9sbG8uY29tIn0.lCKuMJSbnNLazS-4tMjls8MWinfKuxa4SlXq5OSfjGf-Ef0JVxVM-vy6NHWmQ0wFzdD05iW0FGuHCwc2GpEy9up7Phc2asPvobc7fVe5audjy9t03FzW33ePd_2lKac2XcaZTX--8GH6fsqshl__B53OQhw-6uO76h5P8rLNJCFn8Mc8pfLu2FYEVZPim8mnyHv85UpwMpcOAMQYbQLXCp7H35TR7qJvUY4irCUKhl-f0UStN4NlT7Dq0N00VC9v3XLt5GixjxHkipKl05f2r5IkLik7VY-6pCzyLQBHE3kMBQqRs8Tmai0XrEmc4yGQQ-_Sy0qUh5L_q1F2qyhTyw&token_type=Bearer&expires_in=3600&scope=profile+openid&state=KjN1PiksyP"
  // }
  return (
    <Layout offsetSides={0}>
      <Box style={styles.container}>
        <Button size={"cta"}
          onPress={handleRoute}
        // onPress={() => {
        //   promptAsync({ useProxy, preferEphemeralSession: true });
        // }}
        >
          Login
        </Button>
        <Text style={styles.text}>Response Type : {loginCode}</Text>

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
