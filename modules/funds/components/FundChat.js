import React, { useContext, useRef, useState } from "react";
import AppModalScreen from "../../../core/components/AppModalScreen";
import {
  Box,
  HStack,
  Input,
  KeyboardAvoidingView,
  PresenceTransition,
  ScrollView,
  VStack,
} from "native-base";
import FundChatBubble from "./FundChatBubble";
import ArrowIcon from "../../../core/images/ArrowIcon";
import CircleBox from "../../../core/components/CircleBox";
import { sendChatQuery } from "../services/chat";
import { FundContext } from "../contexts/FundContext";
import LoadingDots from "../../../core/components/LoadingDots";
import { timeout } from "../../../core/services/promises";
import Touchable from "../../../core/components/Touchable";

const FundChat = () => {
  const chatRef = useRef();
  const { fund } = useContext(FundContext);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      variant: "system",
      message: "Hello, what do you want to know about this fund?",
    },
  ]);
  const [currentMessage, setCurrentMessage] = useState("");

  const onSendMessage = async () => {
    if (!currentMessage) return;

    const messageToSend = String(currentMessage);
    const messagesWithNewQuestion = [
      ...messages,
      { id: messages.length + 1, variant: "user", message: currentMessage },
    ];
    setMessages(messagesWithNewQuestion);
    setCurrentMessage("");
    await timeout(10);
    setLoading(true);
    const result = await sendChatQuery(fund, messageToSend);
    setLoading(false);
    setMessages([
      ...messagesWithNewQuestion,
      {
        id: messagesWithNewQuestion.length + 1,
        variant: "system",
        message: result?.message,
      },
    ]);
  };

  return (
    <AppModalScreen title={"Chat"}>
      <KeyboardAvoidingView
        flex={1}
        behavior={"padding"}
        keyboardVerticalOffset={160}
      >
        <Box flex={1} justifyContent={"space-between"}>
          <ScrollView
            ref={chatRef}
            onContentSizeChange={() =>
              chatRef?.current?.scrollToEnd?.({ animated: true })
            }
            flex={1}
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
          >
            <VStack space={4} px={"page"} pb={6}>
              {messages.map((message) => (
                <PresenceTransition
                  key={message.id}
                  visible={true}
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                  }}
                >
                  <FundChatBubble {...message} />
                </PresenceTransition>
              ))}
              {loading && (
                <PresenceTransition
                  visible={true}
                  initial={{
                    opacity: 0,
                    scaleY: 0.9,
                  }}
                >
                  <FundChatBubble
                    variant={"system"}
                    message={<LoadingDots />}
                    messageContainerProps={{
                      py: 3,
                      px: 3,
                    }}
                  />
                </PresenceTransition>
              )}
            </VStack>
          </ScrollView>
          <HStack space={4} px={"page"} pt={4}>
            <Input
              placeholder={"Type your message here..."}
              variant={"outline"}
              flex={1}
              borderRadius={"3xl"}
              value={currentMessage}
              onChangeText={setCurrentMessage}
            />
            <Touchable onPress={onSendMessage}>
              <CircleBox
                size={"38px"}
                bg={{
                  linearGradient: {
                    colors: ["#2C1954", "#1C60AC"],
                  },
                }}
              >
                <ArrowIcon />
              </CircleBox>
            </Touchable>
          </HStack>
        </Box>
      </KeyboardAvoidingView>
    </AppModalScreen>
  );
};

export default FundChat;
