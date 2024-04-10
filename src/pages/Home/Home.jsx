import React, { useState, useEffect } from 'react';
import KakaoMap from '../KakaoMap/KakaoMap';

import useCurrentLocation from '@/hooks/useCurrentLocation';

import SearchBar from '@/components/SearchBar/SearchBar';
import PlaceCategory from '@/components/PlaceCategory/PlaceCategory';
import MenuButton from '@/components/MenuButton/MenuButton';
import SmallRoundButton from '@/components/SmallRoundButton/SmallRoundButton';
import {
  Wrapper,
  FilterBar,
  Categories,
  BottomBar,
  RelocateButton,
  ListViewButton,
} from '../Home/Home.style';

import { PLACE_TYPES } from '@/constants';

export default function Home() {
  const { location, error, isLoading, reloadLocation } = useCurrentLocation();

  // 카테고리 상태 객체 배열로 초기화
  const [categoriesStatus, setCategoriesStatus] = useState(
    PLACE_TYPES.map((type) => ({ name: type, clicked: 0 })),
  );
  const [resetCategories, setResetCategories] = useState(false);

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
    setCategoriesStatus((prevState) =>
      prevState.map((category) =>
        category.name === categoryName
          ? { ...category, clicked: !category.clicked }
          : category,
      ),
    );
  };

  // 카테고리 초기화 핸들러
  const handleCategoryReset = () => {
    setCategoriesStatus(
      categoriesStatus.map((category) => ({ ...category, clicked: 0 })),
    );
    setResetCategories((prevState) => !prevState);
  };

  return (
    <>
      <Wrapper className="home">
        <SearchBar placeholder="‘가게 이름' 또는 ‘주소'를 검색해보세요." />
        <FilterBar>
          <Categories className="category-bar">
            {PLACE_TYPES.map((title, index) => (
              <PlaceCategory
                key={index}
                title={title}
                className={
                  categoriesStatus.find((c) => c.name === title).clicked
                    ? 'selected'
                    : ''
                }
                onClick={() => handleCategorySelect(title)}
                reset={resetCategories}
              />
            ))}
            <SmallRoundButton
              title="refresh"
              onClick={() => handleCategoryReset()}
            />
          </Categories>
          <SmallRoundButton title="filter" />
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
