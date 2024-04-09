import React, { useState, useRef, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { Pin } from '../Home/Home.style';

const MOCK_POSITION = [
  //   {
  //     id: 'elice-lab',
  //     title: '앨리스 랩',
  //     category: '식당',
  //     center: {
  //       lat: 37.5465029,
  //       lng: 127.065263,
  //     },
  //   },
  //   {
  //     id: 'starbucks',
  //     title: '스타벅스 서울웨이브아트센터점',
  //     category: '카페',
  //     center: {
  //       lat: 37.5187312,
  //       lng: 127.0067959,
  //     },
  //   },
  //   {
  //     id: 'tamburins',
  //     title: '탬버린즈 신사 플래그십스토어',
  //     category: '술집',
  //     center: {
  //       lat: 37.5206264,
  //       lng: 127.0220599,
  //     },
  //   },
  //   {
  //     id: 'ntower',
  //     title: '남산',
  //     category: '기타',
  //     center: {
  //       lat: 37.5537586,
  //       lng: 126.9809696,
  //     },
  //   },
  //   {
  //     id: 'leeum',
  //     title: '리움미술관',
  //     category: '식당',
  //     center: {
  //       lat: 37.5378932,
  //       lng: 126.9993937,
  //     },
  //   },
];

const KakaoMap = ({ centerMove }) => {
  const [currentLocation, setCurrentLocation] = useState({
    level: 4,
    center: {
      lat: 37.5465029,
      lng: 127.065263,
    },
  });
  const prevCenterRef = useRef(null);

  /*현재 위치 이동, 중앙 정렬*/
  useEffect(() => {
    if (centerMove) {
      setCurrentLocation((prev) => ({
        ...prev,
        center: { lat: centerMove.lat, lng: centerMove.lng },
      }));
    }
  }, [centerMove]);

  /*현재 위치 갱신 시, 이전 좌표 정보 업데이트*/
  useEffect(() => {
    if (currentLocation.center) {
      prevCenterRef.current = currentLocation.center;
    }
  }, [currentLocation]);

  return (
    <Map
      id="map"
      style={{ height: '100vh' }}
      center={currentLocation.center}
      level={currentLocation.level || 4}
      isPanto={true}
    >
      {/* 다중 마커 */}
      {MOCK_POSITION.map((place) => (
        <MapMarker
          key={`${place.id}`}
          position={{ lat: place.center.lat, lng: place.center.lng }}
          title={place.title}
          category={place.category}
          clickable={true}
        >
          <Pin>{place.title}</Pin>
        </MapMarker>
      ))}
      {
        <MapMarker
          position={currentLocation.center}
          title="Current Location"
          clickable={false}
        />
      }
    </Map>
  );
};

export default KakaoMap;
