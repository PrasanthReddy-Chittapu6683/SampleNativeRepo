import React, { useContext } from "react";
import Layout from "../../../core/components/Layout";
import { Box, Center, Divider, Flex, Heading, Spinner, Text } from "native-base";
import { UserContext } from "../../../core/contexts/UserContext";
import { FundsContext } from "../../funds/contexts/FundsContext";
import { SubscriptionsContext } from "../../funds/contexts/SubscriptionsContext";
import { ApiState } from "../../../core/services/api";
import { useNavigation } from "@react-navigation/native";
import InProgressSubscriptions from "../../funds/components/InProgressSubscriptions";
import { InvestmentsContext } from "../../investments/contexts/InvestmentsContext";
import InvestmentsSummaryTease from "../../investments/components/InvestmentsSummaryTease";
import FundsSection from "../../funds/components/FundsSection";

const DashboardScreen = () => {
  // const navigation = useNavigation();
  // const { user } = useContext(UserContext); TODO:: PRCV
  debugger;
  const { user } = {
    user: {
      first_name: "Grace",
      last_name: ""
    }
  };
  // const { subscriptions, subscriptionsLoading } =  TODO:: PRCV
  //   useContext(SubscriptionsContext);
  // const { subscriptions, subscriptionsLoading } = {
  //   subscriptions: [], subscriptionsLoading: "success"
  // }
  // const { investmentsLoading } = useContext(InvestmentsContext);
  // // const { availableFunds, availableFundsLoading } = useContext(FundsContext); TODO:: PRCV
  // const { availableFunds, availableFundsLoading } = {
  //   availableFundsLoading: "success",
  //   availableFunds: []

  // }
  // const date = new Date();
  // const hasSubscriptions = subscriptions?.length > 0;
  // const subscriptionsLoaded = subscriptionsLoading === ApiState.Success;
  // const subscriptionsExist = hasSubscriptions && subscriptionsLoaded;
  // const investmentsLoaded = investmentsLoading === ApiState.Success;
  // const hasFunds = availableFunds?.length > 0;
  // const fundsLoaded = availableFundsLoading === ApiState.Success;
  // const fundsExist = hasFunds && fundsLoaded;

  // const isLoading = () => {
  //   if (fundsExist || subscriptionsExist) return false;
  //   if (subscriptionsExist || fundsExist) return false;
  //   return !subscriptionsLoaded || !fundsLoaded || !investmentsLoaded;
  // };
  // const getSalutation = () => {
  //   const hour = date.getHours();
  //   if (hour < 12) return "Good morning";
  //   if (hour < 18) return "Good afternoon";
  //   return "Good evening";
  // };

  return (
    <Box>
      <Text>Dashboard</Text>
    </Box>
    // <Layout
    //   justifyContent={"flex-start"}
    //   showMenu
    //   offsetSides={0}
    //   offsetBottom={"40px"}
    //   title={
    //     <Flex flexDirection={"row"}>
    //       <Heading
    //         fontFamily={"light"}
    //         fontSize={"title"}
    //         textTransform={"none"}
    //         letterSpacing={"0.1px"}
    //       >
    //         {getSalutation()},{" "}
    //       </Heading>
    //       <Heading
    //         fontSize={"title"}
    //         textTransform={"none"}
    //         letterSpacing={"0.1px"}
    //       >
    //         {user?.first_name}
    //       </Heading>
    //     </Flex>
    //   }
    // >
    //   <Box>
    //     {/* {investmentsLoaded && (
    //       <>
    //         <InvestmentsSummaryTease maxW={"400px"} />
    //         <Divider mb={7} mt={8} />
    //       </>
    //     )}
    //     {hasSubscriptions && <InProgressSubscriptions />}
    //     {hasFunds && (
    //       <FundsSection
    //         funds={availableFunds}
    //         title={"Available Funds"}
    //         subTitle={"To get started, select a fund to invest in"}
    //         cta={"See all"}
    //         onCtaPress={() => {
    //           navigation.setParams({
    //             currentTab: "Funds",
    //           });
    //         }}
    //       />
    //     )} */}
    //     {isLoading() && (
    //       <Center my={6}>
    //         <Spinner size={"lg"} />
    //       </Center>
    //     )}
    //   </Box>
    // </Layout>
  );
};

export default DashboardScreen;
