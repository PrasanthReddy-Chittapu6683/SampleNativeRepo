import React from "react";
import IconWrapper from "../components/IconWrapper";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { useMenuFillColor } from "../services/images";

const FundIcon = ({ isActive, fill, ...props }) => {
  const fillColor = useMenuFillColor(isActive);
  return (
    <IconWrapper {...props}>
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M17.48 34.963C7.842 34.963 0 27.121 0 17.481 0 7.843 7.842 0 17.48 0c9.638 0 17.48 7.842 17.48 17.482 0 9.639-7.842 17.481-17.48 17.481zm0-33.805c-9 0-16.322 7.323-16.322 16.323S8.48 33.806 17.48 33.806c9 0 16.322-7.323 16.322-16.323S26.482 1.157 17.48 1.157z"
          fill={fill || fillColor}
        />
        <Path
          d="M17.545 26.933c-.1 0-.2-.026-.29-.076L9.571 22.42a.582.582 0 01-.29-.502v-8.873c0-.206.112-.398.29-.502l7.684-4.437a.575.575 0 01.58 0l7.683 4.437c.179.104.29.294.29.502v8.873a.585.585 0 01-.29.502l-7.684 4.437a.588.588 0 01-.29.076zm-7.106-5.349l7.106 4.103 7.105-4.103V13.38l-7.105-4.103-7.106 4.103v8.205z"
          fill={fill || fillColor}
        />
        <Path
          d="M17.545 9.188a.58.58 0 01-.58-.58V.579a.58.58 0 011.159 0v8.03c0 .32-.26.58-.58.58zM17.545 34.963a.58.58 0 01-.58-.579v-8.03a.579.579 0 011.159 0v8.03c0 .32-.26.579-.58.579z"
          fill={fill || fillColor}
        />
      </Svg>
    </IconWrapper>
  );
};

FundIcon.propTypes = {
  ...IconWrapper.propTypes,
  fill: PropTypes.string,
  isActive: PropTypes.bool,
};

export default FundIcon;
