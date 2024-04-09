import React, { useState, useEffect } from 'react';
import { fetchPlaces } from '@/apis/api/placeApi';

import SearchBar from '@/components/SearchBar/SearchBar';
import PlaceCategory from '@/components/PlaceCategory/PlaceCategory';
import SearchList from '@/components/SearchList/SearchList';
import { Box } from './Search.style';

import { PLACE_TYPES } from '../../constants';

export default function Search() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // 추후 리팩터링 때 try-catch 검증 추가
    async function loadPlaces() {
      const res = await fetchPlaces();
      setPlaces(res.data.data);
    }
    loadPlaces();
  }, []);

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
          distance={`${'거리 로직 아직 미구현'}`}
          address={`${place.address} ${place.address_detail}`}
          tel={place.tel}
        />
      ))}
    </div>
  );
}
