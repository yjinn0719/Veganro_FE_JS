import React from 'react';
import { InputContainer } from './InputBox.styles';

function InputBox({ placeholder, value, onChange }) {
  return (
    <InputContainer
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default InputBox;
