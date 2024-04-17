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

export const Title = styled.h1`
  padding-top: 20px;
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => props.theme.color.gray[600]};
`;
