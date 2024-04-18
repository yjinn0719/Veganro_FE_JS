import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.green[100]};
`;

export const Title = styled.h1`
  padding-top: 20px;
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => props.theme.color.gray[600]};
`;
