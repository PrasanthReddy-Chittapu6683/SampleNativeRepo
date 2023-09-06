import React from "react";
import Section from "../../../core/components/Section";
import { FlatList } from "native-base";
import yt1 from "../../../core/images/yt_1.png";
import yt2 from "../../../core/images/yt_2.jpeg";
import ResourceVideo from "./ResourceVideo";

const ResourcesVideos = (props) => {
  const videos = [
    {
      id: Math.random(),
      title: "Bloomberg Wealth: Blythe Masters",
      imgSrc: yt1,
      link: "https://www.youtube.com/watch?v=ktkz-5y4TN0",
    },
    {
      id: Math.random(),
      title: "Blythe Masters Warns of ‘Devastating Loss’ If AI Goes Unchecked",
      imgSrc: yt2,
      link: "https://www.youtube.com/watch?v=Q0YnvrDY64g",
    },
  ];

  return (
    <Section
      title={"Videos"}
      cta={"See all"}
      headingProps={{
        px: "page",
      }}
      {...props}
    >
      <FlatList
        data={videos}
        horizontal
        showsHorizontalScrollIndicator={false}
        pl={"page"}
        renderItem={({ item, index }) => {
          const mr = index === videos.length - 1 ? "40px" : 5;
          return (
            <ResourceVideo
              title={item.title}
              file={item.file}
              link={item.link}
              imgSrc={item.imgSrc}
              mr={mr}
            />
          );
        }}
      />
    </Section>
  );
};

ResourcesVideos.propTypes = {
  ...Section.propTypes,
};

export default ResourcesVideos;
