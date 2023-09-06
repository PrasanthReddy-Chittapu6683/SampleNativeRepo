import React, { useContext, useState } from "react";
import Layout from "../../../core/components/Layout";
import { Box, Heading, Text } from "native-base";
import { useFormik } from "formik";
import { AuthContext } from "../../../core/contexts/AuthContext";
import FormItem from "../../../core/components/FormItem";
import PageButton from "../../../core/components/PageButton";

const VerifyScreen = () => {
  const { verify, resendVerificationCode } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.code) {
        errors.code = "Code is required";
      }

      const isValid =
        !!values.code &&
        values.code.length === 6 &&
        Number.isInteger(Number(values.code));

      if (!isValid) {
        errors.code = "Invalid code";
      }

      return errors;
    },
    onSubmit: async (values) => {
      setLoading(true);
      // const [verifyErr] = await catchify(verify(values.code));
      await verify(values.code);

      // if (verifyErr) {
      //   toast.show({
      //     ...baseToastProps,
      //     title: verifyErr.message,
      //   });
      //   setLoading(false);
      // }
    },
  });

  return (
    <Layout avoidKeyboard showBackButton>
      <Box>
        <Heading size={"title"} mb={4}>
          We emailed you a code
        </Heading>
        <Text variant={"subTitle"} mb={8}>
          Please check your email and enter the code we sent you below.
        </Text>
        <FormItem
          keyboardType={"number-pad"}
          placeholder={"Enter code"}
          onChangeText={(text) => {
            formik.setFieldValue("code", text);
          }}
          values={formik.values.code}
          mb={8}
        />
        <Text
          color={"accent.500"}
          fontSize={18}
          variant={"bold"}
          onPress={resendVerificationCode}
        >
          Resend code
        </Text>
      </Box>
      <PageButton
        onPress={formik.handleSubmit}
        isLoading={loading}
        isLoadingText={"Next"}
        isDisabled={!formik.values.code || !!formik.errors.code}
      >
        Next
      </PageButton>
    </Layout>
  );
};

export default VerifyScreen;
