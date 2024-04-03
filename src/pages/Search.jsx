import React, { useState, useEffect, useRef } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import SearchList from './SearchResultList'; // 리스트 뷰를 담당하는 컴포넌트
import styled from 'styled-components';

export default function Search() {
  const [results, setResults] = useState([]);
  const [viewType, setViewType] = useState('map');
  const [center, setCenter] = useState({ lat: 33.5563, lng: 126.79581 }); // 현재 위치 불러오기 에러 -> 지도중심 좌표 초기 세팅
  const searchInput = useRef(null);

  // case 1. 카테고리 버튼 셀렉 click
  const handleCategorySearch = async (categoryBtn) => {
    /* 
         1) mongoDB fetch.get 데이터 가져온 후 변수에 저장 
         2) fetchData 필터링 -> ‘category’필드의 string값이 일치하는 데이터들 반복문 찾기
         3) 지도에 마커 표시
         ????
      */
    const fetchData = [];
    const CategorySearchResult = fetchData.filter(
      (place) => place.category === categoryBtn,
    );
    setResults(CategorySearchResult);
  };

  // case 2. 검색어 submit
  const handleTermSearch = async () => {
    const term = searchInput.current.value;

    const fetchData = [];
    const TermSearchResult = fetchData.filter(
      (place) =>
        place.name.includes(term) ||
        place.category.includes(term) ||
        place.road_name.split(' ').includes(term),
    );
    setResults(TermSearchResult);
  };

  // 1~2번 각 case 후의 공통 logic
  useEffect(() => {
    setResults();
  }, [results]);

  return (
    <div>
      <searchBar>
        <input
          ref={searchInput}
          type="text"
          placeholder="현재 위치 json값 들어갈 자리"
        />
        <button>검색</button>
      </searchBar>
      <button onClick={() => handleCategorySearch('식당')}>식당</button>
      <button onClick={() => handleCategorySearch('술집')}>술집</button>
      <button onClick={() => handleCategorySearch('카페')}>카페</button>
      <button onClick={() => handleCategorySearch('기타')}>기타</button>

      {viewType === 'map' && <Map></Map>}
      {viewType === 'list' && <SearchList results={results} />}
    </div>
  );
}

const searchBar = styled.div`
  width: 100%;
  height: 50px;
  padding: 16px;
  box-sizing: border-box;
  position: absolute;
  top: 16px;
  left: 0;
  background-color: white;
  z-index: 99;
`;
