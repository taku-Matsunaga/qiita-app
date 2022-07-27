import { css } from "@emotion/react";
import React from "react";
import { Box, Text } from "../atoms";

const Tag = (props) => {
  const { key, tag } = props;

  return (
    <Box key={key} css={tagItem}>
      <Text css={tagText} fontSize={12}>
        {tag.name}
      </Text>
    </Box>
  );
};

export default Tag;

const tagItem = css`
  background-color: #bbbabd;
  padding: 4px 8px;
  margin-left: 8px;
  border-radius: 6px;
`;

const tagText = css`
  font-weight: 700;
  color: #fff;
`;
