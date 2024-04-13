import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetPlace } from '@/hooks/usePlace';
import useCurrentLocation from '@/hooks/useCurrentLocation';
import getDistance from '@/hooks/useDistance';

import { IoNavigateCircleOutline } from 'react-icons/io5';
import { VEGAN_MENU_TYPES } from '@/constants';
import {
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
  RedirectButton,
  ArrowIcon,
} from './PlaceInfoModal.style';

function PlaceInfoModal({ markerId }) {
  const navigate = useNavigate();

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
          lon1: userLocation.center.lon,
          lat2: placeData.location.coordinates[1],
          lon2: placeData.location.coordinates[0],
        }) / 1000;
      setDistance(calculatedDistance);
    }
  }, [placeDataLoading, userLocationLoading, placeData, userLocation]);

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
                <DistanceText>{distance}km</DistanceText>
              </Distance>
            </TextBox>
          </InfoBox>
          <RedirectButton onClick={handleRedirect}>
            <ArrowIcon />
          </RedirectButton>
        </Inner>
      </Wrapper>
    )
  );
}

export default PlaceInfoModal;
