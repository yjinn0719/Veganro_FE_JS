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

function MapFilterModal({ updateMarkers }) {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedMenuTypes, setSelectedMenuTypes] = useState([]);
  const [isSavedActive, setIsSavedActive] = useState(false);

  const handleModalClick = () => {
    setIsClicked(!isClicked);
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

  const handleSaveClick = () => {
    updateMarkers(selectedMenuTypes);
    setIsClicked(false);
    console.log('필터 값 저장', selectedMenuTypes);
  };

  useEffect(() => {
    setIsSavedActive(selectedMenuTypes.length > 0);
  }, [selectedMenuTypes]);

  return (
    <Container onClick={handleModalClick} clicked={isClicked ? 1 : 0}>
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
