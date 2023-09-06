import React, { useContext, useState } from "react";
import InvestLayout from "./InvestLayout";
import { InvestContext } from "../contexts/InvestContext";
import { Box, Divider, Text, VStack } from "native-base";
import InvestHeading from "./InvestHeading";
import FileUpload from "../../../core/components/FileUpload";
import { FundContext } from "../contexts/FundContext";

const InvestLeverageDocuments = () => {
  const { fund } = useContext(FundContext);
  const { nextStep, getLeverageOffers } = useContext(InvestContext);
  // state to track all 3 documents uploaded
  const [bankStatement, setBankStatement] = useState(null);
  const [w2, setW2] = useState(null);
  const [payStub, setPayStub] = useState(null);
  const textColor = fund.style.primaryColor?.main;

  return (
    <InvestLayout
      title={"Leverage Application"}
      showBackButton
      canNext={!!bankStatement && !!w2 && !!payStub}
      onNextPress={() => {
        getLeverageOffers();
        nextStep();
      }}
    >
      <Box>
        <Box px={"page"}>
          <InvestHeading mb={2}>Upload Documents</InvestHeading>
          <Text variant={"subTitle"} color={textColor}>
            Please upload the following documents
          </Text>
        </Box>
        <Divider mt={5} mb={7} />
        <VStack space={4} px={"page"}>
          <FileUpload
            title={"Bank statements"}
            description={
              bankStatement?.name || "Must be dated within the past 3 months"
            }
            onUpload={(file) => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  setBankStatement(file);
                  resolve();
                }, 2000);
              });
            }}
            complete={!!bankStatement}
            color={textColor}
          />
          <FileUpload
            title={"W-2"}
            description={w2?.name || `Prior year's W-2 document`}
            onUpload={(file) => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  setW2(file);
                  resolve();
                }, 2000);
              });
            }}
            complete={!!w2}
            color={textColor}
          />
          <FileUpload
            title={"Pay stub"}
            description={payStub?.name || "Year to date pay stub"}
            onUpload={(file) => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  setPayStub(file);
                  resolve();
                }, 2000);
              });
            }}
            complete={!!payStub}
            color={textColor}
          />
        </VStack>
      </Box>
    </InvestLayout>
  );
};

export default InvestLeverageDocuments;
