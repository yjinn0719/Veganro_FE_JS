import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import { apiClient } from '@/apis/axiosInstance';
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
  distance = '1.2km',

  hours = [
    '월: 11:00~20:00, 브레이크타임: 15:00~16:00',
    '화: 11:00~20:00, 브레이크타임: 15:00~16:00',
    '수: 11:00~20:00, 브레이크타임: 15:00~16:00',
    '목: 11:00~20:00, 브레이크타임: 15:00~16:00',
    '금: 11:00~20:00, 브레이크타임: 15:00~16:00',
    '토: 11:00~20:00, 브레이크타임: 15:00~16:00',
    '일: 휴무',
  ],
}) {
  const [placeData, setPlaceData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get(
          '/api/places/6610e628658638b12ce49ee4',
        );
        setPlaceData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        if (error) {
          // error handling
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.statusText);
        } else {
          console.log(`Error: ${error.message}`);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <MainContainer>
      <Navbar title={placeData && placeData.name} icon="null" />
      <ContentContainer>
        <ImageSection>
          <MapComponent address={placeData && placeData.address} />
          <OuterContainer>
            <Content>
              <InnerContainer>
                <IconContainer>
                  <Icon icon={placeData && placeData.category_img} />
                </IconContainer>
              </InnerContainer>
              <ContentContainer>
                <NameContainer>
                  <Name>{placeData && placeData.name}</Name>
                </NameContainer>
                <TagContainer>
                  <Tag>
                    {placeData && placeData.vegan_option ? '일부 비건' : '비건'}
                  </Tag>
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
          placeLocation={placeData && placeData.address}
          placeNumber={placeData && placeData.tel}
          placeHours={hours}
          placeURL={placeData && placeData.sns_url}
        />
      </>
      <ReviewContainer>
        <Review address={placeData && placeData.address} />
      </ReviewContainer>
    </MainContainer>
  );
}
