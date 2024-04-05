import React, { useState } from 'react';
import { BookmarkContainer, BookmarkContent } from './Bookmark.styles';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

function Bookmark() {
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

export default Bookmark;
