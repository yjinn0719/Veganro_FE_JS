import React, { useState } from 'react';
import { InputContainer } from './InputBox.styles';

function InputBox({ placeholder }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const inputContent = value.length > 0 ? 'existContent' : '';

  return (
    <InputContainer
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={inputContent}
    />
  );
}

export default InputBox;
