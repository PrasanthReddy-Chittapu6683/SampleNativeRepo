import { createContext, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { api, ApiState, useApi } from "../services/api";
import { mutate } from "swr";

export const UserContext = createContext({
  user: {},
  userLoading: ApiState.Loading,
  updateMe: () => { },
  deleteMe: async () => { },
});

export const UserProvider = ({ children }) => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [loadingState, user] = useApi(isLoggedIn ? "user/me" : "", {});

  const handleUpdateMe = async ({ firstName, lastName }) => {
    await api.post({
      url: "user/me",
      data: {
        first_name: firstName,
        last_name: lastName,
      },
    });

    return mutate("user/me");
  };

  useEffect(() => {
    const loggedInNoUser =
      isLoggedIn && loadingState === ApiState.Success && !user;
    const loggedInUserError = isLoggedIn && loadingState === ApiState.Error;
    if (loggedInNoUser || loggedInUserError) {
      console.log("Logging out due to failed user request");
      logout();
    }
  }, [isLoggedIn, loadingState]);

  return (
    <UserContext.Provider
      value={{
        user,
        userLoading: loadingState,
        updateMe: handleUpdateMe,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
