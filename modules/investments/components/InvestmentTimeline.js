import React from "react";
import { Box, Flex, Heading, HStack, Text, VStack } from "native-base";
import { last } from "ramda";
import { colors } from "../../../core/theme/colors";
import Section from "../../../core/components/Section";
import { format } from "date-fns";
import PropTypes from "prop-types";
import { getFundColors } from "../../funds/services/funds";
import { isWeb } from "../../../core/services/platform";

const FullHeight = 266;
const BarWidth = 30;

const InvestmentTimeline = ({ fundStyle, ...props }) => {
  const dates = [
    {
      date: new Date("2022-09-01"),
      label: "First Close",
    },
    {
      date: new Date("2027-02-01"),
      label: "Last Close",
    },
    {
      date: new Date("2030-06-01"),
      label: "End of CMIT Period",
    },
    {
      date: new Date("2033-12-31"),
      label: "End of Fund Life",
    },
  ];
  const startDate = dates[0].date;
  const startDateTime = new Date(startDate).getTime();
  const endDate = last(dates).date;
  const endDateTime = new Date(endDate).getTime();
  const currentDate = new Date("2028-01-01");
  const currentDateTime = new Date(currentDate).getTime();
  const currentProgress =
    (currentDateTime - startDateTime) / (endDateTime - startDateTime);
  const currentPercent = Math.floor(currentProgress * 100);
  const phases = [
    {
      label: "Fundraise",
      endDate: dates[1].date,
    },
    {
      label: "Invest",
      endDate: dates[2].date,
    },
    {
      label: "Harvest",
      endDate,
    },
  ];
  const { text } = getFundColors(fundStyle);

  return (
    <Section
      title={"Investment"}
      titleProps={{
        color: text,
      }}
      headingProps={{
        mb: "50px",
      }}
      {...props}
    >
      <Box w={"100%"} h={`${FullHeight + 50}px`} pl={"13%"}>
        <HStack space={6} position={"relative"} pl={`${BarWidth * 3 - 10}px`}>
          <VStack
            position={"absolute"}
            top={FullHeight / 3.02}
            left={`-${FullHeight / 3}px`}
            alignItems={"flex-start"}
            w={`${FullHeight}px`}
            transform={[
              {
                rotate: "-90deg",
              },
            ]}
            style={
              isWeb
                ? {
                    transform: "rotate(-90deg)",
                  }
                : {}
            }
          >
            {phases.map((phase) => {
              const dateTime = phase.endDate.getTime();
              const progress =
                (dateTime - startDateTime) / (endDateTime - startDateTime);
              const percent = progress * 100;
              return (
                <Flex
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  key={phase.label}
                  bg={{
                    linearGradient: {
                      ...colors.gradients[450].linearGradient,
                      start: [0, 1],
                      end: [1, 1],
                    },
                  }}
                  h={`${BarWidth}px`}
                  w={`${percent}%`}
                  pl={3}
                >
                  <Heading color={text} fontSize={"xs"}>
                    {phase.label}
                  </Heading>
                </Flex>
              );
            })}
          </VStack>
          <HStack>
            <Box position={"relative"}>
              <Flex
                h={`${FullHeight}px`}
                w={"8px"}
                bg={"#2E254D"}
                borderRadius={"sm"}
                justifyContent={"flex-end"}
                overflow={"hidden"}
              >
                <Box w={"100%"} h={`${currentPercent}%`} bg={"#7357C9"}></Box>
              </Flex>
              <HStack
                position={"absolute"}
                left={0}
                bottom={`${currentPercent}%`}
                mb={"-17px"}
                w={"100px"}
                alignItems={"center"}
                space={1}
              >
                <Box w={"20px"} h={"2px"} bg={"accent.325"} />
                <Text w={"40px"} textAlign={"center"} color={text}>
                  You are here
                </Text>
              </HStack>
            </Box>
            <Box position={"relative"} h={`${FullHeight}px`}>
              {dates.map((item) => {
                const dateTime = item.date.getTime();
                const progress =
                  (dateTime - startDateTime) / (endDateTime - startDateTime);
                const percent = progress * 100;

                return (
                  <HStack
                    alignItems={"flex-start"}
                    key={item.label}
                    position={"absolute"}
                    top={`${100 - percent}%`}
                    left={"-3px"}
                    mt={"-6px"}
                    space={2}
                  >
                    <HStack alignItems={"center"} pt={"2px"}>
                      <Box
                        w={"68px"}
                        borderWidth={"1px"}
                        borderStyle={"dashed"}
                        borderColor={"accent.325"}
                      ></Box>
                      <Box
                        size={"10px"}
                        borderRadius={"full"}
                        bg={"accent.325"}
                      ></Box>
                    </HStack>
                    <Box maxW={"59px"}>
                      <Text fontSize={"10px"} color={text}>
                        {format(item.date, "MMMM yyyy")}
                      </Text>
                      <Text fontSize={"10px"} opacity={0.7} color={text}>
                        {item.label}
                      </Text>
                    </Box>
                  </HStack>
                );
              })}
            </Box>
          </HStack>
        </HStack>
      </Box>
    </Section>
  );
};

InvestmentTimeline.propTypes = {
  fundStyle: PropTypes.object,
};

export default InvestmentTimeline;
