import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Box, Checkbox, Heading, Input, Select, Text } from "native-base";
import PageButton from "../../../core/components/PageButton";
import { AgreementsContext } from "../contexts/AgreementsContext";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const Agreement = ({ agreement }) => {
  const route = useRoute();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const { agreements, agreeToAgreement } = useContext(AgreementsContext);
  const agreementIndex = route?.params?.agreementIndex;
  const isLastAgreement = agreementIndex === agreements.length - 1;
  const buttonText = !isLastAgreement ? "Next" : "Finish";

  const onNext = async () => {
    setLoading(true);
    const valueToUse = ["select", "text"].includes(agreement.field_type)
      ? value
      : "";
    await agreeToAgreement(agreement, valueToUse, navigation, route);
  };

  return (
    <>
      <Box>
        <Heading size={"title3"} mb={2}>
          {agreement.name}
        </Heading>
        <Text mb={6} variant={"subTitle"}>
          {agreement.content}
        </Text>
        {agreement.field_type === "select" && (
          <Select
            defaultValue={""}
            selectedValue={value}
            onValueChange={(itemValue) => setValue(itemValue)}
            _selectedItem={{
              bg: "gray.600",
              startIcon: (
                <MaterialIcons name={"check"} color={"white"} size={20} />
              ),
            }}
          >
            <Select.Item value={""} label={"Choose an option"} />
            {agreement.field_config.options.map((option) => {
              return (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  label={option.label}
                />
              );
            })}
          </Select>
        )}
        {agreement.field_type === "text" && (
          <Input
            name={agreement.field_name}
            onChangeText={(text) => setValue(text)}
          />
        )}
        {!agreement.field_type && (
          <Checkbox value={"agree"} onChange={() => setValue(!value)}>
            I Agree
          </Checkbox>
        )}
      </Box>
      <PageButton
        isDisabled={!value}
        isLoading={loading}
        isLoadingText={buttonText}
        onPress={onNext}
      >
        {buttonText}
      </PageButton>
    </>
  );
};

Agreement.propTypes = {
  agreement: PropTypes.object.isRequired,
};

export default Agreement;
