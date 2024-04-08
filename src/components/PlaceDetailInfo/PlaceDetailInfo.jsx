import {
  Container,
  TitleWrapper,
  Title,
  InfoWrapper,
  InfoItem,
  IconWrapper,
  Icon,
  InfoText,
  HoursContainer,
  HourText,
} from './PlaceDetailInfo.styles';
import {
  IoLocationOutline,
  IoCallOutline,
  IoTimeOutline,
  IoGlobeOutline,
} from 'react-icons/io5';

export default function PlaceDetailInfo({
  placeLocation,
  placeNumber,
  placeHours,
  placeURL,
}) {
  return (
    <Container>
      <TitleWrapper>
        <Title>가게 정보</Title>
      </TitleWrapper>
      <InfoWrapper>
        <InfoItem>
          <IconWrapper>
            <IoLocationOutline size="16" />
          </IconWrapper>
          <InfoText>{placeLocation}</InfoText>
        </InfoItem>
        <InfoItem>
          <IconWrapper>
            <IoCallOutline size="13" />
          </IconWrapper>
          <InfoText>{placeNumber}</InfoText>
        </InfoItem>
        <InfoItem>
          <IconWrapper>
            <IoTimeOutline size="15" />
          </IconWrapper>
          <InfoText>영업시간</InfoText>
        </InfoItem>
        <InfoItem>
          <HoursContainer>
            {placeHours.map((hour, index) => (
              <HourText key={index}>{hour}</HourText>
            ))}
          </HoursContainer>
        </InfoItem>
        <InfoItem>
          <IconWrapper>
            <IoGlobeOutline size="15" />
          </IconWrapper>
          <InfoText>{placeURL}</InfoText>
        </InfoItem>
      </InfoWrapper>
    </Container>
  );
}
