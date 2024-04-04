import React, { useState } from 'react';
import styled from 'styled-components';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

function Bookmarked() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <BookmarkContainer onClick={handleClick} clicked={isClicked}>
      <BookmarkContent clicked={isClicked ? 1 : 0}>
        {isClicked ? (
          <BookmarkIcon
            sx={{ color: '#4F8337', width: '24px', height: '24px' }}
          />
        ) : (
          <BookmarkBorderOutlinedIcon sx={{ width: '24px', height: '24px' }} />
        )}
        <p>북마크</p>
      </BookmarkContent>
    </BookmarkContainer>
  );
}

export default Bookmarked;

const BookmarkContainer = styled.button`
  display: flex;
  width: 100%;
  max-width: 448px;
  margin: auto;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid
    ${(props) =>
      props.clicked
        ? props.theme.color.green[500]
        : props.theme.color.gray[800]};
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
      props.clicked
        ? props.theme.color.green[500]
        : props.theme.color.gray[800]};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
