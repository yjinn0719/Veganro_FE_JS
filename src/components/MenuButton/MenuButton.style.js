import styled from 'styled-components';

export const Menu = styled.menu`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  bottom: 16px;
  right: 16px;
  z-index: 999;
`;

export const MenuList = styled.div`
  display: ${(props) => (props.$isopened ? 'flex' : 'none')};
  flex-direction: column-reverse;
  gap: 8px;
`;
