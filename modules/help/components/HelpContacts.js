import React from "react";
import { Box, Heading, HStack, useTheme, VStack } from "native-base";
import ChatIcon from "../../../core/images/ChatIcon";
import EmailIcon from "../../../core/images/EmailIcon";
import ChevronIcon from "../../../core/images/ChevronIcon";

const HelpContacts = () => {
  const { colors } = useTheme();
  const contacts = [
    {
      title: "Chat with EDNA",
      icon: ChatIcon,
      iconProps: {
        width: 14,
      },
    },
    {
      title: "Email EDNA",
      icon: EmailIcon,
      iconProps: {
        width: 15,
      },
    },
  ];
  return (
    <VStack space={4} px={"page"}>
      {contacts.map((contact) => {
        const Icon = contact.icon;

        return (
          <Box
            variant={"outlined"}
            key={contact.title}
            bg={colors.gradients[800]}
            p={5}
            rounded={"md"}
          >
            <HStack alignItems={"center"} justifyContent={"space-between"}>
              <HStack alignItems={"center"} space={4}>
                <Icon {...contact.iconProps} />
                <Heading size={"section"} color={"white"}>
                  {contact.title}
                </Heading>
              </HStack>
              <ChevronIcon width={10} />
            </HStack>
          </Box>
        );
      })}
    </VStack>
  );
};

export default HelpContacts;
