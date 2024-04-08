import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IoNavigateCircleOutline } from 'react-icons/io5';
import { fetchPlaceData } from '@/apis/services/place';

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
  const params = useParams();
  const placeId = params.placeid;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPlaceData(placeId);
        setPlaceData(data);
        console.log(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [placeId]);

  return (
    <MainContainer>
      <Navbar title={placeData && placeData.name} icon="null" />
      <ContentContainer>
        <ImageSection>
          <MapComponent
            address={placeData && placeData.address}
            name={placeData && placeData.name}
          />
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
                      <IoNavigateCircleOutline size="15" />
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
