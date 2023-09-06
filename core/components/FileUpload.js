import React, { useState } from "react";
import PropTypes from "prop-types";
import * as DocumentPicker from "expo-document-picker";
import { Box, Heading, HStack, Spinner, Text } from "native-base";
import { useColor } from "../theme/colors";
import UploadIcon from "../images/UploadIcon";
import TickCircle from "../images/TickCircle";
import Touchable from "./Touchable";

const FileUpload = ({
  title,
  description,
  onUpload,
  complete,
  color,
  ...props
}) => {
  const borderColor = useColor("borders.sections");
  const spinnerColor = useColor("headings.section");
  const spinnerColorToUse = color || spinnerColor;
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ["*/*"],
    });

    if (result.type === "success" && result.uri && onUpload) {
      setIsUploading(true);
      await onUpload(result);
      setIsUploading(false);
    }
  };

  return (
    <HStack
      space={4}
      borderColor={borderColor}
      borderWidth={1}
      borderRadius={"md"}
      p={4}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box w={!complete ? "66%" : "59%"}>
        {title && (
          <Text fontSize={"subTitle"} color={color}>
            {title}
          </Text>
        )}
        {description && (
          <Text
            variant={"subTitle"}
            fontSize={"sm"}
            numberOfLines={2}
            color={color}
          >
            {description}
          </Text>
        )}
      </Box>
      <Touchable onPress={handleUpload}>
        {!complete && (
          <HStack space={3} alignItems={"center"}>
            {(isUploading && <Spinner color={spinnerColorToUse} />) || (
              <>
                <UploadIcon fillColor={color} />
                <Heading size={"section"} underline color={color}>
                  Upload
                </Heading>
              </>
            )}
          </HStack>
        )}
        {complete && (
          <HStack space={2} alignItems={"center"}>
            <TickCircle />
            <Heading size={"section"} color={"success.400"}>
              Uploaded
            </Heading>
          </HStack>
        )}
      </Touchable>
    </HStack>
  );
};

FileUpload.propTypes = {
  ...Box.propTypes,
  title: PropTypes.string,
  description: PropTypes.string,
  onUpload: PropTypes.func,
  color: PropTypes.string,
};

export default FileUpload;
