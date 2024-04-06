import React, { useState, useEffect } from 'react';
import KakaoMap from '../KakaoMap/KakaoMap';

import SearchBar from '@/components/SearchBar/SearchBar';
import PlaceCategory from '@/components/PlaceCategory/PlaceCategory';
import { Wrapper, Box, RelocateButton } from '../Home/Home.style';

const PLACE_TYPES = ['식당', '카페', '술집', '기타'];

export default function Home() {
  const [location, setLocation] = useState({});

  // 현재 위치 받아오기
  const getCurrentPosition = () => {
    const { geolocation } = navigator;

    if (geolocation) {
      geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({
            center: {
              lat: latitude,
              lng: longitude,
            },
            isLoading: false,
          });
        },
        (err) => {
          setLocation({
            errMsg: err.message,
            isLoading: false,
          });
        },
      );
    } else {
      setLocation({
        ...location,
        errMsg: '현재 위치를 불러올 수 없습니다.',
        isLoading: false,
      });
    }
    return {
      currentLocation: location,
    };
  };

  // 버튼 클릭 시 현재 위치 업데이트
  const handleRelocateClick = () => {
    getCurrentPosition();
  };

  // 앱 최초 진입, 현재 위치 불러오기
  // 빈 배열 넘김 -> 컴포넌트가 처음 렌더링될 때만 실행
  useEffect(() => {
    getCurrentPosition();
  }, []);

  return (
    <>
      <Wrapper className="home">
        <SearchBar placeholder="서울특별시 성동구 성수2가제3동 광나루로6길 49" />
        <Box className="category-bar">
          {PLACE_TYPES.map((title, index) => (
            <PlaceCategory
              key={index}
              title={title}
              onClick={() => handleCategorySelect(title)}
            />
          ))}
        </Box>
        <KakaoMap centerMove={location.center} />
        <RelocateButton
          type="gps"
          className="button-relocate"
          onClick={handleRelocateClick}
        />
      </Wrapper>
    </>
  );
}
