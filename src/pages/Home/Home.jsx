import React, { useState, useEffect } from 'react';
import KakaoMap from '../KakaoMap/KakaoMap';
import useCurrentLocation from '@/hooks/useCurrentLocation';
import SearchBar from '@/components/SearchBar/SearchBar';
import PlaceCategory from '@/components/PlaceCategory/PlaceCategory';
import MenuButton from '@/components/MenuButton/MenuButton';
import SmallRoundButton from '@/components/SmallRoundButton/SmallRoundButton';
import MapFilterModal from '@/components/MapFilterModal/MapFilterModal';
import {
  Wrapper,
  FilterBar,
  Categories,
  BottomBar,
  RelocateButton,
  ListViewButton,
  FilterButton,
} from '../Home/Home.style';

import { PLACE_TYPES } from '@/constants';

// to 세영님) recoil 상태관리 import 입니다
import { useRecoilState } from 'recoil';
import { selectedCategoryState } from '@/states/filterState';

import { useNavigate } from 'react-router-dom';

// TODO
// 1. '식당'으로 초기값 부여
// 2. 로딩/에러 화면 컴포넌트로 교체
// 3. 필터 모달 보이기 / 필터 적용 마커 렌더링

export default function Home() {
  const { location, error, isLoading, reloadLocation } = useCurrentLocation();

  // 카테고리 상태 객체 배열로 초기화
  const [categoriesStatus, setCategoriesStatus] = useState(() => {
    const initialCategoriesStatus = PLACE_TYPES.map((type) => ({
      name: type,
      clicked: type === '식당',
    }));
    return initialCategoriesStatus;
  });

  const [showFilterModal, setShowFilterModal] = useState(false);

  // to 세영님) recoil 상태관리 읽기 전용으로 추가했습니다
  const [selectedCategories, setSelectedCategories] = useRecoilState(
    selectedCategoryState,
  );

  // 앱 최초 진입, 현재 위치 불러오기
  // 빈 배열 넘김 -> 컴포넌트가 처음 렌더링될 때만 실행
  useEffect(() => {
    reloadLocation(); // 위치 재요청
  }, []);

  // 버튼 클릭 시 현재 위치 업데이트
  const handleRelocateClick = (e) => {
    e.preventDefault();
    reloadLocation(); // 위치 재요청
  };

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

  // to 세영님) SearchBar 활성화시 Search페이지 리디렉션하는 코드입니다.
  const navigate = useNavigate();
  const handleSearchActive = () => {
    navigate('/search');
  };

  return (
    <>
      <Wrapper className="home">
        <SearchBar
          placeholder="‘가게 이름' 또는 ‘주소'를 검색해보세요."
          onActive={handleSearchActive}
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
            <SmallRoundButton title="refresh" onClick={handleCategoryReset} />
          </Categories>
          <FilterButton title="filter" onClick={handleFilterModal} />
          {showFilterModal && <MapFilterModal />}
        </FilterBar>
        {error && (
          <div>
            위치 정보를 가져올 수 없습니다
            <br />
            {error}
          </div>
        )}
        {isLoading ? (
          <div>위치 정보를 가져오는 중..</div>
        ) : (
          <KakaoMap
            centerMove={location.center}
            categoriesStatus={categoriesStatus}
          />
        )}
        <BottomBar>
          <RelocateButton
            title="gps"
            className="relocate-button"
            onClick={handleRelocateClick}
          />
          <ListViewButton className="list-view-button" title="리스트뷰" />
          <MenuButton />
        </BottomBar>
      </Wrapper>
    </>
  );
}
