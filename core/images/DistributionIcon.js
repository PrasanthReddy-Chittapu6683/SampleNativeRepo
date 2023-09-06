import React from "react";
import IconWrapper from "../components/IconWrapper";
import Svg, { Path } from "react-native-svg";

const DistributionIcon = (props) => {
  return (
    <IconWrapper {...props}>
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 17 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M.646 3.646a.5.5 0 000 .708l3.182 3.182a.5.5 0 10.708-.708L1.707 4l2.829-2.828a.5.5 0 10-.708-.708L.646 3.646zM16 3.5H1v1h15v-1zM16.354 10.075a.5.5 0 010 .707l-3.182 3.182a.5.5 0 11-.708-.707l2.829-2.828L12.464 7.6a.5.5 0 11.708-.707l3.182 3.182zM1 9.929h15v1H1v-1z"
          fill="#EEFFCA"
        />
      </Svg>
    </IconWrapper>
  );
};

DistributionIcon.propTypes = {
  ...IconWrapper.propTypes,
};

export default DistributionIcon;
