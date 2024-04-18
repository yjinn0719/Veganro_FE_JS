import {
  Container,
  TitleWrapper,
  Title,
  InfoWrapper,
  InfoItem,
  IconWrapper,
  InfoText,
  HoursSummary,
  HoursContainer,
  HourText,
  UrlText,
} from './PlaceDetailInfo.styles';
import { IoLocation, IoCall, IoTime, IoGlobe } from 'react-icons/io5';

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
            <IoLocation size="16" />
          </IconWrapper>
          <InfoText>{placeLocation}</InfoText>
        </InfoItem>
        <InfoItem>
          <IconWrapper>
            <IoCall size="16" />
          </IconWrapper>
          <InfoText>{placeNumber}</InfoText>
        </InfoItem>
        <InfoItem>
          <details>
            <HoursSummary>
              <IconWrapper>
                <IoTime size="16" />
              </IconWrapper>
              <InfoText>영업시간</InfoText>
            </HoursSummary>
            <HoursContainer>
              {placeHours.map((hour, index) => (
                <HourText key={index}>{hour}</HourText>
              ))}
            </HoursContainer>
          </details>
        </InfoItem>
        <InfoItem>
          <IconWrapper>
            <IoGlobe size="16" />
          </IconWrapper>
          {placeURL && placeURL.length > 0 ? (
            <UrlText href={placeURL} target="_blank" rel="noopener noreferrer">
              Visit Website
            </UrlText>
          ) : (
            <InfoText>---</InfoText>
          )}
        </InfoItem>
      </InfoWrapper>
    </Container>
  );
}
