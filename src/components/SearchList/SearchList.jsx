import React from 'react';
import {
  CardWrapper,
  TextBox,
  TitleBox,
  PlaceName,
  VeganMenu,
  DistBox,
  Address,
  Tel,
  Distance,
  CategoryIcon,
  CategoryImg,
} from './SearchList.style';
import { IoNavigateCircleOutline } from 'react-icons/io5';
import { VEGAN_MENU_TYPES } from '@/constants';

export default function SearchList(props) {
  return (
    <CardWrapper onClick={props.onClick}>
      <CategoryIcon>
        <CategoryImg className="category" src={props.img} alt="식당 카테고리" />
      </CategoryIcon>
      <TextBox>
        <TitleBox>
          <PlaceName>{props.name}</PlaceName>
          <VeganMenu>
            {props.vegan_option === true
              ? VEGAN_MENU_TYPES[0]
              : VEGAN_MENU_TYPES[1]}
          </VeganMenu>
        </TitleBox>
        <DistBox>
          <IoNavigateCircleOutline size="12" color="#6e6e6e" />
          <Distance>{props.distance}</Distance>
        </DistBox>
        <Address>{props.address}</Address>
        <Tel>{props.tel}</Tel>
      </TextBox>
    </CardWrapper>
  );
}
