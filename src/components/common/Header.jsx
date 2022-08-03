import { css } from "@emotion/react";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as NaviIcon from "../../assets/icon/navi";
import { auth } from "../../firebase";
import { Box, Text, Title } from "../atoms";


export const Header = () => {

  const [isLogin, setIsLogin] = useState();
  const navigate = useNavigate();

  const ROUTES = [
    {
      path: "/",
      icon: { inActive: NaviIcon.HomeIcon, active: NaviIcon.HomeIconActive },
    },
    {
      path: "column",
      icon: {
        inActive: NaviIcon.ColumnIcon,
        active: NaviIcon.ColumnIconActive,
      },
    },
  ];

  const logout = async () => {
    if (window.confirm("ログアウトしますか？")) {
      await auth.signOut();
      navigate("/auth");
    }
  };

  // 追加
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      user ? setIsLogin(true) : setIsLogin(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <header css={[header]}>
      <Box css={[container]}>
        <Title css={[logo]}>Qiita App</Title>
      </Box>
      <Box css={navi}>
        {ROUTES.map((route, index) => (
          <NavLink to={route.path} key={index}>
            {({ isActive }) => (
              <Box css={[naviItem, isActive && border]} col>
                <img
                  src={isActive ? route.icon.active : route.icon.inActive}
                  css={naviIcon}
                  alt=""
                />
              </Box>
            )}
          </NavLink>
        ))}
        {isLogin && (
          <Box>
            <Text css={logoutText} onClick={logout}>
              ログアウト
            </Text>
          </Box>
        )}
      </Box>
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

const navi = css`
  column-gap: 40px;
  flex: 1;
  justify-content: center;
`;

const naviItem = css`
  justify-content: center;
  width: 40px;
`;

const naviIcon = css`
  margin-bottom: 4px;
`;

const border = css`
  :after {
    background-color: #fff;
    border-radius: 1.5px;
    content: "";
    display: block;
    height: 3px;
    width: 100%;
  }
`;

const logoutText = css`
  color: #fff;
  font-weight: 700;
  cursor: pointer;
`;