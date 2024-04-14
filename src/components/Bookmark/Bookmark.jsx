import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BookmarkContainer, BookmarkContent } from './Bookmark.styles';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { usePostBookmark, useDeleteBookmark } from '../../hooks/useUser';
import { useGetBookmarkByPlaceId } from '../../hooks/usePlace';

function Bookmark() {
  const { placeid } = useParams();
  const { data: bookmarkDataByPlaceId } = useGetBookmarkByPlaceId(placeid);

  const [isClicked, setIsClicked] = useState(false);
  const [bookmarkId, setBookmarkId] = useState(null);
  const { mutate: postBookmark } = usePostBookmark();
  const { mutate: deleteBookmark } = useDeleteBookmark();
  useEffect(() => {
    if (bookmarkDataByPlaceId) {
      const bookmarkStatus = bookmarkDataByPlaceId.isBookmarked;
      const bookmarkId = bookmarkDataByPlaceId._id;
      setBookmarkId(bookmarkId);
      setIsClicked(bookmarkStatus);
    } else {
      setIsClicked(false);
      setBookmarkId(null);
    }
  }, [bookmarkDataByPlaceId, placeid]);

  const handleClick = async () => {
    if (!placeid) {
      return;
    }

    const newValue = !isClicked;

    try {
      if (newValue) {
        await postBookmark({ place_id: placeid });
      } else {
        if (bookmarkId) {
          await deleteBookmark(bookmarkId);
          setBookmarkId(null);
        }
      }
      setIsClicked(newValue);
    } catch (error) {
      console.error('Error posting bookmark:', error);
    }
  };

  return (
    <BookmarkContainer onClick={handleClick} clicked={isClicked ? 1 : 0}>
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
