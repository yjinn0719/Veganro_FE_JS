import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { Box, SearchBar, ButtonCurrentLocation, Pin } from '../Home/Home.style';

const { kakao } = window;

export default function Home() {
  // 기본 위치 상태
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  // 카카오 맵 접근, 지도 상태 조작 변수
  const [map, setMap] = useState(null);

  // 현재 사용자 위치 받아오기 (geolocation)
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        },
      );
    } else {
      setState((prev) => ({
        ...prev,
        errMsg: 'geolocation을 사용할 수 없습니다.',
        isLoading: false,
      }));
    }
  }, []);

  const moveLatLng = (data) => {
    const newLatLng = new kakao.maps.LatLng(data.y, data.x);
    map.panTo(newLatLng);
  };

  // todo 클릭한 마커 기준 중심 좌표 이동

  // 현재 위치 이동 버튼
  const relocateToCurrentLocation = () => {
    setMapCenter({ lat: geo.lat, lng: geo.lon });
  };

  // 로딩 시, 화면 표시
  if (state.isLoading) return <div>Loading..</div>;

  return (
    <>
      <Box className="home">
        <SearchBar />
        <Map
          id="map"
          center={state.center}
          style={{ width: '100%', height: '1080px' }}
          level={4}
          onCreate={setMap} // 지도 생성 시 setMap 함수 호출, 지도 객체 업데이트
        >
          <MapMarker position={state.center}>
            <Pin>{state.errMsg ? state.errMsg : '현재 위치'}</Pin>
          </MapMarker>
        </Map>
        <ButtonCurrentLocation onClick={relocateToCurrentLocation} />
      </Box>
    </>
  );
}
