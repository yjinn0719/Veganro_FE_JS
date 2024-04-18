import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Menu, MenuList } from './MenuButton.style';
import RoundButton from '@/components/RoundButton/RoundButton';
import { MENU_LIST } from '@/constants';
import { useGetUserData } from '../../hooks/useUser';
import { PATH } from '@/constants/router';

import { isMenuOpenState } from '@/states/menuOpenState';
import { isModalOpenState } from '@/states/placeModalState';

function MenuButton() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(isMenuOpenState);
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const { data: userData } = useGetUserData();
  const userid = userData?._id;

  const toggleMenu = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    }

    setIsMenuOpen((prevState) => {
      setIsButtonActive(!prevState);
      return !prevState;
    });
  };

  const handleNavigation = (title) => {
    setIsMenuOpen(false);
    let routePath;
    if (title.toLowerCase() === 'my') {
      routePath = `/user/${userid}`;
    } else {
      routePath = PATH[title.toUpperCase()];
    }

    if (routePath) {
      navigate(routePath);
    } else {
      console.error('❌ Route path not found for:', title);
    }
  };

  return (
    <Menu className="menu-container">
      <MenuList $isopened={isMenuOpen} className="menu-list">
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
