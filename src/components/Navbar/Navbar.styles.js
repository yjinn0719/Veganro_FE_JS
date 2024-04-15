import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 480px;
  padding: 13px 16px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  background: ${(props) => props.theme.color.white};
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  box-sizing: border-box;
  z-index: 999;
`;

export const NavTitle = styled.p`
  color: ${(props) => props.theme.color.gray[800]};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 18px */
  letter-spacing: -0.1px;
  margin-top: 4px;
`;
