import Drawer from '../Drawer/Drawer';
import { useState, useEffect } from 'react';
import { notify } from '../../hooks/useToast';

import { ItemWrapper, ItemText } from './EditDrawer.styles';
import { useDeleteReview } from '../../hooks/useReview';
import ReviewDrawer from '../ReviewDrawer/ReviewDrawer';

export default function EditDrawer({
  isOpened,
  address,
  reviewId,
  toggleDrawer,
}) {
  const { mutate } = useDeleteReview();
  const [isDeleteDrawerOpen, setIsDeleteDrawerOpen] = useState(false);
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);
  const [submittedReviews, setSubmittedReviews] = useState([]);

  const toggleEditReview = () => {
    document.body.style.overflow = 'hidden';
    setIsEditDrawerOpen(!isEditDrawerOpen);
    if (isDeleteDrawerOpen) {
      setIsDeleteDrawerOpen(false);
    }
  };

  const handleDelete = async () => {
    try {
      await mutate(reviewId);
      notify('error', '리뷰가 삭제되었습니다.');
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
              <ItemText
                style={{ color: '#FF4747', fontSize: '14px' }}
                onClick={handleDelete}
              >
                삭제
              </ItemText>
            </ItemWrapper>
            <ItemWrapper style={{ height: '72px' }}>
              <ItemText onClick={toggleEditReview} style={{ fontSize: '14px' }}>
                수정
              </ItemText>
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
