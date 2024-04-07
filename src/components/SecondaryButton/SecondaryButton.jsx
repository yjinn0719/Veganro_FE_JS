import React from 'react';
import { SecondBtn, SecondBtnContent } from './SecondaryButton.styles';

function SecondaryButton({ color, title }) {
  return (
    <SecondBtn color={color}>
      <SecondBtnContent>{title}</SecondBtnContent>
    </SecondBtn>
  );
}

export default SecondaryButton;
