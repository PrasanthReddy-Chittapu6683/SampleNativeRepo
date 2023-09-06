import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Divider, Heading, HStack, Pressable } from "native-base";

const TabsView = ({ tabs, tabsHeadingProps, ...props }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const content = tabs[selectedTab].content;
  return (
    <Box {...props}>
      <Box mb={6} px={"page"} {...tabsHeadingProps}>
        <HStack
          rounded={"md"}
          borderColor={"accent.325"}
          borderWidth={"1px"}
          _light={{
            borderColor: "accent.400",
          }}
          divider={
            <Divider
              backgroundColor={"accent.325"}
              _light={{
                backgroundColor: "accent.400",
              }}
              opacity={1}
            />
          }
        >
          {tabs.map((tab, i) => {
            return (
              <Pressable
                w={"50%"}
                key={tab.title}
                position={"relative"}
                onPress={() => {
                  setSelectedTab(i);
                }}
              >
                <Box
                  w={"100%"}
                  h={"100%"}
                  position={"absolute"}
                  top={0}
                  left={0}
                  bg={selectedTab === i ? "accent.325" : "transparent"}
                  opacity={0.2}
                  _light={{
                    bg: selectedTab === i ? "accent.400" : "transparent",
                  }}
                />
                <Heading
                  position={"relative"}
                  size={"section"}
                  textAlign={"center"}
                  w={"100%"}
                  color={selectedTab === i ? "white" : "accent.200"}
                  fontFamily={selectedTab === i ? "regular" : "light"}
                  py={2}
                  _light={{
                    color: "accent.400",
                  }}
                >
                  {tab.title}
                </Heading>
              </Pressable>
            );
          })}
        </HStack>
      </Box>
      {content()}
    </Box>
  );
};

TabsView.propTypes = {
  ...Box.propTypes,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.func,
    })
  ),
  tabsHeadingProps: PropTypes.shape(Box.propTypes),
};

export default TabsView;
