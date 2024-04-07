import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MenuList = styled.div`
  display: ${({ isopened }) => (isopened ? 'flex' : 'none')};
  flex-direction: column-reverse;
  gap: 8px;
  z-index: 999;

  ${(props) => (props.isopened ? 'isopened="1"' : 'isopened="0"')};
`;

export const MenuButton = styled.button`
  &:hover {
    background: ${(props) => props.theme.color.green[500]};
  }
`;
