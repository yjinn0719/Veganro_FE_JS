import React, { useState } from 'react';
import styled from 'styled-components';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import WineBarOutlinedIcon from '@mui/icons-material/WineBarOutlined';
import SetMealOutlinedIcon from '@mui/icons-material/SetMealOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';

function PlaceCategory(props) {
  const [IsTagClicked, setIsTagClicked] = useState(false);

  const handleClicked = () => {
    setIsTagClicked(!IsTagClicked);
  };

  const renderIcon = (title, clicked) => {
    const color = clicked ? '#FFFFFF' : '#383838';

    switch (title) {
      case '식당':
        return (
          <GrassOutlinedIcon
            sx={{ color: { color }, width: '24px', height: '24px' }}
          />
        );
      case '카페':
        return (
          <LocalCafeOutlinedIcon
            sx={{ color: { color }, width: '24px', height: '24px' }}
          />
        );
      case '술집':
        return (
          <WineBarOutlinedIcon
            sx={{ color: { color }, width: '24px', height: '24px' }}
          />
        );
      case '기타':
        return (
          <SetMealOutlinedIcon
            sx={{ color: { color }, width: '24px', height: '24px' }}
          />
        );
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
