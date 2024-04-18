import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchPlaces } from '@/apis/index';
import useCurrentLocation from '@/hooks/useCurrentLocation';
import { getPlacesWithDistance } from '@/apis/index';
import { useRecoilState } from 'recoil';
import {
  initialCategoryState,
  selectedCategoryState,
  selectedMenuTypeState,
} from '@/states/filterState';
import Spinner from '@/components/Spinner/Spinner';
import SearchBar from '@/components/SearchBar/SearchBar';
import PlaceCategory from '@/components/PlaceCategory/PlaceCategory';
import SearchList from '@/components/SearchList/SearchList';
import MapButton from '@/components/MapButton/MapButton';
import MenuButton from '@/components/MenuButton/MenuButton';
import SmallRoundButton from '@/components/SmallRoundButton/SmallRoundButton';
import MapFilterModal from '@/components/MapFilterModal/MapFilterModal';
import Spinner from '@/components/Spinner/Spinner';

import {
  Categories,
  Wrapper,
  SearchNav,
  FilterBar,
  FilterButton,
  ScrollableList,
  MapButtonContainer,
} from './Search.style';

import { PLACE_TYPES } from '../../constants';

export default function Search() {
  const navigate = useNavigate();
  const [places, setPlaces] = useState([]);
  const { location, isLoading, error } = useCurrentLocation(); // 사용자~place 동적 거리계산 상태관리용
  const [searchTerm, setSearchTerm] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);

  //recoil로 옮겨야하는 상태관리값
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [categoriesStatus, setCategoriesStatus] =
    useRecoilState(initialCategoryState);
  const [selectedCategories, setSelectedCategories] = useRecoilState(
    selectedCategoryState,
  );
  const [selectedMenuTypes, setSelectedMenuTypes] = useRecoilState(
    selectedMenuTypeState,
  );
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  useEffect(() => {
    async function loadPlaces() {
      const res = await fetchPlaces();
      setPlaces(res.data.data);
    }
    loadPlaces();
  }, [location, isLoading, selectedCategories, selectedMenuTypes]);

  useEffect(() => {
    if (!isLoading && location.center) {
      getPlacesWithDistance(location.center, fetchPlaces)
        .then((placesWithDistance) => {
          setPlaces(placesWithDistance);
        })
        .catch(console.error);
    }
  }, [location, isLoading, selectedCategories, selectedMenuTypes]);

  // 렌더링 성능 이슈 -> useMemo 사용하면 좋을 것 같다?
  useEffect(() => {
    // 1. searchTerm 필터링
    let results = places.filter(
      (place) =>
        place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        place.address.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    // 2. searchTerm 결과에 category 필터링
    if (selectedCategories.length > 0) {
      results = results.filter((place) =>
        selectedCategories.includes(place.category),
      );
    }

    // 3. menuTypes 필터링
    if (selectedMenuTypes != null) {
      results = results.filter(
        (place) => place.vegan_option == selectedMenuTypes,
      );
    }

    // 4. 거리순 정렬
    results.sort((a, b) => a.distance - b.distance);

    setFilteredPlaces(results);
  }, [places, selectedCategories, selectedMenuTypes, searchTerm]);

  // 카테고리 선택 핸들러
  const handleCategorySelect = (categoryName) => {
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

  // 초기화 핸들러
  const handleFilterReset = () => {
    setCategoriesStatus((prevCategories) =>
      prevCategories.map((category) => ({
        ...category,
        clicked: 0,
      })),
    );

    setSelectedCategories([]);
    setSelectedMenuTypes(null);
    setShowFilterModal(false);
    setIsButtonActive(false);
    sessionStorage.clear();
  };

  // 필터 모달 핸들러
  const handleFilterModal = () => {
    setShowFilterModal(!showFilterModal);
    setIsButtonActive(!isButtonActive);
  };

  const updateMarkers = (menuTypes) => {
    setSelectedMenuTypes(menuTypes);
  };

  if (error) {
    return <div>위치 정보를 가져올 수 없습니다 {error}</div>;
  }

  if (isLoading) return <Spinner />;

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
              {PLACE_TYPES.map((title) => (
                <PlaceCategory
                  className="category-button"
                  key={title}
                  title={title}
                  onClick={() => handleCategorySelect(title)}
                  initialClicked={
                    categoriesStatus.find((category) => category.name === title)
                      ?.clicked
                  }
                />
              ))}
              <FilterButton
                title={isButtonActive ? 'close' : 'filter'}
                onClick={handleFilterModal}
              />
              {showFilterModal && (
                <MapFilterModal
                  updateMarkers={updateMarkers}
                  onClose={setShowFilterModal}
                  setIsButtonActive={setIsButtonActive}
                />
              )}
            </Categories>
            <SmallRoundButton title="refresh" onClick={handleFilterReset} />
          </FilterBar>
        </SearchNav>
        <ScrollableList>
          {places &&
            filteredPlaces.map((place) => (
              <SearchList
                key={place._id}
                img={place.category_img.url.basic_url}
                name={place.name}
                vegan_option={place.vegan_option}
                distance={`${place.distance}km`}
                address={`${place.address} ${place.address_detail}`}
                tel={place.tel}
                onClick={() => navigate(`/place/${place._id}`)}
              />
            ))}
        </ScrollableList>
        <MapButtonContainer>
          <MapButton
            className="map-view-button"
            title="지도에서 다시 찾기"
            onClick={() => navigate('/home')}
          />
        </MapButtonContainer>
        <MenuButton />
      </Wrapper>
    </>
  );
}
