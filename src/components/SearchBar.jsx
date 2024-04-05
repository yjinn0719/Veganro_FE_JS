import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';
import { SearchOutline } from 'react-ionicons';

function SearchBar(props) {
  const handleClick = () => {};
  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <SearchContainer>
          <Search placeholder={props.placeholder} value={props.value} />
          <IconContainer onClick={handleClick}>
            <SearchOutline color={'#C4C4C4'} height="20px" width="20px" />
          </IconContainer>
        </SearchContainer>
      </Wrapper>
    </ThemeProvider>
  );
}

export default SearchBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px;
  box-sizing; border-box;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
`;

const SearchContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
