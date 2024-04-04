import React, { useState } from 'react';
import styled from 'styled-components';
import {
  CafeOutline,
  FishOutline,
  WineOutline,
  LeafOutline,
} from 'react-ionicons';

function PlaceCategory(props) {
  const [IsTagClicked, setIsTagClicked] = useState(false);

  const handleClicked = () => {
    setIsTagClicked(!IsTagClicked);
  };

  const renderIcon = (title, clicked) => {
    const color = clicked ? '#FFFFFF' : '#383838';

    switch (title) {
      case '식당':
        return <LeafOutline color={color} height="18px" width="18px" />;
      case '카페':
        return <CafeOutline color={color} height="18px" width="18px" />;
      case '술집':
        return <WineOutline color={color} height="18px" width="18px" />;
      case '기타':
        return <FishOutline color={color} height="18px" width="18px" />;
    }
  };

  return (
    <PlaceCategoryBtn
      onClick={handleClicked}
      clicked={IsTagClicked}
      title={props.title}
    >
      {renderIcon(props.title, IsTagClicked)}
      <PlaceCategoryTitle clicked={IsTagClicked}>
        {props.title}
      </PlaceCategoryTitle>
    </PlaceCategoryBtn>
  );
}

export default PlaceCategory;

const getBackgroundColor = (clicked, title, theme) => {
  if (!clicked) return theme.color.white;
  switch (title) {
    case '식당':
      return theme.color.green[500];
    case '카페':
      return theme.color.beige[500];
    case '술집':
      return theme.color.burgundy[500];
    case '기타':
      return theme.color.skyblue[500];
  }
};

const PlaceCategoryBtn = styled.button`
  display: inline-flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 4px;
  border: 1px solid
    ${(props) =>
      props.clicked ? props.theme.color.white : props.theme.color.gray[800]};
  background: ${(props) =>
    getBackgroundColor(props.clicked, props.title, props.theme)};
  box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.12);
`;

const PlaceCategoryTitle = styled.p`
  color: ${(props) =>
    props.clicked ? props.theme.color.white : props.theme.color.gray[800]};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
