import styled from 'styled-components';
import RoundButton from '@/components/RoundButton/RoundButton';
import SmallRoundButton from '@/components/SmallRoundButton/SmallRoundButton';
import MapButton from '@/components/MapButton/MapButton';

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: ${(props) => props.theme.color.beige[100]};
  overflow: hidden;
`;
export const TopBar = styled.div`
  width: 100%;
  padding: 0 16px;
  position: absolute;
  top: 16px;
  z-index: 999;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const FilterBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FilterButton = styled(SmallRoundButton)`
  position: relative;
`;
export const Categories = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
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
  z-index: 998;
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
