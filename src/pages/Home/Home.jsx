import React, { useState, useEffect } from 'react';

import KakaoMap from '../KakaoMap/KakaoMap';
import SearchBar from '@/components/SearchBar/SearchBar';
import { Wrapper, ButtonRelocate } from '../Home/Home.style';

export default function Home() {
  // 위치 중앙 정렬
  const [centerMove, setCenterMove] = useState({
    center: {
      lat: 37.5465029,
      lng: 127.065263,
    },
    isLoading: false,
    errMsg: '',
  });

  // 현재 위치 받아오는 함수
  const getCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenterMove({
            ...centerMove,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          });
        },
        (err) => {
          setCenterMove({
            ...centerMove,
            errMsg: err.message,
            isLoading: false,
          });
        },
      );
    } else {
      setCenterMove({
        ...centerMove,
        errMsg: '현재 위치를 불러올 수 없습니다.',
        isLoading: false,
      });
    }
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
        <KakaoMap centerMove={centerMove.center} />
        <ButtonRelocate
          className="button-relocate"
          onClick={handleRelocateClick}
        >
          현위치
        </ButtonRelocate>
      </Wrapper>
    </>
  );
}
