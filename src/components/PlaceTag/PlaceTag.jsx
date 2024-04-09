import React from 'react';
import { PlaceTagBtn, PlaceTagContent } from './PlaceTag.styles';

function PlaceTag({ title, onClick, isSelected }) {
  return (
    <PlaceTagBtn onClick={onClick} clicked={isSelected ? 1 : 0}>
      <PlaceTagContent clicked={isSelected ? 1 : 0}>{title}</PlaceTagContent>
    </PlaceTagBtn>
  );
}

export default PlaceTag;
