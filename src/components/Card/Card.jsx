import {
  Container,
  GreenBox,
  WhiteBox,
  InnerWhiteBox,
  TextContainer,
  NameContainer,
  TagContainer,
  TagText,
  InfoContainer,
  InfoItem,
  DistanceIcon,
  InfoText,
  LocationText,
  NumberText,
} from './Card.styles';
import {
  IoNavigateCircleOutline,
  IoPricetagOutline,
  IoLocationOutline,
  IoCallOutline,
} from 'react-icons/io5';

export default function PlaceCard({
  name = '일뷰',
  location = '어딘가',
  number = '010-999-000',
  veganOption = '비건',
  distance = '1.2km',
}) {
  return (
    <Container>
      <GreenBox>
        <WhiteBox>
          <InnerWhiteBox />
        </WhiteBox>
      </GreenBox>
      <TextContainer>
        <NameContainer>
          <div
            style={{
              color: '#383838',
              fontSize: 18,
              fontFamily: 'Pretendard',
              fontWeight: '600',
              wordWrap: 'break-word',
            }}
          >
            {name}
          </div>
          <TagContainer>
            <TagText>일뷰 메뉴 비건</TagText>
          </TagContainer>
        </NameContainer>
        <InfoContainer>
          <InfoItem>
            <DistanceIcon>
              <IoNavigateCircleOutline size="13" />
            </DistanceIcon>
            <InfoText>{distance}</InfoText>
          </InfoItem>
          <InfoItem>
            <IoPricetagOutline size="13" />
            <InfoText>{veganOption}</InfoText>
          </InfoItem>
        </InfoContainer>
        <InfoItem>
          <IoLocationOutline size="13" />
          <LocationText>{location}</LocationText>
        </InfoItem>
        <InfoItem>
          <IoCallOutline size="13" />
          <NumberText>{number}</NumberText>
        </InfoItem>
      </TextContainer>
    </Container>
  );
}
