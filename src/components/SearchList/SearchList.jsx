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
      <CategoryIcon src={props.category_img} alt="Category Icon" />
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
