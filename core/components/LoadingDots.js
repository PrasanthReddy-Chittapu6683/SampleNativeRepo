import React, { useEffect, useRef } from "react";
import { HStack } from "native-base";
import CircleBox from "./CircleBox";
import { Animated } from "react-native";

const LoadingDots = () => {
  const loading1 = useRef(new Animated.Value(0)).current;
  const loading2 = useRef(new Animated.Value(0)).current;
  const loading3 = useRef(new Animated.Value(0)).current;
  const animate = (value, delay = 0) => {
    Animated.sequence([
      Animated.timing(value, {
        toValue: 1,
        delay,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(value, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => animate(value, 0));
  };

  useEffect(() => {
    animate(loading1);
    animate(loading2, 250);
    animate(loading3, 500);
  }, []);

  return (
    <HStack space={2}>
      <Animated.View style={{ opacity: loading1 }}>
        <CircleBox size={"8px"} bg={"white"} />
      </Animated.View>
      <Animated.View style={{ opacity: loading2 }}>
        <CircleBox size={"8px"} bg={"white"} />
      </Animated.View>
      <Animated.View style={{ opacity: loading3 }}>
        <CircleBox size={"8px"} bg={"white"} />
      </Animated.View>
    </HStack>
  );
};

export default LoadingDots;
