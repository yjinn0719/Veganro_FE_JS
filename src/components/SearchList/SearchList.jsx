import React from 'react';
import {
  CardWrapper,
  TextBox,
  PlaceName,
  Address,
  Distance,
  CategoryIcon,
} from './SearchList.style';

export default function SearchList(props) {
  return (
    <CardWrapper>
      <CategoryIcon /> {/*식당 카테고리 아이콘*/}
      <TextBox>
        <PlaceName>{props.name}</PlaceName>
        <Distance>{props.distance || '거리 정보 없음'}</Distance>
        <Address>{props.address}</Address>
        <div>{props.tel}</div>
      </TextBox>
    </CardWrapper>
  );
}
