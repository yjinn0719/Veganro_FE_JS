import Drawer from '../Drawer/Drawer';
import {
  ItemWrapper,
  ItemText,
} from '@/components/EditDrawer/EditDrawer.styles';
export default function EditDrawer({ isOpened }) {
  return (
    <Drawer height={12.5} isOpened={isOpened} toggleDrawer={toggleDrawer}>
      {isOpened && (
        <>
          <ItemWrapper>
            <ItemText color="#FF4747" onClick={handleDelete}>
              신고
            </ItemText>
          </ItemWrapper>
        </>
      )}
    </Drawer>
  );
}
