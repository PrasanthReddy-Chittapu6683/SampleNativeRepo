import React, { useContext } from "react";
import { VStack } from "native-base";
import Document from "./Document";
import { FundContext } from "../contexts/FundContext";
import { getFundColors } from "../services/funds";

const FundMaterials = (props) => {
  const { fund } = useContext(FundContext);
  const fundStyle = fund.style;
  const { text } = getFundColors(fundStyle);
  const documents = [
    {
      title: "MCF3 PPM",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Motive Partners Overview deck",
      description: "Lorem ipsum dolor sit amet",
    },
  ];
  return (
    <VStack space={3} {...props}>
      {documents.map((document) => {
        return <Document {...document} textColor={text} key={document.title} />;
      })}
    </VStack>
  );
};

export default FundMaterials;
