import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Box, Input, InputGroup, InputLeftAddon, Text } from "native-base";
import { Slider } from "@miblanchard/react-native-slider";
import { FundContext } from "../contexts/FundContext";
import { themeConfig } from "../../../core/theme";
import { formatCurrency } from "../../../core/services/numbers";
import { getMaximumInvestment, getMinimumInvestment } from "../services/funds";

const InvestAmountSlider = ({ value, onChangeValue, ...props }) => {
  const { fund } = useContext(FundContext);
  const minimumInvestment = getMinimumInvestment(fund);
  const maximumInvestment = getMaximumInvestment(fund);
  const getErrorMessage = () => {
    if (value < minimumInvestment) {
      return `Minimum investment is ${formatCurrency(
        fund.targetRaise ? fund.targetRaise.currency : "USD",
        minimumInvestment,
        true
      )}`;
    }

    if (value > maximumInvestment) {
      return `Maximum investment is ${formatCurrency(
        fund.targetRaise ? fund.targetRaise.currency : "USD",
        maximumInvestment,
        true
      )}`;
    }

    return "";
  };
  const errorMessage = getErrorMessage();

  return (
    <Box {...props}>
      <Box mb={4}>
        <Slider
          value={value}
          step={1000}
          minimumTrackTintColor={themeConfig.colors.gray["400"]}
          minimumValue={minimumInvestment}
          maximumValue={maximumInvestment}
          thumbTintColor={themeConfig.colors.accent["200"]}
          renderAboveThumbComponent={() => (
            <Box
              position={"absolute"}
              top={"-25px"}
              w={"150px"}
              ml={0}
              left={"-75px"}
            >
              <Text variant={"bold"} fontSize={"lg"} textAlign={"center"}>
                {formatCurrency(
                  fund.targetRaise ? fund.targetRaise.currency : "USD",
                  value,
                  true
                )}
              </Text>
            </Box>
          )}
          onValueChange={(val) => onChangeValue(val[0])}
        />
      </Box>
      <Box>
        <InputGroup>
          <InputLeftAddon
            children={"$"}
            bg={"gray.300"}
            px={4}
            borderTopWidth={"2px"}
            borderBottomWidth={"2px"}
            borderTopColor={"gray.300"}
            borderBottomColor={"gray.300"}
            _text={{}}
          ></InputLeftAddon>
          <Input
            borderWidth={0}
            roundedTopLeft={0}
            roundedBottomLeft={0}
            w={"87%"}
            value={String(value / 100)}
            onChangeText={(val) => {
              const newValue = Number(val) * 100;
              onChangeValue(newValue);
            }}
          />
        </InputGroup>
        {errorMessage && (
          <Text color={"error.400"} fontSize={"sm"} mt={2}>
            {errorMessage}
          </Text>
        )}
      </Box>
    </Box>
  );
};

InvestAmountSlider.propTypes = {
  ...Box.propTypes,
  value: PropTypes.number,
  onChangeValue: PropTypes.func,
};

export default InvestAmountSlider;
