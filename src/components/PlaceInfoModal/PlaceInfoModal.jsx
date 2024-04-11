import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, RedirectButton } from './PlaceInfoModal.style';

function PlaceInfoModal({ markId }) {
  const navigate = useNavigate();

  const handleRedirect = () => {};

  return (
    <>
      <Container>
        {markId}
        <RedirectButton onClick={handleRedirect} />
      </Container>
    </>
  );
}

export default PlaceInfoModal;
