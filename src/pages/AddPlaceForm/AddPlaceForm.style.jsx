import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
`;

export const Nav = styled.div`
  width: 100%;
  height: 50px;
  padding: 16px;
  box-sizing: border-box;
  position: fixed;
  top: 16px;
  left: 0;
  background-color: white;
  z-index: 99;
`;

export const Map = styled.div`
  width: 100%;
  height: 120px;
  border-radius: 4px;
`;
