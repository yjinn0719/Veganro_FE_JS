import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuList } from './MenuButton.style';
import RoundButton from '@/components/RoundButton/RoundButton';

import { MENU_LIST } from '@/constants';
import { PATH } from '@/constants/router';

function MenuButton() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(0);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsButtonActive(!isButtonActive);
  };

  const handleNavigation = (page) => {
    setIsMenuOpen(0);
    const routePath = PATH[page.toUpperCase()];
    if (routePath) {
      navigate(routePath);
    } else {
      console.error('❌ Route path not found for:', page);
    }
  };

  return (
    <Menu>
      <MenuList $isopened={isMenuOpen}>
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
        title={isButtonActive ? 'close' : 'menu'}
        onClick={toggleMenu}
      />
    </Menu>
  );
}

export default MenuButton;
