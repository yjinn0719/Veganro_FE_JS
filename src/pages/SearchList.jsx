import React from 'react';
import styled from 'styled-components';

export default function SearchResultList({ results }) {
  // 스크롤뷰의 목록 형태 결과 view page
  return (
    <List>
      {results.map((place) => {
        <div>
          <span>{place.name}</span>
          <span>{`거리 계산값`}</span>
          <span>{place.all_veg}</span>
          <span>{place.address}</span>
          <span>{place.tel}</span>
        </div>;
      })}
    </List>
  );
}
