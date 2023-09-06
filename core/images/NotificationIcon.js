import React from "react";
import IconWrapper from "../components/IconWrapper";
import Svg, { Path } from "react-native-svg";

const NotificationIcon = (props) => {
  return (
    <IconWrapper width={18} height={21} {...props}>
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 18 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M16.306 11.545V7.16c0-3.947-3.27-7.16-7.29-7.16h-.03C4.964 0 1.694 3.213 1.694 7.163v4.382c0 .038-.02 3.838-1.57 5.624a.497.497 0 00-.075.542c.085.18.268.293.468.293h6.33a2.213 2.213 0 00-.132.747C6.715 19.99 7.742 21 9.004 21c1.261 0 2.289-1.01 2.289-2.25a2.2 2.2 0 00-.132-.746h6.33c.2 0 .383-.114.468-.293a.502.502 0 00-.075-.542c-1.55-1.786-1.57-5.586-1.57-5.624h-.008zM10.26 18.75c0 .683-.564 1.237-1.259 1.237s-1.259-.554-1.259-1.237a1.2 1.2 0 01.263-.747H10c.168.215.26.473.26.747zm-.95-1.759H1.488c1.22-2.163 1.236-5.295 1.236-5.445V7.163c0-3.39 2.809-6.15 6.26-6.15l.015-.001h.015c3.45 0 6.26 2.758 6.26 6.15v4.385c0 .15.015 3.282 1.235 5.445H9.305h.005z"
          fill="#fff"
        />
      </Svg>
    </IconWrapper>
  );
};

NotificationIcon.propTypes = {
  ...IconWrapper.propTypes,
};

export default NotificationIcon;
