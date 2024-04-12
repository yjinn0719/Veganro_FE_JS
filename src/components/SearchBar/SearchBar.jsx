import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Wrapper,
  SearchContainer,
  Search,
  IconContainer,
} from './SearchBar.styles';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function SearchBar({ placeholder, value, onActive }) {
  return (
    <Wrapper>
      <SearchContainer>
        <Search placeholder={placeholder} value={value} onFocus={onActive} />
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
