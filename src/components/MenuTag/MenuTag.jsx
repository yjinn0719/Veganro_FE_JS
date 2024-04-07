import React, { useState } from 'react';
import { MenuTagBtn, MenuTagContent } from './MenuTag.styles';

function MenuTag({ title }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <MenuTagBtn onClick={handleClick} clicked={isClicked ? 1 : 0}>
      <MenuTagContent clicked={isClicked ? 1 : 0}>{title}</MenuTagContent>
    </MenuTagBtn>
  );
}

export default MenuTag;
