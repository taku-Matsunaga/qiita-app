import { css } from "@emotion/react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { Box, Text, Title } from "../atoms";
import Tag from "./Tag";

const PostItem = (props) => {
  const { post } = props;

  return (
    <Link to={`/post/${post.id}`}>
      <Box css={[container, { marginBottom: props.margin }]} col>
        <Title>{post.title}</Title>
        <Box css={dateWrapper}>
          <Text fontSize={12} css={dateText}>
            {dayjs(post.created_at).format("YYYY年MM月DD日 HH:mm:ss")}
          </Text>
        </Box>
        <Box css={tagWrapper}>
          {post.tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </Box>
      </Box>
    </Link>
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

