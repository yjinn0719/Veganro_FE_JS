import React, { useState, useEffect } from 'react';
import {
  Container,
  Inner,
  Title,
  ButtonBox,
  SaveButton,
  SaveButtonTxt,
} from './MapFilterModal.style';
import { MenuTagBtn, MenuTagContent } from '../MenuTag/MenuTag.styles';

import { VEGAN_MENU_TYPES } from '@/constants';

function MapFilterModal({ updateMarkers, onClose }) {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedMenuTypes, setSelectedMenuTypes] = useState([]);
  const [isSavedActive, setIsSavedActive] = useState(false);

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsClicked(!isClicked);
    }
  };

  const handleMenuTagClick = (type) => {
    setSelectedMenuTypes((prevState) => {
      if (prevState.includes(type)) {
        return prevState.filter((item) => item !== type);
      } else {
        return [...prevState, type];
      }
    });
  };

  const handleSaveClick = (e) => {
    e.stopPropagation();
    const isFullVegan = selectedMenuTypes.includes(VEGAN_MENU_TYPES[0]);
    const isPartialVegan = selectedMenuTypes.includes(VEGAN_MENU_TYPES[1]);
    const veganOption = isFullVegan ? true : isPartialVegan ? false : null;
    updateMarkers(veganOption);
    onClose(false);
  };

  useEffect(() => {
    setIsSavedActive(selectedMenuTypes.length > 0);
  }, [selectedMenuTypes]);

  return (
    <Container onClick={handleModalClick}>
      <Inner>
        <Title>맞춤 비건 식당을 찾아보세요</Title>
        <ButtonBox>
          {VEGAN_MENU_TYPES.map((type) => (
            <MenuTagBtn
              key={type}
              title={type}
              onClick={() => handleMenuTagClick(type)}
              $clicked={selectedMenuTypes.includes(type)}
            >
              <MenuTagContent
                style={{
                  fontSize: '14px',
                }}
                $clicked={selectedMenuTypes.includes(type)}
              >
                {type}
              </MenuTagContent>
            </MenuTagBtn>
          ))}
        </ButtonBox>
        <SaveButton
          color={isSavedActive ? 'green' : 'gray'}
          disabled={!isSavedActive}
          onClick={handleSaveClick}
        >
          <SaveButtonTxt>저장하기</SaveButtonTxt>
        </SaveButton>
      </Inner>
    </Container>
  );
}

export default MapFilterModal;
