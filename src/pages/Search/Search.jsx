import React, { useState, useEffect } from 'react';
import { fetchPlaces } from '@/apis/api/placeApi';
import { getPlacesWithDistance } from '@/apis/service/distance';
import useCurrentLocation from '@/hooks/useCurrentLocation';

import SearchBar from '@/components/SearchBar/SearchBar';
import PlaceCategory from '@/components/PlaceCategory/PlaceCategory';
import SearchList from '@/components/SearchList/SearchList';
import { Box } from './Search.style';

import { PLACE_TYPES } from '../../constants';

export default function Search() {
  const [places, setPlaces] = useState([]);
  const { location, isLoading, error } = useCurrentLocation(); // 사용자~place 동적 거리계산 상태관리용

  useEffect(() => {
    // 추후 리팩터링 때 try-catch 검증 추가
    async function loadPlaces() {
      // 1. places 데이터 로딩
      const res = await fetchPlaces();
      setPlaces(res.data.data);
    }
    loadPlaces();
  }, []);

  // 2. 사용자~places 거리 계산 service 결과 로딩
  useEffect(() => {
    if (!isLoading && location.center) {
      getPlacesWithDistance(location.center, fetchPlaces)
        .then(setPlaces)
        .catch(console.error);
    }
  }, [location, isLoading]);

  if (error) {
    return <div>위치 정보 로딩 에러ㅜㅜ {error}</div>;
  }

  if (isLoading) {
    return <div>위치 정보 로딩중...</div>;
  }

  return (
    <div>
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
      {places.map((place) => (
        <SearchList
          key={place._id}
          name={place.name}
          distance={''} //초기 임시값
          address={`${place.address} ${place.address_detail}`}
          tel={place.tel}
        />
      ))}
    </div>
  );
}
