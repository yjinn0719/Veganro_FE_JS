import Drawer from '../Drawer/Drawer';
import { useState } from 'react';
import { ItemWrapper, ItemText } from './EditDrawer.styles';
import { useDeleteReview } from '../../hooks/useReview';
import ReviewDrawer from '../ReviewDrawer/ReviewDrawer';

export default function EditDrawer({ isOpened, address, reviewId }) {
  const { mutate } = useDeleteReview();
  const [isDeleteDrawerOpen, setIsDeleteDrawerOpen] = useState(false);
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);
  const [submittedReviews, setSubmittedReviews] = useState([]);

  const toggleDrawer = () => {
    setIsDeleteDrawerOpen(!isDeleteDrawerOpen);
    if (isEditDrawerOpen) {
      setIsEditDrawerOpen(false);
    }
  };

  const toggleEditReview = () => {
    setIsEditDrawerOpen(!isEditDrawerOpen);
    if (isDeleteDrawerOpen) {
      setIsDeleteDrawerOpen(false);
    }
  };

  const handleDelete = async () => {
    try {
      await mutate(reviewId);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  return (
    <>
      <Drawer height={24.5} isOpened={isOpened} toggleDrawer={toggleDrawer}>
        {isOpened && (
          <>
            <ItemWrapper>
              <ItemText color="#FF4747" onClick={handleDelete}>
                삭제
              </ItemText>
            </ItemWrapper>
            <ItemWrapper style={{ height: '73.31px' }}>
              <ItemText onClick={toggleEditReview}>수정</ItemText>
            </ItemWrapper>
          </>
        )}
      </Drawer>
      {isEditDrawerOpen && (
        <ReviewDrawer
          address={address}
          titleText={false}
          submitText={false}
          isOpened={isEditDrawerOpen}
          toggleDrawer={toggleEditReview}
          submittedReviews={submittedReviews}
          setSubmittedReviews={setSubmittedReviews}
          reviewIndex={reviewId}
        />
      )}
    </>
  );
}
