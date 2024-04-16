import React from 'react';
import {
  CardWrapper,
  TextBox,
  TitleBox,
  PlaceName,
  VeganMenu,
  DistBox,
  DistanceNavicon,
  Address,
  Distance,
  CategoryIcon,
  CategoryImg,
} from './SearchList.style';

import { VEGAN_MENU_TYPES } from '@/constants';

export default function SearchList(props) {
  return (
    <CardWrapper>
      <CategoryIcon>
        <CategoryImg className="category" src={props.img} alt="식당 카테고리" />
      </CategoryIcon>
      <TextBox>
        <TitleBox>
          <PlaceName>{props.name}</PlaceName>
          <VeganMenu>
            {props.vegan_option === true ? '전체 메뉴 비건' : '일부 메뉴 비건'}
          </VeganMenu>
        </TitleBox>
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
