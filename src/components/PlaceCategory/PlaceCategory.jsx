import React, { useState, useEffect } from 'react';
import { PlaceCategoryBtn, PlaceCategoryTitle } from './PlaceCategory.styles';
import GrassIcon from '@/assets/icons/GrassIcon.svg';
import CafeIcon from '@/assets/icons/CafeIcon.svg';
import WineIcon from '@/assets/icons/WineIcon.svg';
import FishIcon from '@/assets/icons/FishIcon.svg';

function PlaceCategory({ title, onClick, initialClicked }) {
  const [isClicked, setIsClicked] = useState();

  useEffect(() => {
    setIsClicked(initialClicked);
  }, [initialClicked]);

  const handleClicked = () => {
    setIsClicked(!isClicked);
    onClick(title);
  };

  const renderIcon = (title, clicked) => {
    switch (title) {
      case '식당':
        return (
          <img
            src={GrassIcon}
            alt={title}
            className={clicked ? 'clicked' : ''}
          />
        );
      case '카페':
        return (
          <img
            src={CafeIcon}
            alt={title}
            className={clicked ? 'clicked' : ''}
          />
        );
      case '술집':
        return (
          <img
            src={WineIcon}
            alt={title}
            className={clicked ? 'clicked' : ''}
          />
        );
      case '마켓':
        return (
          <img
            src={FishIcon}
            alt={title}
            className={clicked ? 'clicked' : ''}
          />
        );
    }
  };

  return (
    <PlaceCategoryBtn
      onClick={handleClicked}
      clicked={isClicked ? 1 : 0}
      title={title}
    >
      {renderIcon(title, isClicked)}
      <PlaceCategoryTitle clicked={isClicked ? 1 : 0}>
        {title}
      </PlaceCategoryTitle>
    </PlaceCategoryBtn>
  );
}

export default PlaceCategory;
