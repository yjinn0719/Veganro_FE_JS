import React, { useState, useEffect } from 'react';
import KakaoMap from '../KakaoMap/KakaoMap';

import SearchBar from '@/components/SearchBar/SearchBar';
import PlaceCategory from '@/components/PlaceCategory/PlaceCategory';
import MenuButton from '@/components/MenuButton/MenuButton';
import {
  Wrapper,
  Box,
  BottomBar,
  RelocateButton,
  ListViewButton,
} from '../Home/Home.style';

import { PLACE_TYPES } from '../../constants';

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

  // 앱 최초 진입, 현재 위치 불러오기
  // 빈 배열 넘김 -> 컴포넌트가 처음 렌더링될 때만 실행
  useEffect(() => {
    getCurrentPosition();
  }, []);

  // 버튼 클릭 시 현재 위치 업데이트
  const handleRelocateClick = () => {
    getCurrentPosition();
  };

  // 카테고리 선택 핸들러
  const handleCategorySelect = (title) => {
    // Add category select logic here
    console.log(`Category selected: ${title}`);
  };

  return (
    <>
      <Wrapper className="home">
        <SearchBar placeholder="‘가게 이름' 또는 ‘주소'를 검색해보세요." />
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
        <BottomBar>
          <RelocateButton
            title="gps"
            className="relocate-button"
            onClick={handleRelocateClick}
          />
          <ListViewButton className="list-view-button" title="리스트뷰" />
          <MenuButton />
        </BottomBar>
      </Wrapper>
    </>
  );
}
