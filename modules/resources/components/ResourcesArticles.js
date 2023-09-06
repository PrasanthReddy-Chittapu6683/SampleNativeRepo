import React from "react";
import Section from "../../../core/components/Section";
import { Box, FlatList, Image, Pressable, Text } from "native-base";
import article1 from "../../../core/images/article_1.png";
import article2 from "../../../core/images/article_2.png";
import article3 from "../../../core/images/article_3.png";
import * as WebBrowser from "expo-web-browser";

const ResourcesArticles = (props) => {
  const articles = [
    {
      title:
        "With Intelligence announces that Motive Partners has acquired a majority stake",
      description:
        "With Intelligence, a leading provider of investment data and intelligence for allocating, fund-raising and business development in the public and private markets, announced that it has received a majority investment from funds advised by Motive Partners",
      imgSrc: article3,
      link: "https://uploads-ssl.webflow.com/632d7f63fc0cb842c2eab427/64b8d9e6c4d4f7a34c4c35eb_With%20Intelligence%20announcement%20-%2020th%20July%202023%20vFF3.pdf",
    },
    {
      title: "Tokenization of real-world assets",
      description:
        "Do digital assets REALLY threaten to disrupt your industry? Has the hype blown the benefits of digitization out of the water? Are companies really likely to adopt tokenized assets as a new form of ownership?",
      imgSrc: article1,
      link: "https://uploads-ssl.webflow.com/632d7f63fc0cb842c2eab427/63f50de98cc6474d92d498fa_Tokenization%20of%20real-world%20assets.pdf",
    },
    {
      title: "Fintech trends in 2023",
      description: "Article with Andrew Tarver on Fintech trends in 2023",
      imgSrc: article2,
      link: "https://uploads-ssl.webflow.com/632d7f63fc0cb842c2eab427/63f50e491852300d985cfc51_Insights_Article%20Tarver%20Verdict.pdf",
    },
  ];

  const openArticle = (article) => {
    WebBrowser.openBrowserAsync(article.link);
  };

  return (
    <Section
      title={"Articles"}
      cta={"See all"}
      headingProps={{
        px: "page",
      }}
      {...props}
    >
      <FlatList
        data={articles}
        pl={"page"}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <Pressable
              onPress={() => openArticle(item)}
              w={"191px"}
              overflow={"hidden"}
              space={3}
              key={item.title}
              mr={index == articles.length - 1 ? "40px" : 5}
            >
              <Box rounded={"md"} overflow={"hidden"} w={"100%"} mb={3}>
                <Image
                  source={item.imgSrc}
                  alt={item.title}
                  h={"115px"}
                  w={"100%"}
                  resizeMode={"cover"}
                />
              </Box>
              <Text fontSize={"subTitle"} numberOfLines={1}>
                {item.title}
              </Text>
              <Text variant={"subTitle"} fontSize={"sm"} numberOfLines={1}>
                {item.description}
              </Text>
            </Pressable>
          );
        }}
      />
    </Section>
  );
};

ResourcesArticles.propTypes = {
  ...Section.propTypes,
};

export default ResourcesArticles;
