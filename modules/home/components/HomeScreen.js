import React from "react";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../../core/components/Layout";
import BeginView from "./BeginView";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Layout>
      <BeginView />
    </Layout>
  );
};

export default HomeScreen;
