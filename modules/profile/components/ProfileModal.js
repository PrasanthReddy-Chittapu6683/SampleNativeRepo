import React, { useContext } from "react";
import AppModalScreen from "../../../core/components/AppModalScreen";
import { Box, Button, Divider, VStack } from "native-base";
import { AuthContext } from "../../../core/contexts/AuthContext";
import Section from "../../../core/components/Section";
import { UserContext } from "../../../core/contexts/UserContext";
import FormItem from "../../../core/components/FormItem";

const ProfileModal = () => {
  const { logout } = useContext(AuthContext);
  const { user } = useContext(UserContext);

  return (
    <AppModalScreen title={"Profile"}>
      <Box px={"modal"}>
        <Section title={"Your details"}>
          <VStack space={4}>
            <FormItem
              label={"First Name"}
              inputProps={{ readOnly: true }}
              value={user?.first_name}
            />
            <FormItem
              label={"Last Name"}
              inputProps={{ readOnly: true }}
              value={user?.last_name}
            />
            <FormItem
              label={"Email"}
              inputProps={{ readOnly: true }}
              value={user?.email}
            />
          </VStack>
        </Section>
      </Box>
      <Divider my={8} />
      <Box px={"modal"}>
        <Button onPress={logout}>Logout</Button>
      </Box>
    </AppModalScreen>
  );
};

export default ProfileModal;
