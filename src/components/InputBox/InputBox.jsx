import React from 'react';
import { InputContainer } from './InputBox.styles';

function InputBox({ placeholder, value, onChange }) {
  const inputContent = value.length > 0 ? 'existContent' : '';

  return (
    <InputContainer
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={inputContent}
    />
  );
}

export default InputBox;
