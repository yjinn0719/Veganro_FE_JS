import styled from 'styled-components';

export const Button = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  border: solid 1px ${(props) => props.theme.color.gray[300]};
  background: ${(props) => props.theme.color.white};
  box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.1);
  transition: all 0.3s ease-in;
  box-sizing: border-box;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.3);
  }
`;
