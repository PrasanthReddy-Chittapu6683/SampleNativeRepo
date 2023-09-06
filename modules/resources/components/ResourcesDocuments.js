import React from "react";
import { VStack } from "native-base";
import Section from "../../../core/components/Section";
import Document from "../../funds/components/Document";

const ResourcesDocuments = () => {
  const sections = [
    {
      title: "Document Type A",
      documents: [
        {
          title: "Document 1",
          description: "Lorem ipsum dolor sit amet",
        },
        {
          title: "Document 2",
          description: "Lorem ipsum dolor sit amet",
        },
        {
          title: "Document 3",
          description: "Lorem ipsum dolor sit amet",
        },
      ],
    },
    {
      title: "Document Type B",
      documents: [
        {
          title: "Document 1",
          description: "Lorem ipsum dolor sit amet",
        },
        {
          title: "Document 2",
          description: "Lorem ipsum dolor sit amet",
        },
      ],
    },
    {
      title: "Document Type C",
      documents: [
        {
          title: "Document 1",
          description: "Lorem ipsum dolor sit amet",
        },
        {
          title: "Document 2",
          description: "Lorem ipsum dolor sit amet",
        },
      ],
    },
  ];
  return (
    <VStack space={6} px={"page"}>
      {sections.map((section) => {
        return (
          <Section title={section.title}>
            <VStack space={2}>
              {section.documents.map((document) => {
                return <Document {...document} key={document.title} />;
              })}
            </VStack>
          </Section>
        );
      })}
    </VStack>
  );
};

export default ResourcesDocuments;
