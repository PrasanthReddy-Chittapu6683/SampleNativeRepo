import { Image as RNImage } from "react-native";
import { Image } from "native-base";
import React, { useState } from "react";

const RemoteImage = ({ source, targetWidth, ...props }) => {
  const [targetHeight, setTargetHeight] = useState(0);

  RNImage.getSize(source.uri, (width, height) => {
    setTargetHeight((targetWidth / width) * height);
  });

  return (
    <Image
      source={source}
      style={{
        width: targetWidth,
        height: targetHeight,
      }}
      {...props}
    />
  );
};

export default RemoteImage;
