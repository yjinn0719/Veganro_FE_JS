import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useGeolocation } from '../utils/useGeolocation';
import styled from 'styled-components';

const HomePage = () => {
  const geo = useGeolocation();

  return (
    <div>
      <Box className="home">
        <SearchBar />
        <Map
          id="map"
          center={{ lat: geo.lat, lng: geo.lon }}
          style={{ width: '100%', height: '1080px' }}
          level={4}
        >
          <MapMarker position={{ lat: geo.lat, lng: geo.lon }}>
            <Pin>현재 위치</Pin>
          </MapMarker>
        </Map>
        <ButtonCurrentLocation />
      </Box>
    </div>
  );
};

export default HomePage;

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

const ButtonCurrentLocation = styled.button`
  width: 48px;
  height: 48px;
  background-color: white;
  position: absolute;
  left: 16px;
  bottom: 48px;
  z-index: 99;
  cursor: pointer;
`;

const ButtonUpdateStore = styled.button`
  width: 48px;
  height: 48px;
  background-color: white;
  position: absolute;
  left: 16px;
  bottom: 48px;
  z-index: 99;
`;
const Pin = styled.div`
  padding: 12px;
  background-color: white;
  color: 'red';
`;
