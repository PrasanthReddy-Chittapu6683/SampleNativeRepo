import React from "react";
import Section from "../../../core/components/Section";
import {
  Box,
  Divider,
  FlatList,
  HStack,
  Image,
  Pressable,
  Text,
  useTheme,
  VStack,
} from "native-base";
import PodcastIcon from "../../../core/images/PodcastIcon";
import * as WebBrowser from "expo-web-browser";
import podcast1 from "../../../core/images/podcast_1.png";
import podcast2 from "../../../core/images/podcast_2.jpeg";

const ResourcesPodcasts = (props) => {
  const { colors } = useTheme();
  const podcasts = [
    {
      title: "View from Apollo",
      description: "Listen to Chief Economist Torsten Slok and Co-Head",
      imgSrc: podcast2,
      link: "https://open.spotify.com/show/7a2pM9MgehqQHEHQ6FCZLu",
    },
    {
      title: "Motive insights",
      description: "Future Delivered. The Motive Partners podcast",
      imgSrc: podcast1,
      link: "https://open.spotify.com/show/0UmGvihF9QZutBSdELtfAH",
    },
  ];
  const showPodcast = (podcast) => {
    WebBrowser.openBrowserAsync(podcast.link);
  };

  return (
    <Section
      title={"Podcasts"}
      headingProps={{
        px: "page",
      }}
      cta={"See all"}
      {...props}
    >
      <FlatList
        pl={"page"}
        data={podcasts}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Pressable key={item.title} onPress={() => showPodcast(item)}>
            <VStack
              space={3}
              overflow={"hidden"}
              w={"235px"}
              mr={index === podcasts.length - 1 ? "40px" : 5}
            >
              <HStack
                alignItems={"flex-start"}
                justifyContent={"space-between"}
                space={3}
                rounded={"md"}
                p={2}
                bg={colors.gradients[800]}
              >
                <HStack space={3} alignItems={"center"}>
                  <Box w={"45px"} h={"45px"}>
                    <Image
                      source={item.imgSrc}
                      alt={item.title}
                      w={"100%"}
                      h={"100%"}
                    />
                  </Box>
                  <Text fontSize={"subTitle"} color={"white"}>
                    {item.title}
                  </Text>
                </HStack>
                <PodcastIcon width={17} />
              </HStack>
              <Text
                numberOfLines={1}
                pl={1}
                variant={"subTitle"}
                fontSize={"sm"}
              >
                {item.description}
              </Text>
              <Divider />
            </VStack>
          </Pressable>
        )}
      />
    </Section>
  );
};

export default ResourcesPodcasts;
