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

function Card(props) {
  return (
    <CardContainer>
      <CardContent>
        <Thumbnail></Thumbnail>
        <TextBox>
          <Title>{props.name}</Title>
          <Distance>{props.distance}</Distance>
          <Address>{props.address}</Address>
          <Number>{props.number}</Number>
        </TextBox>
      </CardContent>
    </CardContainer>
  );
}

export default Card;
