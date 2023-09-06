import React from "react";
import Section from "../../../core/components/Section";
import { FlatList } from "native-base";
import QuestionTease from "./QuestionTease";

const HelpCommonQuestions = () => {
  const questions = [
    {
      id: 1,
      title: "What is leverage?",
    },
    {
      id: 2,
      title: "Question",
    },
  ];
  return (
    <Section
      title={"Common Questions"}
      cta={"See all"}
      headingProps={{
        px: "page",
      }}
    >
      <FlatList
        pl={"page"}
        data={questions}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <QuestionTease
            question={item}
            key={item.id}
            w={"192px"}
            mr={index === questions.length - 1 ? "40px" : 5}
          />
        )}
      />
    </Section>
  );
};

export default HelpCommonQuestions;
