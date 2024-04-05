import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
`;
export const ButtonRelocate = styled.button`
  width: 48px;
  height: 48px;
  background-color: white;
  position: absolute;
  left: 16px;
  bottom: 16px;
  z-index: 999999;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;
export const Pin = styled.div`
  padding: 12px;
  background-color: white;
  color: 'red';
`;
