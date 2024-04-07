import Drawer from '../Drawer/Drawer';
import { ItemWrapper, ItemText } from './EditDrawer.styles';
export default function EditDrawer({
  isOpened,
  toggleDrawer,
  onDelete,
  onEdit,
  index,
}) {
  const handleDelete = () => {
    console.log('Delete');
  };
  const handleEdit = () => {
    console.log('Edit');
  };
  return (
    <Drawer height={24.5} isOpened={isOpened} toggleDrawer={toggleDrawer}>
      {isOpened && (
        <>
          <ItemWrapper>
            <ItemText color="#FF4747" onClick={() => onDelete(index)}>
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
