import { createContext, useState } from "react";
import { Button, Modal, VStack } from "native-base";
import { Alert } from "react-native";
import { isWeb } from "../services/platform";
import { isNil } from "ramda";

export const ModalsContext = createContext({
  showModal: () => {},
  hideModal: () => {},
  alert: () => {},
});

export const ModalsProvider = ({ children }) => {
  const [{ show, title, description, buttons }, setData] = useState({
    show: false,
    title: "",
    description: "",
    buttons: [],
  });
  const handleShowModal = (title, description, buttons) => {
    setData({
      show: true,
      title,
      description,
      buttons,
    });
  };
  const handleHideModal = () => {
    setData({
      show: false,
      title: "",
      description: "",
      buttons: [],
    });
  };

  const defaultButtons = [
    {
      text: "OK",
      onPress: () => {
        handleHideModal();
      },
    },
  ];
  const buttonsToUse = buttons?.length > 0 ? buttons : defaultButtons;

  const handleAlert = (title, description, buttons) => {
    if (isWeb) {
      return handleShowModal(title, description, buttons);
    } else {
      return Alert.alert(title, description, buttons);
    }
  };

  return (
    <ModalsContext.Provider
      value={{
        showModal: handleShowModal,
        hideModal: handleHideModal,
        alert: handleAlert,
      }}
    >
      {children}

      <Modal isOpen={show} onClose={handleHideModal}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>{title}</Modal.Header>
          <Modal.Body>{description}</Modal.Body>
          <Modal.Footer>
            <VStack w={"100%"} space={2}>
              {buttonsToUse.map((button) => {
                return (
                  <Button
                    paddingTop={2}
                    paddingBottom={2}
                    key={button.text}
                    onPress={async () => {
                      if (button.onPress) {
                        const hideModal = await button.onPress(handleHideModal);

                        if (hideModal || isNil(hideModal)) {
                          handleHideModal();
                        }
                      } else {
                        handleHideModal();
                      }
                    }}
                  >
                    {button.text}
                  </Button>
                );
              })}
            </VStack>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </ModalsContext.Provider>
  );
};
