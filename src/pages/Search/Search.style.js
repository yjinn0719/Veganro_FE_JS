import styled from 'styled-components';

import SmallRoundButton from '@/components/SmallRoundButton/SmallRoundButton';

export const Wrapper = styled.main`
  padding: 0 16px 16px 16px;
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.color.beige[100]};
  overflow: hidden;
`;
export const Categories = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
export const SearchNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 0;
  position: sticky;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
`;
export const FilterContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 130px;
  left: 0;
  z-index: 9;
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  z-index: 999;
  width: 100%;
  margin-top: 12px;
`;

export const FilterButton = styled(SmallRoundButton)`
  position: relative;
`;

export const ScrollableList = styled.div`
  overflow: auto;
  height: calc(100% - 125px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BottomBar = styled.div`
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 999;
`;
export const MapButtonContainer = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
`;
