import styled from 'styled-components';

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

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  background: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: inline-flex;
`;

const TitleWrapper = styled.div`
  align-self: stretch;
  padding-bottom: 6px;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: inline-flex;
`;

const Title = styled.div`
  color: #1f1f1f;
  font-size: 16px;
  font-family: 'Pretendard';
  font-weight: 600;
  word-wrap: break-word;
`;

const InfoWrapper = styled.div`
  align-self: stretch;
  height: 100px;
  border-radius: 4px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: flex;
`;

const InfoItem = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: inline-flex;
`;

const IconWrapper = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  border: 1px #8f8f8f solid;
`;

const InfoText = styled.div`
  flex: 1 1 0;
  color: #1f1f1f;
  font-size: 12px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;
