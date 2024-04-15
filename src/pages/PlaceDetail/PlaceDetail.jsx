import React from 'react';
import Spinner from '@/components/Spinner/Spinner';
import { useParams } from 'react-router-dom';
import { IoNavigateCircleOutline } from 'react-icons/io5';
import { useGetPlace } from '../../hooks/usePlace';
import Navbar from '@/components/Navbar/Navbar';
import MapComponent from '@/components/PlaceMap/PlaceMap';
import BookMarked from '@/components/Bookmark/Bookmark';
import PlaceDetailInfo from '@/components/PlaceDetailInfo/PlaceDetailInfo';
import Review from '@/components/Review/Review';
import MenuButton from '@/components/MenuButton/MenuButton';
import useCurrentLocation from '@/hooks/useCurrentLocation';
import getDistance from '../../hooks/useDistance';

import {
  MainContainer,
  ContentContainer,
  ImageSection,
  OuterContainer,
  InnerContainer,
  Icon,
  NameContainer,
  Name,
  TagContainer,
  Tag,
  InfoContainer,
  Info,
  DistanceIcon,
  Distance,
  Content,
  ReviewContainer,
  Loading,
  MenuContainer,
} from '@/pages/PlaceDetail/PlaceDetail.styles';

export default function PlaceDetail() {
  const { placeid } = useParams();
  const {
    data: placeData,
    isLoading: placeDataLoading,
    isError: placeDataError,
    error: placeDataErrorMessage,
  } = useGetPlace(placeid);
  const {
    location: userLocation,
    error: userLocationError,
    isLoading: userLocationLoading,
    reloadLocation: getCurrentPosition,
  } = useCurrentLocation();

  if (placeDataLoading || userLocationLoading)
    return (
      <MainContainer>
        <Loading>
          <Spinner />
          <div>Loading...</div>
        </Loading>
      </MainContainer>
    );

  if (placeDataError || userLocationError)
    return (
      <MainContainer>
        <div>Error: {placeDataErrorMessage || userLocationError}</div>
      </MainContainer>
    );

  if (placeData && userLocation) {
    const calculateDistance = getDistance({
      lat1: userLocation.center.lat,
      lon1: userLocation.center.lng,
      lat2: placeData.location.coordinates[1],
      lon2: placeData.location.coordinates[0],
    });

    const distance = calculateDistance / 1000;

    return (
      <MainContainer>
        <Navbar title={placeData.name} icon="null" />
        <ContentContainer>
          <ImageSection>
            <MapComponent address={placeData.address} name={placeData.name} />
            <OuterContainer>
              <Content>
                <InnerContainer>
                  <Icon src={placeData.category_img.url.basic_url} />
                </InnerContainer>
                <ContentContainer>
                  <NameContainer>
                    <Name>{placeData.name}</Name>
                  </NameContainer>
                  <TagContainer>
                    <Tag>{placeData.vegan_option ? '일부 비건' : '비건'}</Tag>
                  </TagContainer>
                  <InfoContainer>
                    <Info>
                      <DistanceIcon>
                        <IoNavigateCircleOutline size="15" />
                      </DistanceIcon>
                      <Distance>{distance}km</Distance>
                    </Info>
                  </InfoContainer>
                </ContentContainer>
              </Content>
              <BookMarked />
            </OuterContainer>
          </ImageSection>
        </ContentContainer>
        <>
          <PlaceDetailInfo
            placeLocation={placeData.address}
            placeNumber={placeData.tel}
            placeHours={placeData.open_times || []}
            placeURL={placeData.sns_url || []}
          />
        </>
        <ReviewContainer>
          <Review address={placeData.address} />
        </ReviewContainer>
        <MenuContainer>
          <MenuButton />
        </MenuContainer>
      </MainContainer>
    );
  }
}
