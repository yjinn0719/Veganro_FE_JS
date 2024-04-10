import React, { useState } from 'react';
import {
  Container,
  Inner,
  Title,
  Tags,
  ButtonBox,
} from './MapFilterModal.style';

import { VEGAN_MENU_TYPES } from '@/constants';

function MapFilterModal() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Container onClick={handleClick} clicked={isClicked ? 1 : 0}>
      <Inner>
        <Title>맞춤 비건 식당을 찾아보세요</Title>
        <ButtonBox>
          {VEGAN_MENU_TYPES.map((type) => (
            <Tags
              key={type}
              title={type}
              className="menu-btn"
              style={{ fontSize: '14px' }}
            />
          ))}
        </ButtonBox>
      </Inner>
    </Container>
  );
}

export default MapFilterModal;
