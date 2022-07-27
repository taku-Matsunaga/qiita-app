import { css } from "@emotion/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Title, Text } from "../components/atoms";
import MarkdownBlock from "../components/posts/MarkdownBlock";
import Tag from "../components/posts/Tag";

const PostDetail = () => {
  const { postId } = useParams();

  const [item, setItem] = useState();

  const fetchPostDetail = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${process.env.REACT_APP_QIITA_KEY}`,
      };

      const response = await axios.get(
        `https://qiita.com/api/v2/items/${postId}`,
        { headers }
      );

      setItem(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPostDetail();
  }, [postId]);

  return (
    <Box col>
      <Box col css={container}>
        <Box col css={header}>
          <Box css={userWrap}>
            <img
              css={avator}
              src={item?.user.profile_image_url}
              alt="user_img"
            />
            <Text css={user}>@{item?.user.id}</Text>
          </Box>
          <a
            css={linkText}
            href={item?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Title size="lg">{item?.title}</Title>
          </a>
          <Box css={tagWrapper}>
            {item?.tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </Box>
        </Box>
        <Box>
          <MarkdownBlock markdown={item?.body} />
        </Box>
      </Box>
    </Box>
  );
};

export default PostDetail;

const container = css`
  margin: 120px 0 80px;
  padding: 40px 24px;
  background-color: #ffffff;
`;

const header = css`
  margin-bottom: 40px;
`;

const userWrap = css`
  align-items: center;
  column-gap: 8px;
`;

const user = css`
  color: #7a7a7a;
`;

const avator = css`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

const linkText = css`
  transition: 0.2s;

  :hover {
    opacity: 0.5;
  }
`;

const tagWrapper = css`
  flex-wrap: wrap;
  margin-top: 16px;
`;
