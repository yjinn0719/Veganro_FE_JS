import React from 'react';
import Navbar from '@/components/Navbar';
import MapComponent from '@/components/PlaceMap/PlaceMap';
import BookMarked from '@/components/Bookmarked';
import PlaceDetailInfo from '@/components/PlaceDetailInfo';
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
  VeganIcon,
  VeganTag,
  Content,
  ReviewContainer,
} from '@/pages/PlaceDetail/PlaceDetail.styles';

export default function PlaceDetail({
  name = '가게 이름',
  address = '서울 성동구 아차산로17길 48',
  distance = '500m',
  number = '02-1234-5678',
  tagOption = '일부 비건',
  tag = '비건',
  icon = 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_js_official_icon_130509.png',
  hours = '10:00 - 21:00',
  url = 'https://www.google.com',
}) {
  return (
    <MainContainer>
      <Navbar title={name} />
      <ContentContainer>
        <ImageSection>
          <MapComponent address={address} />
          <OuterContainer>
            <Content>
              <InnerContainer>
                <IconContainer>
                  <Icon icon={icon} />
                </IconContainer>
              </InnerContainer>
              <ContentContainer>
                <NameContainer>
                  <Name>{name}</Name>
                </NameContainer>
                <TagContainer>
                  <Tag>{tagOption}</Tag>
                </TagContainer>
                <InfoContainer>
                  <Info>
                    <DistanceIcon>
                      <div
                        style={{
                          width: '4.87px',
                          height: '4.87px',
                          left: '3.37px',
                          top: '3.75px',
                          position: 'absolute',
                          background: '#6e6e6e',
                        }}
                      ></div>
                      <div
                        style={{
                          width: '9px',
                          height: '9px',
                          left: '1.50px',
                          top: '1.50px',
                          position: 'absolute',
                          border: '0.75px #6e6e6e solid',
                        }}
                      ></div>
                    </DistanceIcon>
                    <Distance>{distance}</Distance>
                  </Info>
                  <Info>
                    <VeganIcon>
                      <div
                        style={{
                          width: '9.75px',
                          height: '9.75px',
                          left: '1.13px',
                          top: '1.12px',
                          position: 'absolute',
                          border: '0.75px #6e6e6e solid',
                        }}
                      ></div>
                      <div
                        style={{
                          width: '1.50px',
                          height: '1.50px',
                          left: '8.25px',
                          top: '2.25px',
                          position: 'absolute',
                          background: '#6e6e6e',
                        }}
                      ></div>
                    </VeganIcon>
                    <VeganTag>{tag}</VeganTag>
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
          placeLocation={address}
          placeNumber={number}
          placeHours={hours}
          placeURL={url}
        />
      </>
      <ReviewContainer>
        <Review address={address} />
      </ReviewContainer>
    </MainContainer>
  );
}
