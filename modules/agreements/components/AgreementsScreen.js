import React, { useContext } from "react";
import Layout from "../../../core/components/Layout";
import { Box, Heading, Text } from "native-base";
import PageButton from "../../../core/components/PageButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AgreementsContext } from "../contexts/AgreementsContext";
import Agreement from "./Agreement";

const AgreementsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { agreements } = useContext(AgreementsContext);
  const { agreementIndex } = route?.params || {};
  const agreement = agreements?.[agreementIndex];

  return (
    <Layout avoidKeyboard>
      {!agreement && (
        <>
          <Box>
            <Heading size={"title"} mb={4}>
              Agreements
            </Heading>
            <Box>
              <Text variant={"subTitle"}>
                We need to ask you some questions before you can continue
              </Text>
            </Box>
          </Box>
          <PageButton
            onPress={() =>
              navigation.push("Agreements", {
                agreementIndex: 0,
              })
            }
          >
            Next
          </PageButton>
        </>
      )}
      {agreement && <Agreement agreement={agreement} />}
    </Layout>
  );
};

export default AgreementsScreen;
