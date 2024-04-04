import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ChevronBack, SettingsOutline, CloseOutline } from 'react-ionicons';
import Theme from '../styles/Theme';

function Navbar(props) {
  const backClicked = () => {};

  return (
    <ThemeProvider theme={Theme}>
      <NavContainer>
        <ChevronBack
          color={'#383838'}
          height="24px"
          width="24px"
          onClick={backClicked}
        />
        <NavTitle>{props.title}</NavTitle>
        <NavIcon>
          {props.icon === 'setting' && <SettingsOutline />}
          {props.icon === 'delete' && <CloseOutline />}
        </NavIcon>
      </NavContainer>
    </ThemeProvider>
  );
}

export default Navbar;

const NavContainer = styled.div`
  display: flex;
  width: 480px;
  padding: 13px 16px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  background: ${(props) => props.theme.color.white};
  cursor: pointer;
`;

const NavTitle = styled.p`
  color: ${(props) => props.theme.color.gray[800]};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 18px */
  letter-spacing: -0.1px;
  margin-top: 4px;
`;

const NavIcon = styled.div`
  color: ${(props) => props.theme.color.gray[800]};
  width: 24px;
  height: 24px;
`;
