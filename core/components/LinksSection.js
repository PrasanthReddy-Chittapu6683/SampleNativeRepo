import React from "react";
import PropTypes from "prop-types";
import { Box, Divider, HStack, Text, VStack } from "native-base";
import { colors } from "../theme/colors";
import Touchable from "./Touchable";
import ChevronIcon from "../images/ChevronIcon";
import Section from "./Section";
import { useNavigation } from "@react-navigation/native";

const LinksSection = ({ title, titleColor, links, ...props }) => {
  const navigation = useNavigation();
  return (
    <Section
      title={title}
      px={"modal"}
      titleProps={{
        color: titleColor,
      }}
      {...props}
    >
      <Box
        bg={colors.gradients[850]}
        rounded={"sm"}
        borderWidth={"1px"}
        borderColor={"accent.325"}
        p={5}
      >
        <VStack divider={<Divider />} space={4}>
          {links.map((link) => {
            return (
              <Touchable
                key={link.title}
                onPress={() => {
                  if (link.url) {
                    navigation.navigate(link.url, link.params);
                  }
                }}
              >
                <HStack alignItems={"center"} justifyContent={"space-between"}>
                  <HStack space={6} alignItems={"center"}>
                    <Box>{link.icon}</Box>
                    <Text color={"accent.250"} fontSize={"16px"}>
                      {link.title}
                    </Text>
                  </HStack>
                  <ChevronIcon width={18} mr={"20px"} />
                </HStack>
              </Touchable>
            );
          })}
        </VStack>
      </Box>
    </Section>
  );
};

LinksSection.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      title: PropTypes.string,
      url: PropTypes.string,
      params: PropTypes.object,
    })
  ),
};

export default LinksSection;
