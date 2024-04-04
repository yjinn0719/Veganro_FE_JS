import React from 'react';
import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function SearchBar() {
  const handleClick = () => {};
  return (
    <Wrapper>
      <SearchContainer>
        <Search placeholder="지역, 매장 검색" />
        <IconContainer onClick={handleClick}>
          <SearchOutlinedIcon
            sx={{ color: '#C4C4C4', width: '20px', height: '20px' }}
          />
        </IconContainer>
      </SearchContainer>
    </Wrapper>
  );
}

export default SearchBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 448px;
  margin: auto;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Search = styled.input`
  padding: 16px;
  padding-right: 40px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color.gray[800]};
  box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.12);
  outline: none;
`;

const IconContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
