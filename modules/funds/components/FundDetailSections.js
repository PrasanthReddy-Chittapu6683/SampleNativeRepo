import React, { useContext } from "react";
import { FundContext } from "../contexts/FundContext";
import { getFundColors } from "../services/funds";
import { Box, HStack, Stack, Text, VStack } from "native-base";
import SectionBox from "../../../core/components/SectionBox";
import Section from "../../../core/components/Section";
import StatBox from "../../../core/components/StatBox";
import Grid from "./Grid";
import RemoteImage from "../../../core/components/RemoteImage";

const FundDetailSections = () => {
  const { fund } = useContext(FundContext);
  const fundStyle = fund.style;
  const { text, bg } = getFundColors(fundStyle);
  const sections = fund.fund?.marketing?.stats || [];
  return (
    <VStack space={6}>
      {sections.map((section) => (
        <SectionBox key={section.title}>
          <Section
            p={4}
            title={section.title}
            titleProps={{
              color: text,
            }}
            headingProps={{
              mb: 2,
            }}
            bg={bg}
          >
            {section.type === "stat" && !section.sub_stats && (
              <Text color={text}>{section.value}</Text>
            )}
            {section.type === "stat" && section.sub_stats && (
              <Grid
                columns={2}
                gap={3}
                items={section.sub_stats.map((subStat) => (
                  <StatBox
                    key={subStat.id}
                    label={subStat.name}
                    value={subStat.value}
                    w={"100%"}
                    textColor={text}
                  />
                ))}
              ></Grid>
            )}
            {section.type === "people" && (
              <VStack space={4}>
                {section.people?.map?.((person) => (
                  <HStack alignItems={"flex-start"} space={4} key={person.name}>
                    <Box w={"65px"} h={"70px"} overflow={"hidden"}>
                      <RemoteImage
                        targetWidth={65}
                        source={{
                          uri: person.image_url,
                        }}
                        alt={person.name}
                      />
                    </Box>
                    <Stack flex={1}>
                      <Text variant={"subTitle"} color={text}>
                        {person.name}
                      </Text>
                      <Text variant={"subTitle"} color={text}>
                        {person.bio}
                      </Text>
                    </Stack>
                  </HStack>
                ))}
              </VStack>
            )}
          </Section>
        </SectionBox>
      ))}
    </VStack>
  );
};

export default FundDetailSections;
