import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';
import { SearchOutline } from 'react-ionicons';

function SearchBar() {
  const handleClick = () => {};
  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <SearchContainer>
          <Search placeholder="" />
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
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Search = styled.input`
  padding: 16px;
  padding-right: 40px;
  width: 448px;
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
