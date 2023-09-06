import React, { Fragment, useState } from "react";
import {
  Box,
  Center,
  Divider,
  FlatList,
  HStack,
  Spinner,
  Text,
  useTheme,
} from "native-base";
import Section from "../../../core/components/Section";
import ChevronIcon from "../../../core/images/ChevronIcon";
import { ApiState, useApi } from "../../../core/services/api";
import { groupBy } from "ramda";
import { format, isToday } from "date-fns";
import CapitalCallIcon from "../../../core/images/CapitalCallIcon";

const DashboardPortfolioActivity = () => {
  const theme = useTheme();
  const [itemCount, setItemCount] = useState(12);
  const [activityLoading, activity] = useApi("activity");
  const groupedActivity = groupBy((x) => {
    return x?.item?.date;
  }, (activity || []).slice(0, itemCount));
  const typeTitles = {
    capital_call: "Capital Call",
  };
  const icons = {
    capital_call: CapitalCallIcon,
  };
  const sections = Object.entries(groupedActivity).map(([key, items]) => {
    const date = new Date(key);
    const title = isToday(date) ? "Today" : format(date, "MMM, dd yyyy");
    return {
      title,
      entries: items.map((item) => {
        return {
          id: item.id,
          title: item.item.name,
          description: typeTitles[item.type],
          value: !item.amount ? "Nothing due" : `$${item.amount}`,
          icon: icons[item.type] || Fragment,
        };
      }),
    };
  }, groupedActivity);

  return (
    <Box px={4}>
      {activityLoading !== ApiState.Success && !activity && (
        <Center my={5}>
          <Spinner />
        </Center>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={sections}
        onEndReachedThreshold={100}
        onEndReached={() => {
          if (itemCount < activity?.length) {
            setItemCount(itemCount + 5);
          }
        }}
        keyExtractor={(item) => item.title}
        renderItem={({ item, index }) => {
          const section = item;
          const isLast = index === sections.length - 1;
          return (
            <Box mb={isLast ? "150px" : 0}>
              <Section
                pb={6}
                title={section.title}
                headingProps={{
                  mb: 3,
                }}
              >
                <Divider mb={3} />
                <FlatList
                  data={section.entries}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => {
                    const entry = item;
                    const Icon = entry.icon;

                    return (
                      <Box mb={3}>
                        <HStack
                          alignItems={"center"}
                          justifyContent={"space-between"}
                          pb={3}
                        >
                          <HStack space={4} w={"40%"} alignItems={"center"}>
                            <Center
                              rounded={"sm"}
                              size={"39px"}
                              bg={theme.colors.gradients[950]}
                              p={1}
                              borderWidth={"1px"}
                              borderColor={"accent.325"}
                            >
                              <Icon width={21} height={21} />
                            </Center>
                            <Box>
                              <Text>{entry.title}</Text>
                              <Text variant={"subTitle"}>
                                {entry.description}
                              </Text>
                            </Box>
                          </HStack>
                          <HStack space={8} alignItems={"center"}>
                            <Text>{entry.value}</Text>
                            <ChevronIcon width={13} />
                          </HStack>
                        </HStack>
                        <Divider />
                      </Box>
                    );
                  }}
                />
              </Section>
              {isLast && itemCount < activity?.length && (
                <Center>
                  <Spinner color={"white"} />
                </Center>
              )}
            </Box>
          );
        }}
      />
    </Box>
  );
};

export default DashboardPortfolioActivity;
