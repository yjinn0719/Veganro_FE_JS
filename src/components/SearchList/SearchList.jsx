import React from 'react';
import {
  CardWrapper,
  TextBox,
  PlaceName,
  Address,
  Distance,
  CategoryIcon,
} from './SearchList.style';

export default function SearchResultList({ results }) {
  return (
    <CardWrapper>
      <CategoryIcon /> {/*식당 카테고리 아이콘*/}
      <TextBox>
        <PlaceName>{name}</PlaceName>
        <Distance>{distance}</Distance>
        <Address>{address}</Address>
        <div>{tel}</div>
      </TextBox>
    </CardWrapper>
  );
}
