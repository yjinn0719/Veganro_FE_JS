import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Wrapper,
  SearchContainer,
  Search,
  IconContainer,
} from './SearchBar.styles';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function SearchBar({ placeholder, value }) {
  // UX: 검색 입력창 click -> 검색 페이지로 navigate
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/search');
  };

  return (
    <Wrapper>
      <SearchContainer>
        <Search placeholder={placeholder} value={value} />
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
