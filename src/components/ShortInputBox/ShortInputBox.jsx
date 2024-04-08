import React, { useState } from 'react';
import Select from 'react-select';
import { ShortInputContainer } from './ShortInputBox.styles';

let hour = [];
for (let i = 1; i <= 24; i++) {
  hour.push({
    value: ('0' + i).slice(-2),
    label: ('0' + i).slice(-2) + '시',
  });
}

const customStyles = {
  control: (base, state) => ({
    ...base,
    height: 50,
    minHeight: 50,
    borderColor: state.isFocused ? '#4F8337' : base.borderColor,
    boxShadow: state.isFocused ? '0 0 0 1px #4F83371A' : 'none',
    '&:hover': {
      borderColor: state.isFocused ? '#4F83371A' : base.borderColor,
    },
    fontSize: '14px',
    fontWeight: 600,
    color: '#6E6E6E',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#4F83371A' : provided.backgroundColor,
    color: state.isSelected ? '#4F8337' : '#6E6E6E',
    '&:hover': {
      backgroundColor: '#4F83371A',
      color: '#4F8337',
    },
    fontSize: '14px',
    fontWeight: 600,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#6E6E6E',
    fontSize: '14px',
    fontWeight: 600,
  }),
};

const ShortInputBox = ({ placeholder }) => {
  const [timeValue, setTimeValue] = useState('');

  return (
    <ShortInputContainer>
      <Select
        classNamePrefix="select"
        onChange={(option) => setTimeValue(option.value)}
        placeholder={placeholder}
        options={hour}
        styles={customStyles}
      />
    </ShortInputContainer>
  );
};

export default ShortInputBox;
