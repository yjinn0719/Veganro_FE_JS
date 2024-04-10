import Drawer from '../Drawer/Drawer';
import { useState } from 'react';
import { ItemWrapper, ItemText } from './EditDrawer.styles';
import { useDeleteReview } from '../../hooks/useReview';
export default function EditDrawer({ isOpened, onEdit, reviewId }) {
  const { mutate } = useDeleteReview();

  const [isDeleteDrawerOpen, setIsDeleteDrawerOpen] = useState(false);
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDeleteDrawerOpen(!isDeleteDrawerOpen);
    if (isEditDrawerOpen) {
      setIsEditDrawerOpen(false);
    }
  };

  const handleDelete = async () => {
    try {
      await mutate(reviewId);
      toggleDrawer();
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };
  return (
    <Drawer height={24.5} isOpened={isOpened} toggleDrawer={toggleDrawer}>
      {isOpened && (
        <>
          <ItemWrapper>
            <ItemText color="#FF4747" onClick={handleDelete}>
              삭제
            </ItemText>
          </ItemWrapper>
          <ItemWrapper style={{ height: '73.31px' }}>
            <ItemText onClick={onEdit}>수정</ItemText>
          </ItemWrapper>
        </>
      )}
    </Drawer>
  );
}
