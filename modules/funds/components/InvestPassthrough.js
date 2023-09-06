import React, { useContext, useState } from "react";
import { InvestContext } from "../contexts/InvestContext";
import { Box, Center, Spinner } from "native-base";
import InvestLayout from "./InvestLayout";
import { useWindowDimensions } from "react-native";
import { FundContext } from "../contexts/FundContext";
import { cancelSubscription, getFundColors } from "../services/funds";
import { useNavigation } from "@react-navigation/native";
import { useApiRequest } from "../../../core/services/api";
import { downloadFile } from "../../../core/services/files";
import { reportException } from "../../../core/services/errors";
import WebViewCrossPlatform from "../../../core/components/WebViewCrossPlatform";
import { ModalsContext } from "../../../core/contexts/ModalsContext";
import { isWeb } from "../../../core/services/platform";

const InvestPassthrough = (props) => {
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const { fund } = useContext(FundContext);
  const { nextStep, subscription } = useContext(InvestContext);
  const [loading, setLoading] = useState(true);
  const { cashPaymentUrl } = useContext(InvestContext);
  const height = dimensions.height;
  const headerHeight = isWeb ? 75 : 117;
  const heightToUse = (!loading && height - headerHeight) || 0;
  const fundStyle = fund?.style;
  const { bg } = getFundColors(fundStyle);
  const post = useApiRequest("post");
  const { alert } = useContext(ModalsContext);

  const onClosePress = () => {
    alert("Exit Subscription", "What do you want to do?", [
      {
        text: "Exit the subscription",
        onPress: () => {
          navigation.reset({
            index: 0,
            routes: [{ name: "Main" }],
          });
        },
      },
      {
        text: "Resume on desktop",
        onPress: () => {
          post({
            url: `subscription/${subscription.id}/complete/web`,
          });
          navigation.reset({
            index: 0,
            routes: [{ name: "Main" }],
          });
        },
      },
      {
        text: "Cancel subscription",
        onPress: async (hideWebModal) => {
          alert(
            "Are you sure you want to cancel?",
            "You will lose all progress you have made.",
            [
              {
                text: "Yes",
                onPress: async () => {
                  await cancelSubscription(subscription);
                  navigation.reset({
                    index: 0,
                    routes: [{ name: "Main" }],
                  });
                },
              },
              {
                text: "No",
              },
            ]
          );

          return false;
        },
      },
      {
        text: "Close",
      },
    ]);
  };
  return (
    <InvestLayout
      title={"Subscription"}
      canNext={false}
      scroll={false}
      hideButton
      contentContainerProps={{
        mt: 0,
      }}
      onClosePress={onClosePress}
    >
      {cashPaymentUrl && (
        <Box h={`${heightToUse}px`} w={"100%"}>
          <WebViewCrossPlatform
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: bg,
            }}
            bounces={false}
            allowsInlineMediaPlayback
            allowFileAccess
            source={{ uri: cashPaymentUrl }}
            onLoadEnd={() => setLoading(false)}
            onNavigationStateChange={(navState) => {
              const { url } = navState;
              if (url.includes("/provider/passthrough/complete")) {
                nextStep("navigate");
              }
            }}
            onMessage={async (event) => {
              const payload = JSON.parse(event.nativeEvent.data);

              if (payload.type === "window.open") {
                const url = payload.data;
                // at some point may need to do something different based on url. Atm only window.open is to download the subscription-documents
                downloadFile(url, "subscription-documents.pdf");
              }

              if (payload.type === "error") {
                if (payload?.data?.message) {
                  payload.data.message = `Passthrough embed error: ${
                    payload.data.message || "No message supplied"
                  }`;
                }

                const error = new Error(
                  payload.data.message,
                  payload.data?.filename,
                  payload.data?.lineno
                );

                reportException(error);
                alert("Something went wrong, try again later", "", [
                  {
                    text: "Close",
                    onPress: () => {
                      navigation.reset({
                        index: 0,
                        routes: [{ name: "Main" }],
                      });
                    },
                  },
                ]);
              }
            }}
            injectedJavaScript={`
                window.open = function(url,windowName,parms) {
                  window.ReactNativeWebView.postMessage(JSON.stringify({
                    type: "window.open",
                    data: url
                  }));
                };
                
                window.addEventListener('unhandledrejection', function(event) {
                  window.ReactNativeWebView.postMessage(JSON.stringify({
                    type: "error",
                    data: {
                      message: event.reason && event.reason.message || event.reason || 'Passthrough promise rejection',
                      filename: event.reason && event.reason.filename || 'passthrough.js',
                      lineno: event.reason && event.reason.lineno || 1
                    }
                  }));  
                });
                
                window.addEventListener('error', function(event) {
                  window.ReactNativeWebView.postMessage(JSON.stringify({
                    type: "error",
                    data: {
                      message: event.error && event.error.message || event.message,
                      filename: event.error && event.error.filename || event.filename,
                      lineno: event.error && event.error.lineno || event.lineno
                    }
                  }));  
                });
                
              `}
          ></WebViewCrossPlatform>
        </Box>
      )}
      {loading && (
        <Center my={8}>
          <Spinner size={"lg"} color={fund?.style?.primaryColor?.main} />
        </Center>
      )}
    </InvestLayout>
  );
};

InvestPassthrough.propTypes = {};

export default InvestPassthrough;
