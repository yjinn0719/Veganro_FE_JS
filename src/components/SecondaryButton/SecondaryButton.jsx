import React from 'react';
import { SecondBtn, SecondBtnContent } from './SecondaryButton.styles';

function SecondaryButton(props) {
  return (
    <SecondBtn color={props.color}>
      <SecondBtnContent>{props.title}</SecondBtnContent>
    </SecondBtn>
  );
}

export default SecondaryButton;
