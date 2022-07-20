import { css } from "@emotion/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Title } from "../components/atoms";
import PostItem from "../components/posts/PostItem";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const params = {
        page: "1",
        per_page: "20",
      };
      const headers = {
        Authorization: `Bearer ${process.env.REACT_APP_QIITA_KEY}`,
      };

      const response = await axios.get("https://qiita.com/api/v2/items", {
        headers,
        params,
      });

      setPosts(response.data);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  // 追加
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Box col>
      <Box css={contaienr} col>
        <Box css={header}>
          <Title size="sm">記事一覧</Title>
        </Box>
        <Box css={postWrapper} col>
          {posts.map((post, index) => (
            // 編集
            <PostItem key={index} post={post} margin={32} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

const contaienr = css`
  padding: 120px 0 80px;
`;

const header = css`
  column-gap: 40px;
  align-items: center;
`;

const postWrapper = css`
  margin-top: 40px;
`;