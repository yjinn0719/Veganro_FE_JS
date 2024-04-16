import React from 'react';
import { MenuTagBtn, MenuTagContent } from './MenuTag.styles';

function MenuTag({ title, onClick, isSelected }) {
  return (
    <MenuTagBtn onClick={onClick} $clicked={isSelected ? 1 : 0}>
      <MenuTagContent $clicked={isSelected ? 1 : 0}>{title}</MenuTagContent>
    </MenuTagBtn>
  );
}

export default MenuTag;
