import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuList } from './MenuButton.style';
import RoundButton from '../RoundButton/RoundButton';

import { MENU_LIST } from '@/constants';
import { PATH } from '@/constants/router';

function MenuButton(props) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (page) => {
    setIsMenuOpen(false);
    const routePath = PATH[page.toUpperCase()];
    if (routePath) {
      navigate(routePath);
    } else {
      console.error('❌ Route path not found for:', page);
    }
  };

  return (
    <Menu>
      <MenuList isopened={isMenuOpen}>
        {isMenuOpen &&
          MENU_LIST.map((title, index) => (
            <RoundButton
              key={index}
              title={title}
              onClick={() => handleNavigation(title)}
            />
          ))}
      </MenuList>
      <RoundButton
        className="menu-button"
        title={'menu'}
        onClick={toggleMenu}
      />
    </Menu>
  );
}

export default MenuButton;
