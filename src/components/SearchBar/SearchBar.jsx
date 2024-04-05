import React from 'react';
import {
  Wrapper,
  SearchContainer,
  Search,
  IconContainer,
} from './SearchBar.styles';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function SearchBar(props) {
  const handleClick = () => {};
  return (
    <Wrapper>
      <SearchContainer>
        <Search placeholder={props.placeholder} value={props.value} />
        <IconContainer onClick={handleClick}>
          <SearchOutlinedIcon
            sx={{ color: '#C4C4C4', width: '24px', height: '24px' }}
          />
        </IconContainer>
      </SearchContainer>
    </Wrapper>
  );
}

export default SearchBar;
