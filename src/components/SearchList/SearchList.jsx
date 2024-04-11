import React from 'react';
import {
  CardWrapper,
  TextBox,
  PlaceName,
  DistBox,
  DistanceNavicon,
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
        <DistBox>
          <DistanceNavicon />
          <Distance>{props.distance}</Distance>
        </DistBox>
        <Address>{props.address}</Address>
        <div>{props.tel}</div>
      </TextBox>
    </CardWrapper>
  );
}
