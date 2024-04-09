import React from 'react';
import { ClipLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';
import { IoNavigateCircleOutline } from 'react-icons/io5';
import { useGetPlace } from '../../hooks/usePlace';
import Navbar from '@/components/Navbar/Navbar';
import MapComponent from '@/components/PlaceMap/PlaceMap';
import BookMarked from '@/components/Bookmark/Bookmark';
import PlaceDetailInfo from '@/components/PlaceDetailInfo/PlaceDetailInfo';
import Review from '@/components/Review/Review';
import {
  MainContainer,
  ContentContainer,
  ImageSection,
  OuterContainer,
  InnerContainer,
  IconContainer,
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
} from '@/pages/PlaceDetail/PlaceDetail.styles';

export default function PlaceDetail() {
  const { placeid } = useParams();
  const { data: placeData, isLoading, isError, error } = useGetPlace(placeid);

  if (isLoading)
    return (
      <MainContainer>
        <Loading>
          <ClipLoader color="#36d7b7" loading={isLoading} size={150} />
          <div>Loading...</div>
        </Loading>
      </MainContainer>
    );
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <MainContainer>
      <Navbar title={placeData?.name} icon="null" />
      <ContentContainer>
        <ImageSection>
          <MapComponent address={placeData?.address} name={placeData?.name} />
          <OuterContainer>
            <Content>
              <InnerContainer>
                <IconContainer>
                  <Icon icon={placeData?.category_img} />
                </IconContainer>
              </InnerContainer>
              <ContentContainer>
                <NameContainer>
                  <Name>{placeData?.name}</Name>
                </NameContainer>
                <TagContainer>
                  <Tag>{placeData?.vegan_option ? '일부 비건' : '비건'}</Tag>
                </TagContainer>
                <InfoContainer>
                  <Info>
                    <DistanceIcon>
                      <IoNavigateCircleOutline size="15" />
                    </DistanceIcon>
                    <Distance>{placeData?.distance || 'N/A'}</Distance>
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
          placeLocation={placeData?.address}
          placeNumber={placeData?.tel}
          placeHours={placeData?.hours || []}
          placeURL={placeData?.sns_url || []}
        />
      </>
      <ReviewContainer>
        <Review address={placeData?.address} />
      </ReviewContainer>
    </MainContainer>
  );
}
