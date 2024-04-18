import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 50px;
  background: ${(props) => props.theme.color.green[300]};
`;

export const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px;
  gap: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.color.green[300]};
`;
