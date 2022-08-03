import { css } from "@emotion/react";
import { Box, Title } from "../../components/atoms";
import { uiConfig, auth } from "../../firebase";
import StyledFirebaseAuth from "./StyledFirebaseAuth";

const Auth = () => {
  return (
    <Box css={contaienr} col>
      <Title size="lg" css={title}>
        サインインまたは新規登録
      </Title>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </Box>
  );
};

export default Auth;

const contaienr = css`
  align-items: center;
  padding: 120px 0 80px;
`;

const title = css`
  margin-bottom: 40px;
`;
