import React from "react";
import { Box, Heading, HStack, VStack } from "native-base";
import { menuLinks } from "../services/menu";
import Touchable from "./Touchable";

const AppMenu = ({ currentTab, setCurrentTab }) => {
  return (
    <Box
      pt={4}
      px={4}
      pb={5}
      bg={"primary.600"}
      _light={{
        bg: "white",
      }}
      borderTopWidth={"1px"}
      borderTopColor={"rgba(255,255,255,0.25)"}
    >
      <HStack>
        {menuLinks.map((link) => {
          const Icon = link.icon;
          const isActive = link.name === currentTab;
          return (
            <Box w={`${100 / menuLinks.length}%`} key={link.name}>
              <Touchable
                onPress={() => {
                  if (!isActive) {
                    setCurrentTab(link.name);
                  }
                }}
              >
                <VStack
                  opacity={isActive ? 1 : 0.5}
                  alignItems={"center"}
                  space={2}
                >
                  <Box>
                    <Icon isActive={isActive} width={34} />
                  </Box>
                  <Heading
                    fontSize={"8px"}
                    fontFamily={"bold"}
                    letterSpacing={"2px"}
                    textAlign={"center"}
                    pl={"2px"}
                  >
                    {link.menuName || link.name}
                  </Heading>
                </VStack>
              </Touchable>
            </Box>
          );
        })}
      </HStack>
    </Box>
  );
};

export default AppMenu;
