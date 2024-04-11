import React from 'react';
import { SecondBtn, SecondBtnContent } from './SecondaryButton.styles';

function SecondaryButton({ color, title, onClick }) {
  return (
    <SecondBtn color={color} onClick={onClick}>
      <SecondBtnContent>{title}</SecondBtnContent>
    </SecondBtn>
  );
}

export default SecondaryButton;
