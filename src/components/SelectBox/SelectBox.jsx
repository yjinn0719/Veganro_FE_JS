import React from 'react';
import Select from 'react-select';
import { SelectBoxContainer } from './SelectBox.styles';

const customStyles = {
  control: (base, state) => ({
    ...base,
    height: 50,
    minHeight: 50,
    minWidth: 160,
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
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: '#6E6E6E',
      fontSize: '14px',
      fontWeight: 600,
      fontStyle: 'normal',
      lineHeight: 'normal',
    };
  },
};

const SelectBox = ({ placeholder, value, onChange, options }) => {
  return (
    <SelectBoxContainer>
      <Select
        classNamePrefix="select"
        value={options.find((option) => option.value === value) ?? ''}
        onChange={(option) => onChange(option.value)}
        placeholder={placeholder}
        options={options}
        styles={customStyles}
      />
    </SelectBoxContainer>
  );
};

export default SelectBox;
