import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './PlaceInfoModal.style';

function PlaceInfoModal(id) {
  const navigate = useNavigate();

  return (
    <>
      <Container>`${id}`</Container>
    </>
  );
}

export default PlaceInfoModal;
