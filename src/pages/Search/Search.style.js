import styled from 'styled-components';

export const Wrapper = styled.main`
  padding: 16px;
  padding-top: 16px;
  width: 100%;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
`;
export const Box = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 78px;
  display: flex;
  gap: 8px;
  z-index: 999;
`;
export const SearchNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 110px;
  padding-bottom: 12px;

  background-color: white;
  position: sticky;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
`;
