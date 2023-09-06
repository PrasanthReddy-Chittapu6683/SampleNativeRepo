import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import WebView from "react-native-webview";
import { isWeb } from "../services/platform";

const IframeWebView = (props) => {
  const ref = useRef();

  useEffect(() => {
    if (ref?.current) {
      ref.current.onload = function () {
        props?.onLoadEnd();
      };
    }
  }, [ref, props]);

  return <iframe ref={ref} src={props.source.uri} style={props.style}></iframe>;
};

const WebViewCrossPlatform = (props) => {
  if (!isWeb) {
    return <WebView {...props} />;
  }

  return <IframeWebView {...props} />;
};

WebViewCrossPlatform.propTypes = {
  source: PropTypes.shape({
    uri: PropTypes.string.isRequired,
  }),
  onLoadEnd: PropTypes.func,
  onNavigationStateChange: PropTypes.func,
  onMessage: PropTypes.func,
  injectedJavaScript: PropTypes.string,
  ...WebView.propTypes,
};

export default WebViewCrossPlatform;
