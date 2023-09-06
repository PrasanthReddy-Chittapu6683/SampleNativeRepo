import { Alert } from "react-native";
import { resetNavigation } from "./navigation";
import { isWeb } from "./platform";
import Bugsnag from "@bugsnag/expo";

export const reportException = (error) => {
  Bugsnag.notify(error);
};

export const onError = (error) => {
  reportException(error);
  if (isWeb) {
    alert("Error \n" + error.message);
    resetNavigation("Main", {
      currentTab: "Dashboard",
    });
  } else {
    Alert.alert("Error", error.message, [
      {
        text: "OK",
        onPress: () => {
          resetNavigation("Main", {
            currentTab: "Dashboard",
          });
        },
      },
    ]);
  }
};

export const errorHandler = async (promise) => {
  try {
    return await promise();
  } catch (error) {
    onError(error);
  }
};

export const useOnAsyncError = () => {
  return async (promise) => {
    try {
      return await promise();
    } catch (error) {
      onError(error);
    }
  };
};
