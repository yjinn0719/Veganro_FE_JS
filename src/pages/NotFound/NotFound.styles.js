import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;
  align-items: center;
`;
export const ImageContainer = styled.div`
  width: 120px;
  height: 120px;
  background-image: url(@/assets/images/not_found.png);
  background-size: cover;
  background-position: center;
`;
export const Title = styled.h1`
  font-size: 24px;
`;
