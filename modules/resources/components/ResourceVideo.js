import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Box, Center, Divider, Image, Stack, Text } from "native-base";
import PlayIcon from "../../../core/images/PlayIcon";
import { ResizeMode, Video } from "expo-av";
import * as ExpoWebBrowser from "expo-web-browser";
import Touchable from "../../../core/components/Touchable";

const ResourceVideo = ({ title, file, link, imgSrc, ...props }) => {
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});
  const [isFullScreen, setIsFullScreen] = useState(false);
  const openVideo = async () => {
    if (link) {
      return ExpoWebBrowser.openBrowserAsync(link);
    }

    if (file && videoRef.current) {
      if (!status.isPlaying) {
        await videoRef.current.presentFullscreenPlayer();
        videoRef.current.playAsync();
      }
    }
  };

  const getResizeMode = () => {
    if (isFullScreen) {
      return ResizeMode.CONTAIN;
    }

    if (status.isPlaying) {
      return ResizeMode.CONTAIN;
    }

    return ResizeMode.COVER;
  };

  return (
    <Touchable onPress={() => openVideo()}>
      <Stack w={"240px"} space={3} {...props}>
        <Box
          position={"relative"}
          h={"130px"}
          overflow={"hidden"}
          rounded={"sm"}
        >
          {imgSrc && (
            <>
              <Image source={imgSrc} alt="" h={"130px"} />
              <Center
                rounded={"md"}
                position={"absolute"}
                w={"100%"}
                h={"100%"}
              >
                <PlayIcon />
              </Center>
            </>
          )}
          {file && (
            <Video
              ref={videoRef}
              style={{
                width: "100%",
                height: 130,
              }}
              source={file}
              useNativeControls
              onPlaybackStatusUpdate={setStatus}
              onFullscreenUpdate={(event) => {
                if (event.fullscreenUpdate < 2) {
                  setIsFullScreen(true);
                } else {
                  setIsFullScreen(false);
                }
              }}
              resizeMode={getResizeMode()}
            />
          )}
        </Box>
        <Box minH={"59px"}>
          <Text fontSize={"subTitle"} letterSpacing={"0.7px"} numberOfLines={3}>
            {title}
          </Text>
        </Box>
        <Divider />
      </Stack>
    </Touchable>
  );
};

ResourceVideo.propTypes = {
  title: PropTypes.string,
  file: PropTypes.number,
  link: PropTypes.string,
  imgSrc: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default ResourceVideo;
