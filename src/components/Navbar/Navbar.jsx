import React from 'react';
import { NavContainer, NavTitle } from './Navbar.styles';
import { useNavigate, useParams } from 'react-router-dom';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

function Navbar({ title, icon }) {
  const navigate = useNavigate();
  const { userid } = useParams();

  // 한 페이지 뒤로 이동
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <NavContainer>
      <ArrowBackIosNewOutlinedIcon
        onClick={handleClick}
        sx={{ color: '#383838', width: '24px', height: '24px' }}
      />
      <NavTitle>{title}</NavTitle>
      {icon === 'setting' && (
        <SettingsOutlinedIcon
          onClick={() => navigate(`/user/${userid}/edit`)}
          sx={{ color: '#383838', width: '24px', height: '24px' }}
        />
      )}
      {icon === 'delete' && (
        <ClearOutlinedIcon
          sx={{ color: '#383838', width: '24px', height: '24px' }}
        />
      )}
      {icon === 'null' && <div style={{ width: '24px', height: '24px' }}></div>}
    </NavContainer>
  );
}

export default Navbar;
