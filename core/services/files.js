import * as FileSystem from "expo-file-system";
import * as ExpoSharing from "expo-sharing";
import { Alert } from "react-native";

export const downloadFile = async (url, fileName, options) => {
  const callback = (downloadProgress) => {
    const progress =
      downloadProgress.totalBytesWritten /
      downloadProgress.totalBytesExpectedToWrite;

    if (options?.onProgress) {
      options.onProgress(progress);
    }
  };
  const resumable = FileSystem.createDownloadResumable(
    url,
    FileSystem.documentDirectory + fileName,
    {},
    callback
  );
  try {
    const { uri } = await resumable.downloadAsync();
    await ExpoSharing.shareAsync(uri);
  } catch (e) {
    Alert.alert("Error downloading file", e.message);
  }
};
