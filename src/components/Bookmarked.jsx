import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';
import { BookmarkOutline, Bookmark } from 'react-ionicons';

function Bookmarked() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <ThemeProvider theme={Theme}>
      <BookmarkContainer onClick={handleClick} clicked={isClicked}>
        <BookmarkContent clicked={isClicked}>
          {isClicked ? (
            <Bookmark color={'#4F8337'} height="24px" width="24px" />
          ) : (
            <BookmarkOutline color={'#000'} height="24px" width="24px" />
          )}
          <p>저장하기</p>
        </BookmarkContent>
      </BookmarkContainer>
    </ThemeProvider>
  );
}

export default Bookmarked;

const BookmarkContainer = styled.button`
  display: flex;
  width: 448px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid
    ${(props) =>
      props.clicked ? props.theme.color.green : props.theme.color.darkgray};
  background: ${(props) => props.theme.color.white};
  cursor: pointer;
`;

const BookmarkContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  p {
    color: ${(props) =>
      props.clicked ? props.theme.color.green : props.theme.color.darkgray};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
