import { css } from "@emotion/react";
import dayjs from "dayjs";
import { Box, Text, Title } from "../atoms";

const PostItem = (props) => {
  const { post } = props;

  return (
    <Box css={[container, { marginBottom: props.margin }]} col>
      <Title>{post.title}</Title>
      <Box css={dateWrapper}>
        <Text fontSize={12} css={dateText}>
          {dayjs(post.created_at).format("YYYY年MM月DD日 HH:mm:ss")}
        </Text>
      </Box>
      <Box css={tagWrapper}>
        {post.tags.map((tag, index) => (
          <Box key={index} css={tagItem}>
            <Text css={tagText} fontSize={12}>
              {tag.name}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PostItem;

const container = css`
  padding: 16px 24px;
  border-radius: 8px;
  background-color: #fff;
`;

const dateWrapper = css`
  margin: 8px 0;
`;

const dateText = css`
  color: rgba(0, 0, 0, 0.6);
`;

const tagWrapper = css`
  flex-wrap: wrap;
  margin-top: 8px;
`;

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
