import React, { useContext, useState } from "react";
import { Linking } from "react-native";
import Touchable from "../../../core/components/Touchable";
import { MaterialIcons } from "@expo/vector-icons";
import { Box, Button, HStack, PresenceTransition } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FundContext } from "../contexts/FundContext";
import { getFundColors } from "../services/funds";

const FundHelp = (props) => {
  const route = useRoute();
  const navigation = useNavigation();
  const { fund } = useContext(FundContext);
  const { fundStyle } = route.params;
  const { text: textColor, bg } = getFundColors(fundStyle);
  const [helpOpen, setHelpOpen] = useState(false);
  const buttons = [
    {
      title: "AI Chat",
      onPress: () => {
        navigation.navigate("FundChat", { fundId: fund.id });
      },
    },
    {
      title: "AI Video",
      onPress: () => {
        navigation.navigate("FundVideo", { fundId: fund.id });
      },
    },
    {
      title: "Email",
      onPress: () => {
        Linking.openURL("mailto:support@edna.com");
      },
    },
  ];

  return (
    <Box {...props}>
      <Touchable onPress={() => setHelpOpen(!helpOpen)}>
        <MaterialIcons name={"help"} size={34} color={textColor} />
      </Touchable>

      <Box
        position={"absolute"}
        bottom={"150%"}
        right={"300%"}
        pointerEvents={helpOpen ? "auto" : "none"}
      >
        <PresenceTransition
          visible={helpOpen}
          initial={{
            opacity: 0,
            scaleY: 0.9,
          }}
        >
          <HStack space={2} alignItems={"center"}>
            {buttons.map((button) => {
              return (
                <Button
                  bg={bg}
                  key={button.title}
                  size={"cta"}
                  onPress={() => {
                    setHelpOpen(false);
                    button.onPress();
                  }}
                  _text={{
                    color: textColor,
                    _light: {
                      color: textColor,
                    },
                  }}
                >
                  {button.title}
                </Button>
              );
            })}
          </HStack>
        </PresenceTransition>
      </Box>
    </Box>
  );
};

export default FundHelp;
