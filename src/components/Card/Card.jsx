import {
  Container,
  GreenBox,
  TextContainer,
  NameContainer,
  TagContainer,
  TagText,
  InfoContainer,
  InfoItem,
  InfoText,
  LocationText,
  NumberText,
  Icon,
} from './Card.styles';
import { IoNavigateCircle, IoLocation, IoCall } from 'react-icons/io5';

export default function PlaceCard({
  name,
  location,
  number,
  veganOption,
  distance = '0.5km',
  img,
}) {
  return (
    <Container>
      <GreenBox>
        <Icon src={img} />
      </GreenBox>
      <TextContainer>
        <NameContainer>
          <div
            style={{
              color: '#383838',
              fontSize: 18,
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
            <IoNavigateCircle size="14" />
            <InfoText>{distance}km</InfoText>
          </InfoItem>
        </InfoContainer>
        <InfoItem>
          <IoLocation size="14" />
          <LocationText>{location}</LocationText>
        </InfoItem>
        <InfoItem>
          <IoCall size="14" />
          <NumberText>{number}</NumberText>
        </InfoItem>
      </TextContainer>
    </Container>
  );
}
