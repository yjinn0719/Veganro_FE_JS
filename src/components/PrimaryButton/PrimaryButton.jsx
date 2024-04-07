import React from 'react';
import { PrimaryBtn, PrimaryBtnTitle } from './PrimaryButton.styles';

function PrimaryButton({ onClick, isEnabled, title }) {
  return (
    <PrimaryBtn onClick={onClick} disabled={!isEnabled}>
      <PrimaryBtnTitle>{title}</PrimaryBtnTitle>
    </PrimaryBtn>
  );
}

export default PrimaryButton;
