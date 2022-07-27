import { css } from "@emotion/react";
import React from "react";

export const Header = () => {
  return (
    <header css={[header]}>
      <div css={[container]}>
        <h1 css={[logo]}>Qiita App</h1>
      </div>
    </header>
  );
};

const header = css`
  width: 100vw;
  background-color: #55c500;
  position: fixed;
  left: 0;
  z-index: 9999;
`;

const container = css`
  align-items: flex-end;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 0;
`;

const logo = css`
  color: #fff;
`;
