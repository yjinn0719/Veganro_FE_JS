import React, { useState } from 'react';
import Drawer from '../Drawer/Drawer';
import {
  ItemWrapper,
  ItemText,
} from '@/components/EditDrawer/EditDrawer.styles';

export default function ComplaintDrawer({ isOpened, onEdit, reviewId }) {
  const [isComplaintDrawerOpen, setIsComplaintDrawerOpen] = useState(false);

  const handleReportClick = () => {
    setIsComplaintDrawerOpen(true);
  };

  const toggleDrawer = () => {
    setIsComplaintDrawerOpen(!isComplaintDrawerOpen);
  };

  return (
    <Drawer height={14.5} isOpened={isOpened} toggleDrawer={toggleDrawer}>
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
