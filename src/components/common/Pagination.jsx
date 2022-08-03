/* eslint-disable array-callback-return */
import { useState, useEffect } from "react";
import { Box, Text } from "../atoms";
import { css } from "@emotion/react";

const Pagination = (props) => {
  const {
    range = 5,
    currentPage,
    onNext,
    onPrevious,
    onPagePress,
    isInfinite,
  } = props;
  const [pages, setPages] = useState([]);

  const isRangeLast = currentPage === pages[pages.length - 1];
  const isRangePrevious = currentPage === pages.slice(0)[0] - 1;

  useEffect(() => {
    // eslint-disable-next-line default-case
    switch (true) {
      case currentPage === 1:
        setPages([...Array(range)].map((_, i) => i + 1));
        break;

      case isRangeLast:
        setPages([...Array(range)].map((_, i) => i + currentPage));
        break;

      case isRangePrevious && currentPage !== 1:
        const first = pages.slice(0)[0];
        setPages([...Array(range)].map((_, i) => i + (first - 1)));
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <Box css={container}>
      {isInfinite ? (
        <Box css={pointerWrap} onClick={onNext}>
          <Text css={pointer}>もっと見る</Text>
        </Box>
      ) : (
        <>
          {currentPage !== 1 && (
            <Box css={pointerWrap} onClick={onPrevious}>
              <Text css={pointer}>前へ</Text>
            </Box>
          )}
          <Box css={pageWrap}>
            {currentPage >= 5 && (
              <>
                <Box
                  css={[pointerWrap, currentPage === 1 && activePointer]}
                  onClick={() => onPagePress(1)}
                >
                  <Text
                    fontSize={14}
                    css={[pointer, currentPage === 1 && activePage]}
                  >
                    1
                  </Text>
                </Box>
                <Text>...</Text>
              </>
            )}
            {pages.map((page) => {
              return (
                <Box
                  key={page}
                  css={[pointerWrap, currentPage === page && activePointer]}
                  onClick={() => onPagePress(page)}
                >
                  <Text
                    key={page}
                    fontSize={14}
                    css={[pointer, currentPage === page && activePage]}
                  >
                    {page}
                  </Text>
                </Box>
              );
            })}
          </Box>
          {currentPage !== 100 && (
            <Box css={pointerWrap} onClick={onNext}>
              <Text css={pointer}>次へ</Text>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default Pagination;

const container = css`
  justify-content: center;
  align-items: center;
  column-gap: 16px;
`;

const pageWrap = css`
  column-gap: 8px;
`;

const pointerWrap = css`
  padding: 6px 8px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

const pointer = css`
  cursor: pointer;
`;

const activePointer = css`
  background-color: #337ab7;
  border-color: #337ab7;
`;

const activePage = css`
  color: #ffffff;
`;
