import React from "react";
import PropTypes from "prop-types";
import { useRegisterNotificationListeners } from "../services/push";
import { useAgreementsRedirect } from "../../modules/agreements/contexts/AgreementsContext";

const ScreenContainer = ({ children }) => {
  useRegisterNotificationListeners();
  useAgreementsRedirect();

  return <>{children}</>;
};

ScreenContainer.propTypes = {
  children: PropTypes.node,
};

export default ScreenContainer;
