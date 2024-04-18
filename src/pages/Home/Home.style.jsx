import styled from 'styled-components';
import { Button } from '@/components/RoundButton/RoundButton.style';
import SmallRoundButton from '@/components/SmallRoundButton/SmallRoundButton';

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
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
  gap: 12px;
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

export const RelocateButton = styled(Button)`
  position: absolute;
  bottom: 16px;
  left: 16px;
  z-index: 999;
`;
export const Pin = styled.div`
  padding: 12px;
  background-color: white;
  color: 'red';
`;
