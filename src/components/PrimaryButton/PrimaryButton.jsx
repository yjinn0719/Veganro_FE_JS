import React from 'react';
import { PrimaryBtn, PrimaryBtnTitle } from './PrimaryButton.styles';

function PrimaryButton(props) {
  return (
    <PrimaryBtn onClick={props.onClick} disabled={!props.isEnabled}>
      <PrimaryBtnTitle>{props.title}</PrimaryBtnTitle>
    </PrimaryBtn>
  );
}

export default PrimaryButton;
