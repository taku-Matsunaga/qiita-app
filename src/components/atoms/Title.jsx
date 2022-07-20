import { css } from "@emotion/react";

const Title = ({ size, children, ...props }) => {
  const fontSize =
    size === "lg" ? 40 : size === "md" ? 32 : size === "sm" ? 24 : 20;

  return (
    <span css={[text, { fontSize }]} {...props}>
      {children}
    </span>
  );
};

export default Title;

const text = css`
  line-height: 145%;
  font-weight: 700;
`;
