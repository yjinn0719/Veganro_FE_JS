import React, { useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useSetRecoilState, useRecoilValue } from 'recoil';

import { currentPositionState } from '../../store/currentPositionState';
import { Pin } from '../Home/Home.style';

const MOCK_POSITION = [
  {
    id: 'elice-lab',
    title: '앨리스 랩',
    center: {
      lat: 37.5465029,
      lng: 127.065263,
    },
  },
  {
    id: 'starbucks',
    title: '스타벅스 서울웨이브아트센터점',
    center: {
      lat: 37.5187312,
      lng: 127.0067959,
    },
  },
  {
    id: 'tamburins',
    title: '탬버린즈 신사 플래그십스토어',
    center: {
      lat: 37.5206264,
      lng: 127.0220599,
    },
  },
  {
    id: 'ntower',
    title: '남산',
    center: {
      lat: 37.5537586,
      lng: 126.9809696,
    },
  },
  {
    id: 'leeum',
    title: '리움미술관',
    center: {
      lat: 37.5378932,
      lng: 126.9993937,
    },
  },
];

const KakaoMap = ({ centerMove }) => {
  const setCurrentLocation = useSetRecoilState(currentPositionState);
  const currentLocation = useRecoilValue(currentPositionState);

  // 지도 이동 시, 좌표 정보 업데이트
  useEffect(() => {
    if (centerMove?.lat && centerMove?.lng) {
      setCurrentLocation((prev) => ({
        ...prev,
        center: { lat: centerMove.lat, lng: centerMove.lng },
      }));
    }
  }, [centerMove, setCurrentLocation]);

  // 중앙 정렬 핸들러
  const handleCenterChanged = (map) => {
    setCurrentLocation((prev) => ({
      ...prev,
      level: map.getLevel(),
      center: {
        lat: map.getCenter().getLat(),
        lng: map.getCenter().getLng(),
      },
    }));
  };

  return (
    <Map
      id="map"
      style={{ height: '100vh' }}
      center={currentLocation.center}
      level={currentLocation.level || 8}
      isPanto={true}
      onCenterChanged={handleCenterChanged}
    >
      {MOCK_POSITION.map((position, index) => (
        <MapMarker
          key={`${position.id}`}
          position={{ lat: position.center.lat, lng: position.center.lng }}
          title={position.title}
          clickable={true}
        >
          <Pin>{position.title}</Pin>
        </MapMarker>
      ))}
    </Map>
  );
};

export default KakaoMap;
