import React, { useContext, useEffect } from "react";
import Layout from "./Layout";
import { Center, Spinner, Text } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AuthContext } from "../contexts/AuthContext";
import { UserContext } from "../contexts/UserContext";
import { ApiState } from "../services/api";
import { AgreementsContext } from "../../modules/agreements/contexts/AgreementsContext";

const LoadingScreen = () => {
  const route = useRoute();
  const loadingText = route.params?.loadingText || "";
  const navigation = useNavigation();
  const { isLoggedIn, isTokenLoading } = useContext(AuthContext);
  const { user, userLoading } = useContext(UserContext);
  const { agreements, allAgreed, agreementsLoading } =
    useContext(AgreementsContext);
  const agreementsLoaded = agreementsLoading === ApiState.Success;
  const hasAgreements = agreements?.length > 0 && !allAgreed;

  const resolveRedirect = () => {
    debugger;
    if (route.params?.noRedirect) {
      return "";
    }

    if (isTokenLoading) {
      return "LandingPage";
    }

    if (isLoggedIn) {
      if (
        !agreementsLoaded ||
        (userLoading !== ApiState.Success && !user?.id)
      ) {
        return "";
      }

      if (hasAgreements) {
        console.log("Has agreements");
        return "Agreements";
      }

      return "LandingPage";
    }

    return "LandingPage";
  };
  const redirect = resolveRedirect();

  useEffect(() => {
    if (redirect && redirect !== route.name) {
      navigation.reset({
        index: 0,
        routes: [{ name: redirect }],
      });
    }
  }, [navigation, redirect]);
  return (
    <Layout>
      <Center h={"90%"}>
        <Spinner size={"lg"} />
        <Text fontSize={"title"}>{loadingText}</Text>
      </Center>
    </Layout>
  );
};

export default LoadingScreen;
