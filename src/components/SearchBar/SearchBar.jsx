import React from 'react';
import {
  Wrapper,
  SearchContainer,
  Search,
  IconContainer,
} from './SearchBar.styles';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function SearchBar({ placeholder, value, onActive, onSearchChange }) {
  return (
    <Wrapper>
      <SearchContainer>
        <Search
          placeholder={placeholder}
          value={value}
          onFocus={onActive}
          onChange={(e) => {
            onSearchChange(e.target.value);
          }}
        />
        <IconContainer onClick={onActive}>
          <SearchOutlinedIcon
            sx={{ color: '#C4C4C4', width: '24px', height: '24px' }}
          />
        </IconContainer>
      </SearchContainer>
    </Wrapper>
  );
}

export default SearchBar;
