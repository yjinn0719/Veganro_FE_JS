import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  // max-width: 448px;
  padding: 16px 0;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
`;

export const SearchContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Search = styled.input`
  padding: 16px 40px 16px 16px;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color.gray[300]};
  box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.1);
  transition: all 0.2s ease-in;
  box-sizing: border-box;
  outline: none;
  &::placeholder {
    color: ${(props) => props.theme.color.gray[500]};
  }
  &:hover {
    border: 1px solid ${(props) => props.theme.color.green[500]};
    box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.2);
  }
  &:focus ~ div {
    color: ${(props) => props.theme.color.gray[800]};
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
