import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FormItem from "./FormItem";
import {
  Box,
  Divider,
  ScrollView,
  Spinner,
  Stack,
  Text,
  TextArea,
} from "native-base";
import { useDebounce } from "../services/promises";
import { api } from "../services/api";
import { is } from "ramda";
import Touchable from "./Touchable";

const AddressFormItem = ({
  value,
  onChangeText,
  onSelectAddress,
  containerProps,
  ...props
}) => {
  const debouncedValue = useDebounce(value, 1);
  const [suggestions, setSuggestions] = useState([]);
  const [{ searching, loading }, setSuggestionsState] = useState({});

  const userInputOnChangeText = (text) => {
    if (!is(String, text)) {
      return;
    }

    if (text !== value) {
      onChangeText(text);
      setSuggestionsState({
        loading: true,
        searching: true,
      });
    }
  };

  useEffect(() => {
    if (!debouncedValue) {
      setSuggestionsState({
        loading,
        searching: false,
      });
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (debouncedValue) {
      setSuggestionsState({
        searching,
        loading: true,
      });
      api
        .get({
          url: "address/autocomplete?s=" + debouncedValue,
        })
        .then((res) => {
          setSuggestions(res?.payload || []);
          const newSuggestionState = {
            loading: false,
            searching,
          };

          if (!res?.payload?.length) {
            newSuggestionState.searching = false;
            setSuggestions([]);
          }

          setSuggestionsState(newSuggestionState);
        });
    }
  }, [debouncedValue]);

  return (
    <Stack space={3} position={"relative"} zIndex={2} {...containerProps}>
      <FormItem
        {...props}
        value={value}
        renderInput={(inputProps) => (
          <TextArea
            testID={"textarea-input"}
            {...inputProps}
            onChangeText={userInputOnChangeText}
            onBlur={userInputOnChangeText}
          />
        )}
      />
      <Box
        position={"absolute"}
        top={"100%"}
        p={4}
        bg={"white"}
        w={"100%"}
        display={!searching ? "none" : ""}
        borderRadius={"sm"}
        maxH={"200px"}
        overflow={"hidden"}
      >
        <ScrollView flex={1}>
          {/*<Box position={"absolute"} display={!searching ? "none" : ""}>*/}
          {searching && (
            <Text variant={"subTitle"} color={"black"} mb={4}>
              Select an address from the list below:{" "}
            </Text>
          )}
          {loading && searching && <Spinner color={"black"} />}
          {searching && !loading && (
            <Stack space={4}>
              <Stack space={3} divider={<Divider />}>
                {suggestions.map((suggestion) => (
                  <Touchable
                    key={suggestion.address}
                    onPress={() => {
                      onSelectAddress(suggestion);
                      setSuggestions([]);
                      setSuggestionsState({
                        loading,
                        searching: false,
                      });
                    }}
                  >
                    <Box>
                      <Text color={"black"}>{suggestion.address}</Text>
                    </Box>
                  </Touchable>
                ))}
              </Stack>
              {suggestions.length > 0 && (
                <Touchable
                  onPress={() => {
                    setSuggestions([]);
                    setSuggestionsState({
                      loading,
                      searching: false,
                    });
                  }}
                >
                  <Text color={"accent.500"} fontSize={18} variant={"bold"}>
                    Clear
                  </Text>
                </Touchable>
              )}
            </Stack>
          )}
        </ScrollView>
      </Box>
    </Stack>
  );
};

AddressFormItem.propTypes = {
  ...FormItem.propTypes,
  onSelectAddress: PropTypes.func,
  containerProps: PropTypes.shape(Box.propTypes),
};

export default AddressFormItem;
