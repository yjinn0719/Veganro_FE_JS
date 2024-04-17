import React from 'react';
import {
  CardWrapper,
  TextBox,
  TitleBox,
  PlaceName,
  VeganMenu,
  DistBox,
  Address,
  Distance,
  CategoryIcon,
  CategoryImg,
} from './SearchList.style';
import { IoNavigateCircleOutline } from 'react-icons/io5';

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
            {props.vegan_option === true ? '전체 메뉴 비건' : '일부 메뉴 비건'}
          </VeganMenu>
        </TitleBox>
        <DistBox>
          <IoNavigateCircleOutline size="12" color="#6e6e6e" />
          <Distance>{props.distance}</Distance>
        </DistBox>
        <Address>{props.address}</Address>
        <div>{props.tel}</div>
      </TextBox>
    </CardWrapper>
  );
}
