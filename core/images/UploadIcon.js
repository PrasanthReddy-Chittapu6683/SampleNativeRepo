import React from "react";
import IconWrapper from "../components/IconWrapper";
import Svg, { Path } from "react-native-svg";
import { resolveColor, useColor } from "../theme/colors";

const UploadIcon = ({ fillColor, ...props }) => {
  const sectionColor = useColor("headings.section");
  const fillColorToUse = fillColor || sectionColor;
  const fillColorRaw = resolveColor(fillColorToUse);
  return (
    <IconWrapper width={13} height={13} {...props}>
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M6.5 10a.5.5 0 001 0h-1zM7.354.646a.5.5 0 00-.708 0L3.464 3.828a.5.5 0 10.708.708L7 1.707l2.828 2.829a.5.5 0 10.708-.708L7.354.646zM7.5 10V1h-1v9h1z"
          fill={fillColorRaw}
        />
        <Path d="M1 12.5h11.5" stroke={fillColorRaw} strokeLinecap="round" />
      </Svg>
    </IconWrapper>
  );
};

UploadIcon.propTypes = {
  ...IconWrapper.propTypes,
};

export default UploadIcon;
