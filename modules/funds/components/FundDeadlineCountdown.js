import React, { useContext, useEffect, useRef, useState } from "react";
import { FundContext } from "../contexts/FundContext";
import { Box, HStack, Text, VStack } from "native-base";
import { getFundColors } from "../services/funds";

const FundDeadlineCountdown = (props) => {
  const { fund } = useContext(FundContext);
  const fundStyle = fund?.style;
  const { text } = getFundColors(fundStyle);
  const deadline = fund?.close_date;
  const timer = useRef(null);
  const deadlineDate = new Date(deadline || new Date());
  const deadlineTime = deadlineDate.getTime();

  const getDistance = () => {
    if (!deadline) {
      return {};
    }

    const now = new Date().getTime();
    const distance = deadlineTime - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days < 0 || hours < 0 || minutes < 0 || seconds < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(getDistance());

  useEffect(() => {
    timer.current = setInterval(() => {
      setTimeRemaining(getDistance());
    }, 1000);

    return () => {
      clearInterval(timer.current);
    };
  });

  if (!deadline) {
    return null;
  }

  return (
    <Box {...props}>
      <HStack
        divider={
          <Text color={text} fontSize={"25px"}>
            :
          </Text>
        }
        space={2}
      >
        {Object.entries(timeRemaining).map(([key, value]) => {
          return (
            <VStack key={key} alignItems={"center"}>
              <Text color={text} fontSize={"28px"}>
                {value}
              </Text>
              <Text textTransform={"uppercase"} fontSize={"8px"} opacity={0.6}>
                {key}
              </Text>
            </VStack>
          );
        })}
      </HStack>
    </Box>
  );
};

export default FundDeadlineCountdown;
