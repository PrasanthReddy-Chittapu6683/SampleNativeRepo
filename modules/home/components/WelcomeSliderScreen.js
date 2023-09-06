import React, { useState } from "react";
import Layout from "../../../core/components/Layout";
import { Box, Center, Heading, HStack, Image, Text } from "native-base";
import welcome1 from "../../../core/images/welcome_1.png";
import welcome2 from "../../../core/images/welcome_2.png";
import welcome3 from "../../../core/images/welcome_3.png";
import welcome4 from "../../../core/images/welcome_4.png";
import { useWindowDimensions } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import { useNavigation } from "@react-navigation/native";
import Touchable from "../../../core/components/Touchable";
import { isWeb, useDeviceOrientation } from "../../../core/services/platform";
import BeginView from "./BeginView";

const slides = [
  {
    title: "View investment details digitally",
    description:
      "Gone are the days where you need to read a 200 page PPM to inform your investment decisions.. all of the key information is right at your finger tips",
    imgSrc: welcome1,
  },
  {
    title: "Digital subscriptions",
    description:
      "Simplifying subscriptions by offering an embedded digital solution which can be completed via mobile app or on desktop",
    imgSrc: welcome2,
  },
  {
    title: "Investment support and resources",
    description:
      "Rich resources section to provide you with relevant content, FAQs and a next generation chatbot to support you with any firm or fund related queries",
    imgSrc: welcome3,
  },
  {
    title: "Manage your investments",
    titleProps: {
      maxW: "100%",
    },
    description:
      "Readily view the key information about your investments performance and easily access the key reports if you need",
    imgSrc: welcome4,
  },
  {
    render: (props) => <BeginView px={"page"} pb={8} />,
  },
];

const SlideView = ({ route, ...props }) => {
  const dimensions = useWindowDimensions();
  const orientation = useDeviceOrientation();
  const slide = slides[route.key];

  if (slide.render) {
    return slide.render(props);
  }

  const nonWebImgHeight = orientation.isLandscape
    ? dimensions.height / 2.8
    : dimensions.height / 1.5;

  return (
    <Box flex={1}>
      <Center h={"60%"}>
        <Center maxW={"70%"} w={"100%"}>
          <Image
            source={slide.imgSrc}
            alt={slide.title}
            resizeMode={"contain"}
            w={"100%"}
            h={isWeb ? "250px" : `${nonWebImgHeight}px`}
          />
        </Center>
      </Center>
      <Center minH={"90px"}>
        <Heading
          maxW={"224px"}
          textAlign={"center"}
          size={"lowerLight"}
          fontSize={"24px"}
          mb={6}
          {...slide?.titleProps}
        >
          {slide.title}
        </Heading>
      </Center>
      <Center>
        <Text
          maxW={"307px"}
          textAlign={"center"}
          variant={"subTitle"}
          fontSize={"title3"}
        >
          {slide.description}
        </Text>
      </Center>
    </Box>
  );
};

const renderScene = SceneMap({
  0: SlideView,
  1: SlideView,
  2: SlideView,
  3: SlideView,
  4: SlideView,
});

const WelcomeSliderScreen = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const routes = [
    { key: 0, title: "Slide 1" },
    { key: 1, title: "Slide 2" },
    { key: 2, title: "Slide 3" },
    { key: 3, title: "Slide 4" },
    { key: 4, title: "Begin" },
  ];
  return (
    <Layout
      offsetSides={0}
      renderHeaderRight={() => {
        return (
          <Touchable onPress={() => navigation.push("Login")}>
            <Text variant={"subTitle"} fontSize={"title3"}>
              Skip
            </Text>
          </Touchable>
        );
      }}
    >
      <Box flex={1}>
        <TabView
          bounces={false}
          onIndexChange={setIndex}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          initialLayout={{ width: layout.width }}
          renderTabBar={() => <></>}
        />
      </Box>
      <Center pb={"80px"}>
        <HStack space={2}>
          {slides.map((slide, i) => {
            return (
              <Box
                key={slide.title + i}
                size={"8px"}
                borderRadius={"full"}
                bg={"accent.325"}
                opacity={index === i ? 1 : 0.2}
              ></Box>
            );
          })}
        </HStack>
      </Center>
    </Layout>
  );
};

export default WelcomeSliderScreen;
