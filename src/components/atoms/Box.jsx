import { css } from "@emotion/react";

const Box = ({ col, wrap, children, ...props }) => {
  const flexDirection = col ? "column" : "row";
  const flexWrap = wrap ? "wrap" : "nowrap";

  return (
    <div css={[container, { flexDirection, flexWrap }]} {...props}>
      {children}
    </div>
  );
};

const container = css`
  display: flex;
`;

export default Box;
