import React from 'react';
import styled from 'styled-components';
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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 448px;
  padding: 16px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
`;

const SearchContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Search = styled.input`
  padding: 16px 40px 16px 16px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color.gray[800]};
  box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.1);
  transition: all 0.2s ease-in;
  box-sizing: border-box;
  outline: none;
  &::placeholder {
    color: ${(props) => props.theme.color.gray[300]};
  }
  &:hover {
    border: 1px solid ${(props) => props.theme.color.green[500]};
    box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.2);
  }
  &:focus ~ div {
    color: ${(props) => props.theme.color.gray[800]};
  }
`;

const IconContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
