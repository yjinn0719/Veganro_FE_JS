import React, { useState } from 'react';
import Drawer from '../Drawer/Drawer';
import {
  ItemWrapper,
  ItemText,
} from '@/components/EditDrawer/EditDrawer.styles';
import { useUpdateComplaint } from '@/hooks/useUser';
import { notify } from '../../hooks/useToast';

export default function ComplaintDrawer({
  isOpened,
  reviewId: reviewId,
  toggleDrawer,
}) {
  const { mutate } = useUpdateComplaint();
  const handleReportClick = async () => {
    try {
      await mutate(reviewId, reviewId);
      notify('error', '리뷰가 신고되었습니다.');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error('Error reporting review:', error);
    }
  };

  return (
    <>
      <Drawer isOpened={isOpened} toggleDrawer={toggleDrawer}>
        {isOpened && (
          <>
            <ItemWrapper>
              <ItemText
                style={{ color: '#FF4747', fontSize: '14px' }}
                onClick={handleReportClick}
              >
                신고
              </ItemText>
            </ItemWrapper>
          </>
        )}
      </Drawer>
    </>
  );
}
