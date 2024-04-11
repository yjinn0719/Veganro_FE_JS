import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BookmarkContainer, BookmarkContent } from './Bookmark.styles';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import {
  useGetBookmarkedByUserId,
  usePostBookmark,
  useDeleteBookmark,
} from '../../hooks/useUser';

function Bookmark() {
  const { placeid } = useParams();
  const { data: bookmarkData } = useGetBookmarkedByUserId();
  const [isClicked, setIsClicked] = useState(false);
  const [bookmarkId, setBookmarkId] = useState(null);

  const { mutate: postBookmark } = usePostBookmark();
  const { mutate: deleteBookmark } = useDeleteBookmark();

  useEffect(() => {
    if (bookmarkData) {
      const bookmarkIdByUser = bookmarkData.map((data) => data.place_id._id);
      if (bookmarkIdByUser.includes(placeid)) {
        setIsClicked(true);
        const bookmark = bookmarkData.find(
          (data) => data.place_id._id === placeid,
        );
        setBookmarkId(bookmark._id);
      } else {
        setIsClicked(false);
        setBookmarkId(null);
      }
    }
  }, [bookmarkData, placeid]);

  const handleClick = async () => {
    if (!placeid) {
      // placeid가 없으면 처리하지 않음
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
