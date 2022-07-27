import { css } from "@emotion/react";

const TextInput = ({ width = 300, height = 40, ...props }) => (
  <input css={[{ width, height }, input]} type="text" {...props} />
);

export default TextInput;

const input = css`
  padding: 4px 16px;
  margin-top: 4px;
  border: none;
  border-radius: 30px;
  :focus {
    outline: none;
  }
`;
