import React, {useContext} from "react";
import {Box, HStack, Text, VStack} from "native-base";
import FormItem from "../../../core/components/FormItem";
import {InvestContext} from "../contexts/InvestContext";
import AddressFormItem from "../../../core/components/AddressFormItem";
import InvestLayout from "./InvestLayout";
import DateFormItem from "../../../core/components/DateFormItem";
import InvestHeading from "./InvestHeading";
import Touchable from "../../../core/components/Touchable";
import {FundContext} from "../contexts/FundContext";

// todo: this is solely for leverage so maybe rename to InvestLeverageDetails once 100% sure
const InvestDetails = () => {
  const { fund } = useContext(FundContext);
  const { nextStep, fields, fieldValues, setFieldValue, setFieldValues } =
    useContext(InvestContext);
  const textColor = fund?.style?.primaryColor?.main;
  const sharedProps = {
    inputProps: {
      color: textColor,
    },
    labelProps: {
      _text: {
        color: textColor,
        _light: {
          color: textColor,
        },
      },
      _astrick: {
        color: textColor,
      },
    },
  };

  const allRequiredFieldsHaveValues = () => {
    return fields.every((field) => {
      if (field.required) {
        if (field.type === "address") {
          const value = fieldValues[field.id];
          return (
            !!value &&
            !!value.address &&
            !!value.address_line_1 &&
            !!value.city &&
            !!value.postal_code &&
            !!value.country
          );
        }

        return fieldValues[field.id] !== undefined;
      }

      return true;
    });
  };

  return (
    <InvestLayout
      avoidKeyboard
      showBackButton
      scroll
      title={"Leverage Application"}
      canNext={allRequiredFieldsHaveValues()}
      onNextPress={() => {
        nextStep();
      }}
      onClosePress={(fn) => {
        setFieldValues({});
        fn();
      }}
    >
      <Box px={"page"}>
        <InvestHeading mb={6}>Check your details</InvestHeading>
        <VStack space={4}>
          {fields.map((field) => {
            if (field.type === "text") {
              return (
                <FormItem
                  key={field.id}
                  isRequired={field.required}
                  label={field.label}
                  placeholder={field.placeholder}
                  value={fieldValues[field.id]}
                  onChangeText={(text) => {
                    setFieldValue(field.id, text);
                  }}
                  {...sharedProps}
                />
              );
            }

            if (field.type === "number") {
              return (
                <FormItem
                  type={"number"}
                  keyboardType={"number-pad"}
                  key={field.id}
                  isRequired={field.required}
                  label={field.label}
                  placeholder={field.placeholder}
                  value={String(fieldValues[field.id] || "")}
                  onChangeText={(text) => {
                    setFieldValue(field.id, Number(text));
                  }}
                  {...sharedProps}
                />
              );
            }

            if (field.type === "address") {
              return (
                <AddressFormItem
                  isRequired={field.required}
                  key={field.id}
                  label={field.label}
                  placeholder={field.placeholder}
                  value={fieldValues[field.id]?.address || ""}
                  onSelectAddress={(address) => {
                    setFieldValue(field.id, address);
                  }}
                  onChangeText={(text) => {
                    setFieldValue(field.id, {
                      address: text,
                    });
                  }}
                  {...sharedProps}
                />
              );
            }

            if (field.type === "select") {
              return (
                <FormItem
                  isRequired={field.required}
                  key={field.id}
                  label={field.label}
                  renderInput={(props) => {
                    return (
                      <HStack space={2} mt={2}>
                        {field.options.map((option) => {
                          return (
                            <Touchable
                              key={option.id}
                              onPress={() => setFieldValue(field.id, option.id)}
                            >
                              <Box
                                py={2}
                                px={3}
                                borderColor={textColor}
                                borderWidth={"1px"}
                                opacity={
                                  fieldValues[field.id] === option.id ? 1 : 0.5
                                }
                              >
                                <Text color={textColor}>{option.label}</Text>
                              </Box>
                            </Touchable>
                          );
                        })}
                      </HStack>
                    );
                  }}
                  {...sharedProps}
                />
              );
            }

            if (field.type === "date") {
              return (
                <DateFormItem
                  isRequired={field.required}
                  key={field.id}
                  label={field.label}
                  placeholder={field.placeholder}
                  value={fieldValues[field.id]}
                  onChangeText={(text) => {
                    setFieldValue(field.id, text);
                  }}
                  {...sharedProps}
                />
              );
            }

            return (
              <Box key={field.id}>
                <Text>input type {field.type} not supported</Text>
              </Box>
            );
          })}
        </VStack>
      </Box>
    </InvestLayout>
  );
};

export default InvestDetails;
