import React, { useState } from 'react';
import { VegTagButton, VegTagTitle } from './VeganTag.styles';

function VeganTag({ title }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <VegTagButton onClick={handleClick} clicked={isClicked ? 1 : 0}>
      <VegTagTitle clicked={isClicked ? 1 : 0}>{title}</VegTagTitle>
    </VegTagButton>
  );
}

export default VeganTag;
