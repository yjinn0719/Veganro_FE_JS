import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

function Navbar(props) {
  const navigate = useNavigate();

  // 한 페이지 뒤로 이동
  const backClicked = () => {
    navigate(-1);
  };

  return (
    <NavContainer>
      <ArrowBackIosNewOutlinedIcon
        onClick={backClicked}
        sx={{ color: '#383838', width: '24px', height: '24px' }}
      />
      <NavTitle>{props.title}</NavTitle>
      {props.icon === 'setting' && (
        <SettingsOutlinedIcon
          sx={{ color: '#383838', width: '24px', height: '24px' }}
        />
      )}
      {props.icon === 'delete' && (
        <ClearOutlinedIcon
          sx={{ color: '#383838', width: '24px', height: '24px' }}
        />
      )}
    </NavContainer>
  );
}

export default Navbar;

const NavContainer = styled.div`
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
  z-index: 1000;
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
