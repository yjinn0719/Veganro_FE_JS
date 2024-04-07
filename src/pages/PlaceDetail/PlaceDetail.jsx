import React from 'react';
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
      <Navbar title={name} icon="null" />
      <ContentContainer>
        <ImageSection>
          <MapComponent address={address} name={name} />
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
