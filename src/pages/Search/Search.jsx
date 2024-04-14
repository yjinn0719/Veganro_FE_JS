import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchPlaces } from '@/apis/index';
import useCurrentLocation from '@/hooks/useCurrentLocation';
import { getPlacesWithDistance } from '@/apis/index';

import { useRecoilState } from 'recoil';
import { selectedCategoryState } from '@/states/filterState';

import SearchBar from '@/components/SearchBar/SearchBar';
import PlaceCategory from '@/components/PlaceCategory/PlaceCategory';
import SearchList from '@/components/SearchList/SearchList';
import MenuButton from '@/components/MenuButton/MenuButton';
import SmallRoundButton from '@/components/SmallRoundButton/SmallRoundButton';
import MapFilterModal from '@/components/MapFilterModal/MapFilterModal';

import {
  Categories,
  Wrapper,
  SearchNav,
  FilterBar,
  FilterButton,
  ScrollableList,
  BottomBar,
  MapViewButton,
} from './Search.style';

import { PLACE_TYPES } from '../../constants';

export default function Search() {
  const [places, setPlaces] = useState([]);
  const { location, isLoading, error } = useCurrentLocation(); // 사용자~place 동적 거리계산 상태관리용
  const [searchTerm, setSearchTerm] = useState('');

  //recoil로 옮겨야하는 상태관리값
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [categoriesStatus, setCategoriesStatus] = useState([]);
  const [selectedCategories, setSelectedCategories] = useRecoilState(
    selectedCategoryState,
  );

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

  // 검색어 필터링
  const filteredPlaces = searchTerm
    ? places.filter(
        (place) =>
          place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          place.address.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : places;

  // 유저의 현재 위치 기준, 가까운 순 정렬
  const sortedPlaces = [...filteredPlaces].sort(
    (a, b) => a.distance - b.distance,
  );

  // 카테고리 선택 핸들러
  const handleCategorySelect = (categoryName) => {
    // to 세영님) categorySelect에 recoil 도입 수정 했습니다
    setSelectedCategories((prevSelected) => {
      const isSelected = prevSelected.includes(categoryName);
      return isSelected
        ? prevSelected.filter((name) => name !== categoryName) // clicked X -> 배열 제거
        : [...prevSelected, categoryName]; // clicked O -> 배열 추가
    });

    setCategoriesStatus((prevCategories) =>
      prevCategories.map((category) => ({
        ...category,
        clicked:
          category.name === categoryName ? !category.clicked : category.clicked,
      })),
    );
  };

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

  const navigate = useNavigate();

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
          <SearchBar
            placeholder="‘가게 이름' 또는 ‘주소'를 검색해보세요."
            value={searchTerm}
            onSearchChange={setSearchTerm}
          />
          <FilterBar>
            <Categories className="category-bar">
              {PLACE_TYPES.map((title, index) => (
                <PlaceCategory
                  key={index}
                  title={title}
                  onClick={() => handleCategorySelect(title)}
                  initialClicked={
                    categoriesStatus.find((category) => category.name === title)
                      ?.clicked
                  }
                />
              ))}
              <SmallRoundButton title="refresh" onClick={handleCategoryReset} />
            </Categories>
            <FilterButton title="filter" onClick={handleFilterModal} />
            {showFilterModal && <MapFilterModal />}
          </FilterBar>
        </SearchNav>
        <ScrollableList>
          {places &&
            sortedPlaces.map((place) => (
              <SearchList
                key={place._id}
                name={place.name}
                distance={`${place.distance}km`}
                address={`${place.address} ${place.address_detail}`}
                tel={place.tel}
              />
            ))}
        </ScrollableList>
        <BottomBar>
          <MapViewButton
            className="map-view-button"
            title="지도에서 다시 찾기"
            onClick={() => navigate('/')}
          />
          {/* <MenuButton /> */}
        </BottomBar>
      </Wrapper>
    </>
  );
}
