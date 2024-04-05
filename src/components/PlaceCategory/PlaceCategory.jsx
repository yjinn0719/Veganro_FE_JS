import React, { useState } from 'react';
import { PlaceCategoryBtn, PlaceCategoryTitle } from './PlaceCategory.styles';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import WineBarOutlinedIcon from '@mui/icons-material/WineBarOutlined';
import SetMealOutlinedIcon from '@mui/icons-material/SetMealOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';

function PlaceCategory(props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClicked = () => {
    setIsClicked(!isClicked);
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
      clicked={isClicked ? 1 : 0}
      title={props.title}
    >
      {renderIcon(props.title, isClicked)}
      <PlaceCategoryTitle clicked={isClicked ? 1 : 0}>
        {props.title}
      </PlaceCategoryTitle>
    </PlaceCategoryBtn>
  );
}

export default PlaceCategory;
