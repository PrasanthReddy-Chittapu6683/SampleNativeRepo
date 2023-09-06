import React, { useContext, useState } from "react";
import Layout from "../../../core/components/Layout";
import { Box, Button, Heading, Text } from "native-base";
import FormItem from "../../../core/components/FormItem";
import { useFormik } from "formik";
import { UserContext } from "../../../core/contexts/UserContext";
import { useAfterLogin } from "../services/login";

const DetailsScreen = () => {
  const [loading, setLoading] = useState(false);
  const { updateMe } = useContext(UserContext);
  const afterLogin = useAfterLogin();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.firstName) {
        errors.firstName = "First name is required";
      }

      if (!values.lastName) {
        errors.lastName = "Last name is required";
      }

      return errors;
    },
    onSubmit: async (values) => {
      setLoading(true);
      await updateMe(values);

      afterLogin();
    },
  });
  return (
    <Layout avoidKeyboard showBackButton>
      <Box mb={6}>
        <Heading size={"title"} mb={4}>
          What's your name?
        </Heading>
        <Text variant={"subTitle"} mb={8}>
          So that we know what to call you.
        </Text>
        <FormItem
          label={"First Name"}
          mb={5}
          value={formik.values.firstName}
          onChangeText={(text) => formik.setFieldValue("firstName", text)}
        />
        <FormItem
          label={"Last Name"}
          value={formik.values.lastName}
          onChangeText={(text) => formik.setFieldValue("lastName", text)}
        />
      </Box>
      <Box pb={8}>
        <Button
          size={"page"}
          onPress={formik.handleSubmit}
          isDisabled={!formik.values.firstName || !formik.values.lastName}
          isLoading={loading}
          isLoadingText={"Next"}
        >
          Next
        </Button>
      </Box>
    </Layout>
  );
};

export default DetailsScreen;
