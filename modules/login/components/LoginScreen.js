import React, { useContext, useState } from "react";
import { Box, Heading, Text, useToast } from "native-base";
import Layout from "../../../core/components/Layout";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import { AuthContext } from "../../../core/contexts/AuthContext";
import FormItem from "../../../core/components/FormItem";
import { catchify } from "../../../core/services/promises";
import PageButton from "../../../core/components/PageButton";
import { isEmailValid } from "../../../core/services/forms";
import { baseToastProps } from "../../../core/constants/errors";

const LoginScreen = ({route}) => {
  const navigation = useNavigation();
  console.log("loginscreen route.params....", route.params);
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const { login, authError } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Email required";
      } else if (!isEmailValid(values.email)) {
        errors.email = "Invalid email address";
      }

      return errors;
    },
    onSubmit: async (values) => {
      setLoading(true);
      const [loginError] = await catchify(login(values.email));

      if (loginError) {
        toast.show({
          ...baseToastProps,
          title: loginError.message,
        });
      } else {
        navigation.push("Verify");
      }

      setLoading(false);
    },
  });
  return (
    <Layout avoidKeyboard showBackButton>
      <Box>
        <Heading size={"title"} mb={4}>
          What's your email?
        </Heading>
        <Text variant={"subTitle"} mb={8}>
          To login, we'll use your email. Please enter it below
        </Text>
        <FormItem
          keyboardType={"email-address"}
          autoCapitalize={"none"}
          autoComplete={"off"}
          autoCorrect={false}
          placeholder={"Enter your email"}
          onChangeText={(text) => {
            formik.setFieldValue("email", text);
          }}
          value={formik.values.email}
        />
      </Box>
      <PageButton
        onPress={formik.handleSubmit}
        isLoading={loading}
        isLoadingText={"Next"}
        isDisabled={!formik.values.email || !!formik.errors.email}
      >
        Next
      </PageButton>
    </Layout>
  );
};

export default LoginScreen;
