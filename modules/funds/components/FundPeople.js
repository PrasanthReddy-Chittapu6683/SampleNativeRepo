import React, { useContext } from "react";
import { Box, Button, HStack, Image, Stack, Text } from "native-base";
import { FundContext } from "../contexts/FundContext";
import { getFundColors } from "../services/funds";
import * as WebBrowser from "expo-web-browser";

const FundPeople = () => {
  const { fund } = useContext(FundContext);
  const fundStyle = fund?.style;
  const { text } = getFundColors(fundStyle);
  const people = [
    {
      name: "Bob Brown",
      role: "Founder & Managing Partner",
      imgUrl:
        "https://uploads-ssl.webflow.com/632d7f63fc0cb842c2eab427/63736b134d83072d2019e4b7_f61d2255-bc5e-4a68-93e0-e9259d1f2ce2_bob_brown_700x933.jpeg",
      link: "https://www.motivepartners.com/team/bob",
    },
    {
      name: "Blythe Masters",
      role: "Founding Partner",
      imgUrl:
        "https://uploads-ssl.webflow.com/632d7f63fc0cb842c2eab427/63736b0f8ef2803952ba4c41_79c98230-2ec5-4830-8388-13e2444b2d6f_Blythe%2BMasters_NEW.jpeg",
      link: "https://www.motivepartners.com/team/blythe-masters",
    },
    {
      name: "Andrew Tarver",
      role: "Founding Partner, Head of Motive Create",
      imgUrl:
        "https://uploads-ssl.webflow.com/632d7f63fc0cb842c2eab427/63736b12f1bceba1414ee1b7_c49eb87c-b618-41c1-96ac-78db8fdd0177_Andrew%2BTarver_500x666-01.jpeg",
      link: "https://www.motivepartners.com/team/andrew-tarver",
    },
    {
      name: "Bridget Van Kralingen",
      role: "Partner",
      imgUrl:
        "https://uploads-ssl.webflow.com/632d7f63fc0cb842c2eab427/636cd0003bfcc731b5b2b579_team-bridget.jpg",
      link: "https://www.motivepartners.com/team/bridget-van-kralingen",
    },
  ];
  return (
    <Box>
      <Stack space={6}>
        {people.map((person) => {
          return (
            <HStack key={person.name} justifyContent={"space-between"}>
              <HStack alignItems={"flex-start"} space={4}>
                <Image
                  w={"65px"}
                  h={"50px"}
                  source={{
                    uri: person.imgUrl,
                  }}
                  alt={person.name}
                />
                <Stack maxW={"65%"}>
                  <Text variant={"subTitle"} color={text}>
                    {person.name}
                  </Text>
                  <Text variant={"subTitle"} color={text}>
                    {person.role}
                  </Text>
                </Stack>
              </HStack>
              <Button
                size={"cta"}
                minW={"85px"}
                onPress={() => {
                  WebBrowser.openBrowserAsync(person.link);
                }}
              >
                Info
              </Button>
            </HStack>
          );
        })}
      </Stack>
    </Box>
  );
};

export default FundPeople;
