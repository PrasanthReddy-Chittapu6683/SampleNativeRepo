import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  FlatList,
  Heading,
  HStack,
  Spinner,
  Text,
  VStack,
} from "native-base";
import { format, subMonths } from "date-fns";
import { SubscriptionsContext } from "../../funds/contexts/SubscriptionsContext";
import { ApiState } from "../../../core/services/api";
import { colors } from "../../../core/theme/colors";

const DashboardPortfolioOverview = () => {
  const [itemCount, setItemCount] = useState(2);
  const { subscriptionsLoading, subscriptions } =
    useContext(SubscriptionsContext);
  const funds = subscriptions?.map((fund) => ({
    id: fund.id,
    title: fund.fund.name,
    subTitle: fund.opportunity.name,
    stats: [
      {
        title: "NAV",
        value: "$70,423",
        date: format(new Date(), "MMM dd, yyyy"),
      },
      {
        title: "Net Capital Activity",
        value: "$6,126",
        date: "QTD",
      },
      {
        title: "Adjusted NAV",
        value: "$6,126",
        date: format(subMonths(new Date(), 2), "MMM dd, yyyy"),
      },
      {
        title: "Net MOIC",
        value: "1.4x",
        date: format(subMonths(new Date(), 4), "MMM dd, yyyy"),
      },
      {
        title: "Initial Commitment",
        value: `$${fund.cash_amount || fund.leverage_amount}`,
        date: format(new Date(fund.created_at), "MMM dd, yyyy"),
      },
      {
        title: "Undrawn Commitment",
        value: "$0",
        date: format(new Date(), "MMM dd, yyyy"),
      },
    ],
  }));

  if (subscriptionsLoading !== ApiState.Success && !subscriptions) {
    return (
      <Center my={5}>
        <Spinner />
      </Center>
    );
  }
  const fundsToUse = funds.slice(0, itemCount);
  return (
    <Box>
      <FlatList
        onEndReached={() => {
          if (itemCount < funds.length) {
            setItemCount(itemCount + 2);
          }
        }}
        onEndReachedThreshold={100}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        data={fundsToUse}
        keyExtractor={(item) => item.id}
        renderItem={({ item: fund, index }) => {
          return (
            <Box
              p={4}
              borderBottomWidth={"1px"}
              borderColor={"rgba(255, 255, 255,  0.25)"}
              _light={{
                borderColor: "#5E636740",
              }}
              mb={index === fundsToUse.length - 1 ? "150px" : 0}
            >
              <Box
                p={4}
                bg={colors.gradients[850]}
                borderRadius={"sm"}
                shadow={"3"}
                _light={{
                  bg: "white",
                }}
              >
                <HStack
                  alignItems={"flex-start"}
                  justifyContent={"space-between"}
                  mb={6}
                  space={4}
                >
                  <Box flex={1}>
                    <Heading size={"title3"}>{fund.title}</Heading>
                    <Heading size={"section"}>{fund.subTitle}</Heading>
                  </Box>
                  <Button size={"cta"} flex={0.35}>
                    Options
                  </Button>
                </HStack>
                <VStack space={4} divider={<Divider />}>
                  {fund.stats.map((stat) => {
                    return (
                      <HStack key={stat.title} space={10} alignItems={"center"}>
                        <Text
                          variant={"subTitle"}
                          fontSize={"title3"}
                          w={"50%"}
                        >
                          {stat.title}
                        </Text>
                        <Box>
                          <Text>{stat.value}</Text>
                          <Text
                            fontSize={"sm"}
                            color={"accent.100"}
                            _light={{
                              color: "accent.300",
                            }}
                          >
                            {stat.date}
                          </Text>
                        </Box>
                      </HStack>
                    );
                  })}
                </VStack>
              </Box>
            </Box>
          );
        }}
      />
    </Box>
  );
};

export default DashboardPortfolioOverview;
