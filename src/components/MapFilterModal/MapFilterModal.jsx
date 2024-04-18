import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
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
import { selectedMenuTypeState } from '@/states/filterState.js';

function MapFilterModal({ updateMarkers, onClose, setIsButtonActive }) {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedMenuTypes, setSelectedMenuTypes] = useState([]);
  const [isSavedActive, setIsSavedActive] = useState(false);
  const [menuTypes, setMenuTypes] = useRecoilState(selectedMenuTypeState);

  useEffect(() => {
    if (menuTypes !== null) {
      if (menuTypes) {
        setSelectedMenuTypes('전체 채식 메뉴');
      } else {
        setSelectedMenuTypes('일부 채식 메뉴');
      }
    }
  }, [menuTypes]);

  useEffect(() => {
    setIsSavedActive(selectedMenuTypes.length > 0);
  }, [selectedMenuTypes]);

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsClicked(!isClicked);
    }
  };

  const handleMenuTagClick = (type) => {
    setSelectedMenuTypes([type]);
  };

  const handleSaveClick = (e) => {
    e.stopPropagation();
    const isFullVegan = selectedMenuTypes.includes(VEGAN_MENU_TYPES[0]);
    const isPartialVegan = selectedMenuTypes.includes(VEGAN_MENU_TYPES[1]);
    const veganOption = isFullVegan ? true : isPartialVegan ? false : null;
    updateMarkers(veganOption);
    // sessionStorage.setItem(
    //   'selectedMenuTypes',
    //   JSON.stringify(selectedMenuTypes),
    //   // selectedMenuTypes.includes(VEGAN_MENU_TYPES[0]) ? true : false,
    // );
    onClose(false);
    setIsButtonActive(false);
  };

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
