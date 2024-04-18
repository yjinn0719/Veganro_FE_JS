import {
  Container,
  GreenBox,
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
  Icon,
} from './Card.styles';
import {
  IoNavigateCircleOutline,
  IoLocationOutline,
  IoCallOutline,
} from 'react-icons/io5';

export default function PlaceCard({
  name,
  location,
  number,
  veganOption,
  distance = '0.5km',
  img,
  onClick,
}) {
  return (
    <Container onClick={onClick}>
      <GreenBox>
        <Icon src={img} />
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
            <TagText>{veganOption}</TagText>
          </TagContainer>
        </NameContainer>
        <InfoContainer>
          <InfoItem>
            <DistanceIcon>
              <IoNavigateCircleOutline size="13" />
            </DistanceIcon>
            <InfoText>{distance}km</InfoText>
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
