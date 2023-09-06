import React from "react";
import PropTypes from "prop-types";
import { Modal, ScrollView, useTheme } from "native-base";

const AppModal = ({ children, ...props }) => {
  const { colors } = useTheme();
  return (
    <Modal safeAreaTop {...props}>
      <Modal.Content
        w={"100%"}
        h={"100%"}
        bg={colors.gradients[900]}
        _light={{
          bg: colors.gradients[100],
        }}
      >
        <Modal.CloseButton />
        <Modal.Body p={0} pb={6}>
          <ScrollView
            flex={1}
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
          >
            {children}
          </ScrollView>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

AppModal.propTypes = {
  ...Modal.propTypes,
  children: PropTypes.node,
};

export default AppModal;
