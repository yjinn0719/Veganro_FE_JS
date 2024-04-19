import React from 'react';
import { NavContainer, NavTitle } from './Navbar.styles';
import { useNavigate, useParams } from 'react-router-dom';
import {
  IoClose,
  IoChevronBackOutline,
  IoSettingsOutline,
} from 'react-icons/io5';

function Navbar({ title, icon }) {
  const navigate = useNavigate();
  const { userid } = useParams();

  // 한 페이지 뒤로 이동
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <NavContainer>
      <IoChevronBackOutline
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
      <NavTitle>{title}</NavTitle>
      {icon === 'setting' && (
        <IoSettingsOutline onClick={() => navigate(`/user/${userid}/edit`)} />
      )}
      {icon === 'delete' && <IoClose style={{ cursor: 'pointer' }} />}
      {icon === 'null' && <div style={{ width: '24px', height: '24px' }}></div>}
    </NavContainer>
  );
}

export default Navbar;
