import React from "react";
import IconWrapper from "../components/IconWrapper";
import Svg, { Path, Rect } from "react-native-svg";

const PaperIcon1 = (props) => {
  return (
    <IconWrapper width={20} height={30} {...props}>
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 20 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M1 20.751v6.068a2 2 0 002 2h14.361a2 2 0 002-2V17.69"
          stroke="#A69CC4"
          strokeLinecap="round"
        />
        <Path
          d="M19.36 17.748V5.179a2 2 0 00-.536-1.362l-2.027-2.18A2 2 0 0015.333 1H3a2 2 0 00-2 2v18.586"
          stroke="#A69CC4"
        />
        <Path d="M15.187 1.14v3.033a1 1 0 001 1h3.173" stroke="#A69CC4" />
        <Rect
          x={4.3382}
          y={11.293}
          width={2.78184}
          height={3.61639}
          rx={1}
          stroke="#A69CC4"
          strokeWidth={0.8}
        />
        <Rect
          x={8.51099}
          y={8.23242}
          width={3.06002}
          height={6.67641}
          rx={1}
          stroke="#A69CC4"
          strokeWidth={0.8}
        />
        <Rect
          x={12.9619}
          y={9.62305}
          width={3.06002}
          height={5.28549}
          rx={1}
          stroke="#A69CC4"
          strokeWidth={0.8}
        />
        <Path
          d="M4.338 18.248h5.564M4.338 21.03h5.564M4.338 23.81h3.06"
          stroke="#A69CC4"
          strokeLinecap="round"
        />
      </Svg>
    </IconWrapper>
  );
};

PaperIcon1.propTypes = {
  ...IconWrapper.propTypes,
};

export default PaperIcon1;
