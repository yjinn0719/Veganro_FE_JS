import { useEffect, useState } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const markerImage = [
  'https://storage.cloud.google.com/vegan-ro/restaurant.png',
  'https://storage.cloud.google.com/vegan-ro/cafe.png',
  'https://storage.cloud.google.com/vegan-ro/bar.png',
  'https://storage.cloud.google.com/vegan-ro/etc.png',
];

const PlaceMarker = () => {
  const navigate = useNavigate();
  const [relaseMarker, setRelaseMarker] = useState(false);
  const [isVisible, setIsVisible] = useState({
    isVisible: false,
  });

  // 식당 상세 페이지 이동 핸들러
  const clickStoreHandler = (id) => {
    navigate(`/place/${placeid}`);
  };

  useEffect(() => {
    if (!relaseMarker) {
      setRelaseMarker(true);
    }
  }, [relaseMarker]);

  return <>{PlaceMarker}</>;
};

export default PlaceMarker;
