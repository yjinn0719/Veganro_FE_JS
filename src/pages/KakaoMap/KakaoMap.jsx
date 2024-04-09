import React, { useState, useRef, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { Pin } from '../Home/Home.style';

const MOCK_POSITION = [];

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
