import React from "react";
import PropTypes from "prop-types";
import IconWrapper from "../components/IconWrapper";
import Svg, { Path } from "react-native-svg";

const ChatBubbleEnd = ({ variant, ...props }) => {
  const fillColor = {
    system: "#906AFF",
    user: "#29738A",
  };
  return (
    <IconWrapper width={15} height={11} {...props}>
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 15 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {(variant === "system" && (
          <Path
            d="M0 10.725c3.383 0 4.833-8.428 4.833-10.725L14.3 1.312v6.113l-.077.058C10.479 10.318 9.942 10.725 0 10.725z"
            fill={fillColor[variant]}
          />
        )) || (
          <Path
            d="M15 10.725c-3.383 0-4.833-8.428-4.833-10.725L.7 1.312v6.113l.077.058c3.743 2.835 4.28 3.242 14.222 3.242z"
            fill={fillColor[variant]}
          />
        )}
      </Svg>
    </IconWrapper>
  );
};

ChatBubbleEnd.propTypes = {
  ...IconWrapper.propTypes,
  variant: PropTypes.oneOf(["system", "user"]).isRequired,
};

export default ChatBubbleEnd;
