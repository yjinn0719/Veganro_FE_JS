import React, { useState } from 'react';
import { PlaceTagBtn, PlaceTagContent } from './PlaceTag.styles';

function PlaceTag({ title }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <PlaceTagBtn onClick={handleClick} clicked={isClicked ? 1 : 0}>
      <PlaceTagContent clicked={isClicked ? 1 : 0}>{title}</PlaceTagContent>
    </PlaceTagBtn>
  );
}

export default PlaceTag;
