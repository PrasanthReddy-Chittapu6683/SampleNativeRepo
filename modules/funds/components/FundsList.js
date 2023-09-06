import React from "react";
import PropTypes from "prop-types";
import { FundPropType } from "../constants/funds";
import FundTease from "./FundTease";
import { FlatList } from "native-base";
import { useNavigation } from "@react-navigation/native";

const FundsList = ({ funds, ...props }) => {
  const navigation = useNavigation();
  return (
    <FlatList
      pl={"page"}
      data={funds}
      showsHorizontalScrollIndicator={false}
      horizontal
      keyExtractor={(item) => item.id}
      {...props}
      renderItem={({ item, index }) => {
        return (
          <FundTease
            fund={{
              ...item,
              color: index % 2 === 0 ? "black" : "white",
            }}
            w={"342px"}
            // without bigger margin on final item the list only scrolls to outer edge of final item
            mr={index === funds.length - 1 ? "40px" : 5}
            hasModal
          />
        );
      }}
    />
  );
};

FundsList.propTypes = {
  funds: PropTypes.arrayOf(PropTypes.shape(FundPropType)),
};

export default FundsList;
