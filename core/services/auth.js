import { clear, getItem, setItem } from "./storage";
import { AUTH_TOKEN_NAME } from "../constants/auth";
import { useEffect } from "react";
import { useAppState } from "../contexts/AppContext";
import { mutate } from "swr";
import { isEmpty } from "ramda";

export const getAuthToken = () => {
  return getItem(AUTH_TOKEN_NAME);
};

export const setAuthToken = (token) => {
  return setItem(AUTH_TOKEN_NAME, token);
};

export const deleteUserStorage = () => {
  clear();
};

export const isLoggedIn = async () => {
  const token = await getAuthToken();

  return !!token;
};

export const useIsLoggedIn = () => {
  const [value, setValue] = useAppState("app.loggedIn", {
    tokenLoading: true,
    loggedIn: false,
  });

  useEffect(() => {
    isLoggedIn().then((val) => {
      const newValue = {};
      if (val !== value.loggedIn) {
        newValue.loggedIn = val;
      }
      if (value.tokenLoading) {
        newValue.tokenLoading = false;
      }

      if (!isEmpty(newValue)) {
        setValue({
          ...value,
          ...newValue,
        });
      }
    });
  }, [value, setValue]);

  return [
    value.loggedIn,
    (newLoggedInValue) =>
      setValue({
        loggedIn: newLoggedInValue,
        tokenLoading: value.tokenLoading,
      }),
    value.tokenLoading,
  ];
};

export const logout = () => {
  deleteUserStorage();
  mutate(() => true, undefined, { revalidate: false });
};
