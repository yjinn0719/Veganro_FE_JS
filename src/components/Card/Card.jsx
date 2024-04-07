import React from 'react';
import {
  CardContainer,
  CardContent,
  Thumbnail,
  TextBox,
  Title,
  Distance,
  Address,
  Number,
} from './Card.styles';

function Card({ name, distance, address, number }) {
  return (
    <CardContainer>
      <CardContent>
        <Thumbnail></Thumbnail>
        <TextBox>
          <Title>{name}</Title>
          <Distance>{distance}</Distance>
          <Address>{address}</Address>
          <Number>{number}</Number>
        </TextBox>
      </CardContent>
    </CardContainer>
  );
}

export default Card;
