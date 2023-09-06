import React from "react";
import IconWrapper from "../components/IconWrapper";
import Svg, { Path, Rect } from "react-native-svg";
import { useTheme } from "native-base";

const EmailIcon = (props) => {
  const { colors } = useTheme();
  return (
    <IconWrapper {...props}>
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 15 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Rect
          x={0.375}
          y={0.375}
          width={14.25}
          height={9.25}
          rx={0.625}
          stroke="#EEFFCA"
          strokeWidth={0.75}
        />
        <Path
          d="M.5.556l7 6.666 7-6.666"
          stroke={colors.accent[100]}
          strokeWidth={0.75}
        />
      </Svg>
    </IconWrapper>
  );
};

EmailIcon.propTypes = {
  ...IconWrapper.propTypes,
};

export default EmailIcon;
