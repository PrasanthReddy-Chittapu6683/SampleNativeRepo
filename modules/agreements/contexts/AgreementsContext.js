import { createContext, useContext, useEffect, useState } from "react";
import { api, ApiState, useApi } from "../../../core/services/api";
import { AuthContext } from "../../../core/contexts/AuthContext";
import { useNavigation, useRoute } from "@react-navigation/native";
import { mutate } from "swr";

export const AgreementsContext = createContext({
  agreements: null,
  agreementsLoading: ApiState.Loading,
  allAgreed: false,
  agreeToAgreement: () => {},
});

export const AgreementsProvider = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const [agreementsLoading, agreements] = useApi(isLoggedIn ? "agreement" : "");
  const [agreeCount, setAgreeCount] = useState(0);
  const allAgreed =
    agreeCount >= agreements?.length || agreements?.length === 0;

  const handleAgreeToAgreement = async (
    agreement,
    value,
    navigation,
    route
  ) => {
    await api.post({
      url: `agreement/${agreement.id}/agree`,
      data: {
        value,
      },
    });
    setAgreeCount(agreeCount + 1);
    const agreementIndex = route?.params?.agreementIndex;
    const newAgreementIndex = agreementIndex + 1;
    if (agreements[newAgreementIndex]) {
      navigation.push("Agreements", {
        agreementIndex: newAgreementIndex,
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: "Main" }],
      });
      await mutate("agreement");
      setAgreeCount(0);
    }
  };

  return (
    <AgreementsContext.Provider
      value={{
        agreements: agreements,
        agreementsLoading: agreementsLoading,
        allAgreed,
        agreeToAgreement: handleAgreeToAgreement,
      }}
    >
      {children}
    </AgreementsContext.Provider>
  );
};

export const useAgreementsRedirect = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { allAgreed, agreements } = useContext(AgreementsContext);
  const whitelistPages = [
    "Home",
    "Welcome",
    "Login",
    "Verify",
    "Details",
    "Agreements",
    "Loading",
  ];
  const shouldRedirect =
    agreements?.length > 0 &&
    !allAgreed &&
    !whitelistPages.includes(route.name);

  useEffect(() => {
    if (shouldRedirect) {
      console.log("Agreements redirected");
      navigation.reset({
        index: 0,
        routes: [{ name: "Agreements" }],
      });
    }
  }, [shouldRedirect, route, route?.name]);
};
