import React from "react";
import Layout from "../../../core/components/Layout";
import ResourcesLearning from "./ResourcesLearning";

const ResourcesScreen = () => {
  return (
    <Layout offsetTop={0} title={"Resources"} offsetSides={0} offsetBottom={8}>
      <ResourcesLearning />
      {/*<TabsView*/}
      {/*  tabs={[*/}
      {/*    {*/}
      {/*      title: "Learning",*/}
      {/*      content: () => <ResourcesLearning />,*/}
      {/*    },*/}
      {/*    {*/}
      {/*      title: "Documents",*/}
      {/*      content: () => <ResourcesDocuments />,*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*/>*/}
    </Layout>
  );
};

export default ResourcesScreen;
