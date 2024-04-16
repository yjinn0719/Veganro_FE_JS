import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isModalOpenState } from '@/states/placeModalState';
import { useGetPlace } from '@/hooks/usePlace';
import useCurrentLocation from '@/hooks/useCurrentLocation';
import getDistance from '@/hooks/useDistance';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { IoNavigateCircleOutline } from 'react-icons/io5';
import { VEGAN_MENU_TYPES } from '@/constants';
import {
  ModalWrapper,
  Wrapper,
  Inner,
  InfoBox,
  Thumbsnail,
  PlaceTypeIcon,
  TextBox,
  Title,
  MenuTag,
  Distance,
  DistanceIcon,
  DistanceText,
  ButtonWrapper,
  RedirectButton,
  RedirectButtonText,
  ArrowIcon,
  CloseButton,
} from './PlaceInfoModal.style';

function PlaceInfoModal({ markerId }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);

  const {
    data: placeData,
    isLoading: placeDataLoading,
    isError: placeDataError,
    error: placeDataErrorMessage,
  } = useGetPlace(markerId);
  const {
    location: userLocation,
    error: userLocationError,
    isLoading: userLocationLoading,
  } = useCurrentLocation();

  const [distance, setDistance] = useState(null);

  useEffect(() => {
    if (
      !placeDataLoading &&
      !userLocationLoading &&
      placeData &&
      userLocation
    ) {
      const calculatedDistance =
        getDistance({
          lat1: userLocation.center.lat,
          lon1: userLocation.center.lng,
          lat2: placeData.location.coordinates[1],
          lon2: placeData.location.coordinates[0],
        }) / 1000;
      setDistance(calculatedDistance);
    }
  }, [placeDataLoading, userLocationLoading, placeData, userLocation]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (placeDataLoading || userLocationLoading) {
    return <div>Loading...</div>;
  }
  if (placeDataError || userLocationError) {
    return (
      <div>
        Error loading data: {placeDataErrorMessage || userLocationError}
      </div>
    );
  }
  if (!placeData || !userLocation) {
    return <div>Missing data for rendering this component.</div>;
  }

  // 식당 상세 페이지 이동
  const handleRedirect = () => {
    navigate(`/place/${markerId}`);
  };

  return (
    placeData &&
    userLocation && (
      <>
        <ModalWrapper>
          <Wrapper>
            <Inner>
              <InfoBox>
                <Thumbsnail>
                  <PlaceTypeIcon src={placeData.category_img.url.basic_url} />
                </Thumbsnail>
                <TextBox>
                  <Title>{placeData.name}</Title>
                  <MenuTag>
                    {placeData.vegan_option
                      ? VEGAN_MENU_TYPES[0]
                      : VEGAN_MENU_TYPES[1]}
                  </MenuTag>
                  <Distance>
                    <DistanceIcon>
                      <IoNavigateCircleOutline size="15" />
                    </DistanceIcon>
                    <DistanceText>{distance} km</DistanceText>
                  </Distance>
                </TextBox>
              </InfoBox>
              <ButtonWrapper>
                <RedirectButton onClick={handleRedirect}>
                  <ArrowIcon />
                </RedirectButton>
                <RedirectButtonText>더 보기</RedirectButtonText>
              </ButtonWrapper>
            </Inner>
          </Wrapper>
          <CloseButton onClick={closeModal}>
            <CloseRoundedIcon
              sx={{
                color: '#383838',
                width: '24px',
                height: '24px',
              }}
            />
          </CloseButton>
        </ModalWrapper>
      </>
    )
  );
}

export default PlaceInfoModal;
