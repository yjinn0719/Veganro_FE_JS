import {
  Container,
  TitleWrapper,
  Title,
  InfoWrapper,
  InfoItem,
  IconWrapper,
  Icon,
  InfoText,
} from './PlaceDetailInfo.styles';

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
            <Icon
              style={{
                width: '9px',
                height: '13px',
                left: '3.50px',
                top: '1.50px',
              }}
            />
            <Icon
              style={{
                width: '3px',
                height: '3px',
                left: '6.50px',
                top: '4.50px',
              }}
            />
          </IconWrapper>
          <InfoText>{placeLocation}</InfoText>
        </InfoItem>
        <InfoItem>
          <IconWrapper>
            <Icon
              style={{
                width: '13px',
                height: '13px',
                left: '1.50px',
                top: '1.50px',
              }}
            />
          </IconWrapper>
          <InfoText>{placeNumber}</InfoText>
        </InfoItem>
        <InfoItem>
          <IconWrapper>
            <Icon
              style={{ width: '12px', height: '12px', left: '2px', top: '2px' }}
            />
            <Icon
              style={{
                width: '3px',
                height: '4.50px',
                left: '8px',
                top: '4px',
              }}
            />
          </IconWrapper>
          <InfoText>{placeHours}</InfoText>
        </InfoItem>
        <InfoItem>
          <IconWrapper>
            <Icon
              style={{
                width: '13px',
                height: '13px',
                left: '1.50px',
                top: '1.50px',
              }}
            />
            <Icon
              style={{
                width: '7.04px',
                height: '13px',
                left: '4.48px',
                top: '1.50px',
              }}
            />
            <Icon
              style={{
                width: '8.67px',
                height: '8.67px',
                left: '3.67px',
                top: '3.67px',
              }}
            />
            <Icon
              style={{
                width: '13px',
                height: '13px',
                left: '1.50px',
                top: '1.50px',
              }}
            />
          </IconWrapper>
          <InfoText>{placeURL}</InfoText>
        </InfoItem>
      </InfoWrapper>
    </Container>
  );
}
