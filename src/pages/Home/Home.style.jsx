import styled from 'styled-components';
import RoundButton from '@/components/RoundButton/RoundButton';
import MapButton from '@/components/MapButton/MapButton';

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
`;
export const FilterBar = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: absolute;
  top: 78px;
  z-index: 999;
`;
export const Categories = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const BottomBar = styled.div`
  width: 100%;
  position: absolute;
  bottom: 16px;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 999;
`;
export const RelocateButton = styled(RoundButton)`
  &.relocate-button {
  }
`;
export const ListViewButton = styled(MapButton)`
  &.list-view-button {
  }
`;
export const Pin = styled.div`
  padding: 12px;
  background-color: white;
  color: 'red';
`;
