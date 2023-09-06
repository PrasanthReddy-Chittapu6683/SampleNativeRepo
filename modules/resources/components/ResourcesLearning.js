import React from "react";
import ResourcesVideos from "./ResourcesVideos";
import ResourcesPodcasts from "./ResourcesPodcasts";
import ResourcesArticles from "./ResourcesArticles";
import { Box } from "native-base";

const ResourcesLearning = () => {
  return (
    <Box>
      <ResourcesVideos mb={5} />
      <ResourcesPodcasts mb={5} />
      <ResourcesArticles />
    </Box>
  );
};

export default ResourcesLearning;
