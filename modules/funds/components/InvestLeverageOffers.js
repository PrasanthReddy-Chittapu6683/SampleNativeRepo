import React, { useContext, useState } from "react";
import { InvestContext } from "../contexts/InvestContext";
import { Box, Checkbox, Divider, Heading, Spinner, Text } from "native-base";
import InvestLayout from "./InvestLayout";
import InvestHeading from "./InvestHeading";
import { FundContext } from "../contexts/FundContext";
import InvestLeverageOffer from "./InvestLeverageOffer";

const InvestLeverageOffers = () => {
  const {
    leverageOffers,
    selectedLeverageOffer,
    setSelectedLeverageOffer,
    nextStep,
  } = useContext(InvestContext);
  const { fund } = useContext(FundContext);
  const textColor = fund.style.primaryColor?.main;
  const [agree, setAgree] = useState(false);

  return (
    <InvestLayout
      title={"Leverage Application"}
      hideButton={!selectedLeverageOffer}
      canNext={agree}
      buttonText={"Confirm Selection"}
    >
      <Box px={"page"}>
        <InvestHeading mb={2}>Leverage Quotations</InvestHeading>
        <Text variant={"subTitle"} color={textColor}>
          Based on your information you have been offered leverage by the
          following providers...
        </Text>
      </Box>
      <Divider my={7} backgroundColor={textColor} />
      {!leverageOffers && <Spinner color={textColor} size={"lg"} />}
      {leverageOffers?.length > 0 && (
        <Box px={"page"}>
          <Heading size={"title2"} mb={5} color={textColor}>
            Your Offers
          </Heading>
          {leverageOffers.map((offer) => {
            const isSelected = offer.id === selectedLeverageOffer?.id;
            return (
              <InvestLeverageOffer
                key={offer.id}
                offer={offer}
                isSelected={isSelected}
                onSelect={() => setSelectedLeverageOffer(offer)}
              />
            );
          })}
          {selectedLeverageOffer && (
            <Box mt={4} w={"90%"}>
              <Checkbox
                value={"agree"}
                isChecked={agree}
                onChange={() => {
                  setAgree(!agree);
                }}
                _text={{
                  fontSize: "sm",
                }}
                _stack={{
                  alignItems: "flex-start",
                }}
              >
                Please ensure you have read and agreed the Terms and conditions
                before proceeding. Please note if you decide to proceed with
                leverage you can lose more money than you have invested. You
                have to deposit additional cash or securities in your account on
                short notice to cover market losses.
              </Checkbox>
            </Box>
          )}
        </Box>
      )}
    </InvestLayout>
  );
};

export default InvestLeverageOffers;
