import React, { useContext } from "react";
import PropTypes from "prop-types";
import { formatCurrency } from "../../../core/services/numbers";
import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Text,
  VStack,
} from "native-base";
import { addMonths, format } from "date-fns";
import { FundContext } from "../contexts/FundContext";

const InvestLeverageOffer = ({
  isSelected,
  offer,
  onSelect,
  hideButton,
  ...props
}) => {
  const { fund } = useContext(FundContext);
  const textColor = fund?.style?.primaryColor?.main;
  const stats = [
    {
      title: "Facility Limit",
      value: formatCurrency("USD", offer.config.facility_limit * 100, true, 0),
    },
    {
      title: "Interest Rate",
      value: `${offer.config.facility_interest_rate}%`,
    },
    {
      title: "LTV",
      value: "70%",
    },
    {
      title: "Index",
      value: "12MAT",
    },
  ];

  return (
    <Box
      borderColor={isSelected ? "accent.300" : textColor}
      borderWidth={"1px"}
      rounded={"md"}
      {...props}
    >
      <Box p={3}>
        <Heading size={"title3"} mb={3} color={textColor}>
          {offer.config.credit_provider}
        </Heading>
        <Text variant={"subTitle"} color={textColor}>
          Facility end date {format(addMonths(new Date(), 1), "dd/MM/yyyy")}
        </Text>
      </Box>
      <Divider />
      <HStack p={3} space={3}>
        {stats.map((stat) => {
          return (
            <VStack space={2} key={stat.title}>
              <Text variant={"subTitle"} color={textColor}>
                {stat.title}
              </Text>
              <Text color={textColor} fontSize={"21px"}>
                {stat.value}
              </Text>
            </VStack>
          );
        })}
      </HStack>
      {!hideButton && (
        <>
          <Divider />
          <Box px={3} py={4}>
            <Button
              onPress={() => {
                onSelect(offer);
              }}
              borderColor={textColor}
              _text={{
                fontSize: "subTitle",
                letterSpacing: "3px",
                color: textColor,
                _light: {
                  color: textColor,
                },
              }}
            >
              Select Facility
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

InvestLeverageOffer.propTypes = {
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
  offer: PropTypes.object,
  hideButton: PropTypes.bool,
  ...Box.propTypes,
};

export default InvestLeverageOffer;
