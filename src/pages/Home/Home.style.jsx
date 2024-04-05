import styled from 'styled-components';

// TODO 임시 레이아웃 코드
export const Box = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
`;
export const SearchBar = styled.div`
  width: 100%;
  height: 50px;
  padding: 16px;
  box-sizing: border-box;
  position: absolute;
  top: 16px;
  left: 0;
  background-color: white;
  z-index: 99;
`;
export const ButtonCurrentLocation = styled.button`
  width: 48px;
  height: 48px;
  background-color: white;
  position: absolute;
  left: 16px;
  bottom: 48px;
  z-index: 99;
  cursor: pointer;
`;
export const ButtonUpdateStore = styled.button`
  width: 48px;
  height: 48px;
  background-color: white;
  position: absolute;
  left: 16px;
  bottom: 48px;
  z-index: 99;
`;
export const Pin = styled.div`
  padding: 12px;
  background-color: white;
  color: 'red';
`;
