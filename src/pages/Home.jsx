import React from 'react';
import styled from 'styled-components';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

// TODO 임시 레이아웃 코드
const Box = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const SearchBar = styled.div`
  width: 100%;
  height: 50px;
  padding: 16px;
  box-sizing: border-box;
  position: absolute;
  top: 16px;
  left: 0;
  background-color: white;
  z-index: 99;
`;

const Home = () => {
  return (
    <div>
      <Box className="home">
        <SearchBar />
        <Map
          center={{ lat: 33.5563, lng: 126.79581 }}
          style={{ width: '100%', height: '1080px' }}
        ></Map>
      </Box>
    </div>
  );
};

export default Home;
