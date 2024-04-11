import React, { useState, useEffect } from 'react';
import { fetchPlaces } from '@/apis/index';
import useCurrentLocation from '@/hooks/useCurrentLocation';
import { getPlacesWithDistance } from '@/apis/index';

import SearchBar from '@/components/SearchBar/SearchBar';
import PlaceCategory from '@/components/PlaceCategory/PlaceCategory';
import SearchList from '@/components/SearchList/SearchList';
import { Box, Wrapper, SearchNav } from './Search.style';

import { PLACE_TYPES } from '../../constants';

export default function Search() {
  const [places, setPlaces] = useState([]);
  const { location, isLoading, error } = useCurrentLocation(); // 사용자~place 동적 거리계산 상태관리용
  const [showFilterModal, setShowFilterModal] = useState(false); //recoil로 옮겨야하는 상태관리값

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
        .then((placesWithDistance) => {
          setPlaces(placesWithDistance);
        })
        .catch(console.error);
    }
  }, [location, isLoading]);

  // 카테고리 초기화 핸들러
  const handleCategoryReset = () => {
    setCategoriesStatus((prevCategories) =>
      prevCategories.map((category) => ({
        ...category,
        clicked: 0,
      })),
    );
  };

  // 필터 모달 핸들러
  const handleFilterModal = () => {
    setShowFilterModal(!showFilterModal);
    console.log('필터 모달');
  };

  if (error) {
    return <div>위치 정보를 가져올 수 없습니다 {error}</div>;
  }

  if (isLoading) {
    return <div>위치 정보를 가져오는 중..</div>;
  }

  return (
    <>
      <Wrapper className="search">
        <SearchNav>
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
        </SearchNav>
        <div>
          {places &&
            places.map((place) => (
              <SearchList
                key={place._id}
                name={place.name}
                distance={`${place.distance}km`}
                address={`${place.address} ${place.address_detail}`}
                tel={place.tel}
              />
            ))}
        </div>
      </Wrapper>
    </>
  );
}
