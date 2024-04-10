import React from 'react';
import { MenuTagBtn } from './MenuTag.styles';

function MenuTag({ title, onClick, isSelected }) {
  return (
    <MenuTagBtn onClick={onClick} clicked={isSelected ? 1 : 0}>
      {title}
    </MenuTagBtn>
  );
}

export default MenuTag;
