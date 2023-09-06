import { createContext, useState } from "react";
import { logout, setAuthToken, useIsLoggedIn } from "../services/auth";
import { catchify } from "../services/promises";
import { loginOrRegister, verify } from "../services/auth-api";
import { registerForPushNotificationsAsync } from "../services/push";
import { useNavigation } from "@react-navigation/native";
import { useAfterLogin } from "../../modules/login/services/login";

export const LoginStage = {
  Email: "email",
  Code: "code",
};

export const AuthContext = createContext({
  authEmail: "",
  stage: LoginStage.Email,
  setStage: () => {},
  isTokenLoading: true,
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  login: async () => {},
  verify: async () => {},
  resendVerificationCode: async () => {},
  logout: () => {},
  authError: undefined,
});

export const AuthProvider = ({ children }) => {
  const navigation = useNavigation();
  const [authEmail, setAuthEmail] = useState("");
  const [authError, setAuthError] = useState(undefined);
  const [stage, setStage] = useState(LoginStage.Email);
  const [stateIsLoggedIn, setStateIsLoggedIn, tokenLoading] = useIsLoggedIn();
  const [verificationId, setVerificationId] = useState("");
  const afterLogin = useAfterLogin();

  const handleAuth = async (email) => {
    const [err, verificationId] = await catchify(loginOrRegister(email));
    if (err) {
      setAuthError(
        "There was an error. Please check your details and try again."
      );
      console.log(err.message);
      console.error(err);
      throw err;
    }

    setStage(LoginStage.Code);
    setAuthEmail(email);
    setVerificationId(verificationId);
  };

  const handleVerify = async (code) => {
    const result = await verify(verificationId, code);

    if (result.error || !result.success) {
      setAuthError(
        result?.error?.message || "Verification has expired. Please try again"
      );
      throw result.error;
    } else {
      await setAuthToken(result.token);
      await registerForPushNotificationsAsync();

      if (!result.user.first_name) {
        navigation.navigate("Details");
      } else {
        afterLogin();
      }
    }
  };

  const handleResendVerificationCode = async () => {
    return handleAuth(authEmail);
  };

  const handleLogout = async () => {
    await logout();
    setStateIsLoggedIn(false);
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authEmail,
        stage,
        setStage,
        isTokenLoading: tokenLoading,
        isLoggedIn: stateIsLoggedIn,
        setIsLoggedIn: setStateIsLoggedIn,
        login: handleAuth,
        verify: handleVerify,
        resendVerificationCode: handleResendVerificationCode,
        logout: handleLogout,
        authError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
