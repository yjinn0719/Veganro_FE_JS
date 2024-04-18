import React, { useState } from 'react';
import Drawer from '../Drawer/Drawer';
import {
  ItemWrapper,
  ItemText,
} from '@/components/EditDrawer/EditDrawer.styles';
import { useUpdateComplaint } from '@/hooks/useUser';
import { notify } from '../../hooks/useToast';

export default function ComplaintDrawer({ isOpened, reviewId: reviewId }) {
  const [isComplaintDrawerOpen, setIsComplaintDrawerOpen] = useState(false);
  const { mutate } = useUpdateComplaint();
  const handleReportClick = async () => {
    try {
      await mutate(reviewId, reviewId);
      notify('error', '리뷰가 신고되었습니다.');
    } catch (error) {
      console.error('Error reporting review:', error);
    }
  };

  const toggleDrawer = () => {
    setIsComplaintDrawerOpen(!isComplaintDrawerOpen);
  };

  return (
    <Drawer isOpened={isOpened} toggleDrawer={toggleDrawer}>
      {isOpened && (
        <>
          <ItemWrapper>
            <ItemText color="#FF4747" onClick={handleReportClick}>
              신고
            </ItemText>
          </ItemWrapper>
        </>
      )}
    </Drawer>
  );
}
