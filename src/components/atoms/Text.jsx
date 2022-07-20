import { css } from "@emotion/react";

const Text = ({ fontSize = 16, children, ...props }) => (
  <p css={[text, { fontSize }]} {...props}>
    {children}
  </p>
);

export default Text;

const text = css`
  line-height: 130%;
  font-weight: 500;
`;
