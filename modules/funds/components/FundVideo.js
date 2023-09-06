import React, { useContext, useState } from "react";
import AppModalScreen from "../../../core/components/AppModalScreen";
import { FundContext } from "../contexts/FundContext";
import { api } from "../../../core/services/api";
import { DASHBOARD_URL } from "@env";
import { Box, Button, Center, Spinner, TextArea, VStack } from "native-base";
import WebView from "react-native-webview";
import FormItem from "../../../core/components/FormItem";

const FundVideo = () => {
  const { fund } = useContext(FundContext);
  const [videoInterests, setVideoInterests] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState();
  const getVideo = async () => {
    setLoading(true);
    const { payload } = await api.post({
      url: `opportunity/${fund.id}/video`,
      data: {
        interests: videoInterests,
      },
    });

    setVideoUrl(`${DASHBOARD_URL}/video/${payload.id}/${payload.token}`);
    setLoading(false);
  };
  const textColor = fund.style.primaryColor?.main;

  return (
    <AppModalScreen
      title={"Video"}
      bg={fund.style.backgroundColor}
      _light={{
        bg: fund.style.backgroundColor,
      }}
      closeButtonProps={{
        fillColor: textColor,
      }}
      headingProps={{
        color: textColor,
      }}
    >
      {loading && (
        <Center my={4}>
          <Spinner size={"lg"} color={textColor} />
        </Center>
      )}
      <Box>
        {!videoUrl && !loading && (
          <VStack space={6} px={"page"}>
            <FormItem
              labelProps={{
                _text: {
                  color: textColor,
                  _light: {
                    color: textColor,
                  },
                },
              }}
              inputProps={{
                color: textColor,
              }}
              label={"What do you want to know?"}
              value={videoInterests}
              onChangeText={setVideoInterests}
              renderInput={(props) => <TextArea {...props} />}
            />
            <Button
              onPress={getVideo}
              _text={{
                color: textColor,
                _light: {
                  color: textColor,
                },
              }}
            >
              Generate Video
            </Button>
          </VStack>
        )}
      </Box>
      {videoUrl && <WebView source={{ uri: videoUrl }} />}
    </AppModalScreen>
  );
};

export default FundVideo;
