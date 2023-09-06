import React from "react";
import PropTypes from "prop-types";
import { Divider, Heading, HStack, Text, VStack } from "native-base";
import { format, formatDistanceToNowStrict } from "date-fns";

const EventTease = ({ event, ...props }) => {
  const eventDate = new Date(event.date);
  return (
    <HStack space={4}>
      <VStack
        space={0}
        rounded={"md"}
        overflow={"hidden"}
        bg={"accent.500"}
        w={"80px"}
      >
        <Heading pb={3} textAlign={"center"} fontSize={35}>
          {format(eventDate, "dd")}
        </Heading>
        <Divider bg={"primary.400"} h={"2px"} />
        <Heading p={2} textAlign={"center"}>
          {format(eventDate, "MMM")}
        </Heading>
      </VStack>
      <VStack>
        <Heading fontSize={"2xl"} mb={1}>
          {event.name}
        </Heading>
        <Heading fontSize={"lg"} color={"gray.400"} mb={4}>
          {event.fund}
        </Heading>
        <HStack space={2}>
          <Text variant={"bold"}>{event.description}</Text>
          <Text color={"gray.400"}>{event.name} in</Text>
          <Text variant={"bold"}>{formatDistanceToNowStrict(eventDate)}</Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

EventTease.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    fund: PropTypes.string,
    date: PropTypes.string,
  }),
  ...HStack.propTypes,
};

export default EventTease;
