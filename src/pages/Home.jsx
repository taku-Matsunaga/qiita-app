import { css } from "@emotion/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Title } from "../components/atoms";
import Pagination from "../components/common/Pagination";
import SearchBar from "../components/common/SearchBar";
import PostItem from "../components/posts/PostItem";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState();

  const fetchPosts = async () => {
    try {
      const params = {
        page: page,
        per_page: "20",
        query,
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
  }, [query, page]);

  return (
    <Box col>
      <Box css={contaienr} col>
        <Box css={header}>
          <Title size="sm">記事一覧</Title>
          <SearchBar onEnterPress={(value) => setQuery(value)} />
        </Box>
        <Box css={postWrapper} col>
          {posts.map((post, index) => (
            <PostItem key={index} post={post} margin={32} />
          ))}
          <Pagination
            currentPage={page}
            onNext={() => setPage(page + 1)}
            onPrevious={() => setPage(page - 1)}
            onPagePress={(page) => setPage(page)}
          />
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
