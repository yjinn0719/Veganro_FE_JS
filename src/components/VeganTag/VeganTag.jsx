import React, { useState } from 'react';
import { VegTagButton, VegTagTitle } from './VeganTag.styles';

function VeganTag(props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <VegTagButton onClick={handleClick} clicked={isClicked ? 1 : 0}>
      <VegTagTitle clicked={isClicked ? 1 : 0}>{props.title}</VegTagTitle>
    </VegTagButton>
  );
}

export default VeganTag;
