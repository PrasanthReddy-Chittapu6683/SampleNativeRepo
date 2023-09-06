import AsyncStorage from "@react-native-async-storage/async-storage";
import { catchify } from "./promises";

export const getItem = async (key) => {
  return AsyncStorage.getItem(key).catch((e) => null);
};

export const getItemJSON = async (key) => {
  const item = await getItem(key);

  if (!item) {
    return null;
  }

  try {
    return JSON.parse(item);
  } catch (e) {
    return item;
  }
};

export const setItem = async (key, value) => {
  return AsyncStorage.setItem(key, value);
};

export const setItemJSON = async (key, value) => {
  const [saveErr] = await catchify(setItem(key, JSON.stringify(value)));

  if (saveErr) {
    alert(`Error saving data: ${saveErr.message}`);
  }
};

export const clear = async () => {
  return AsyncStorage.clear().catch(null);
};

export const useLocalStorage = (prop, initialValue) => {};
