import React, { useState } from 'react';
import { VegTagButton, VegTagTitle } from './VeganTag.styles';

function VeganTag({ title, onClick, isActive }) {
  const [isClickable, setIsClickable] = useState(true);

  const handleClick = () => {
    if (isClickable) {
      setIsClickable(false);
      onClick();
      setTimeout(() => {
        setIsClickable(true);
      }, 1000);
    }
  };

  return (
    <VegTagButton onClick={handleClick} $isActive={isActive}>
      <VegTagTitle>{title}</VegTagTitle>
    </VegTagButton>
  );
}

export default VeganTag;
