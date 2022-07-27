import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";
import { Outlet } from "react-router-dom";
// 追加
import { Box } from "../atoms";
import { Header } from "../common/Header";

const Base = () => {
  return (
    <>
      <Global styles={globalStyle} />
      {/* 編集 */}
      <Box col css={container}>
        <Header />
        <Outlet />
      </Box>
    </>
  );
};

export default Base;

const globalStyle = css`
  ${emotionReset}
  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  body {
    background-color: #f5f6f6;
  }
  a {
    color: #000000;
    text-decoration: none;
  }
`;

const container = css`
  max-width: 1080px;
  margin: 0 auto;
`;
