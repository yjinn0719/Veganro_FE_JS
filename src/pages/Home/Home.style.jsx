import styled from 'styled-components';
import RoundButton from '@/components/RoundButton/RoundButton';

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
`;
export const Box = styled.div`
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  position: absolute;
  top: 78px;
  display: flex;
  gap: 8px;
  z-index: 999;
`;
export const RelocateButton = styled(RoundButton)`
  &&& {
    position: absolute;
    left: 16px;
    bottom: 16px;
    z-index: 999;
  }
`;
export const Pin = styled.div`
  padding: 12px;
  background-color: white;
  color: 'red';
`;
