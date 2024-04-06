import Drawer from '../Drawer/Drawer';
import { ItemWrapper, ItemText } from './EditDrawer.styles';
export default function EditDrawer() {
  return (
    <>
      <Drawer
        height={25}
        isOpened={isEditDrawerOpen}
        toggleDrawer={toggleReviewDrawer}
      >
        <ItemWrapper>
          <ItemText color="#FF4747">삭제</ItemText>
        </ItemWrapper>
        <ItemWrapper style={{ height: '73.31px' }}>
          <ItemText>수정</ItemText>
        </ItemWrapper>
      </Drawer>
    </>
  );
}
