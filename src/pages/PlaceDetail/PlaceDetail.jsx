import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import axios from 'axios';

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
  name,
  address,
  distance,
  number,
  tagOption,
  icon,
  hours,
  url,
}) {
  const [placeData, setPlaceData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          '/api/places/6610e451658638b12ce49ed6',
          { withCredentials: true },
        );
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching place data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <MainContainer>
      <Navbar title={name} icon="null" />
      <ContentContainer>
        <ImageSection>
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
