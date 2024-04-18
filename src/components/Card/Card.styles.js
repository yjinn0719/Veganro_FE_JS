import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 16px 12px;
  background: white;
  border-radius: 4px;
  overflow: hidden;
  border: solid 1px ${(props) => props.theme.color.gray[100]};
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
`;

const GreenBox = styled.div`
  margin: 0 10px 0 0;
  width: 60px;
  height: 60px;
  border-radius: 4px;
  align-items: center;
  overflow: hidden;
  display: flex;
`;
const Icon = styled.img`
  width: 54px;
  height: 54px;
  left: 4px;
  top: 4px;
  position: relative;
  background: white;
`;
const WhiteBox = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
`;

const InnerWhiteBox = styled.div`
  width: 24px;
  height: 24px;
  left: 4px;
  top: 4px;
  position: absolute;
  background: white;
  border: solid 1px ${(props) => props.theme.color.green[500]};
`;

const TextContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

const NameContainer = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

const TagContainer = styled.div`
  padding: 4px 6px;
  background: rgba(79, 131, 55, 0.1);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: flex;
`;

const TagText = styled.div`
  color: ${(props) => props.theme.color.green[500]};
  font-size: 12px;
  font-weight: 600;
  word-wrap: break-word;
`;

const InfoContainer = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  gap: 6px;
  display: inline-flex;
`;

const InfoItem = styled.div`
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  display: flex;
  svg {
    color: ${(props) => props.theme.color.gray[600]};
  }
`;

const DistanceOuter = styled.div`
  width: 5px;
  height: 5px;
  left: 4px;
  top: 4px;
  position: absolute;
  background: color: ${(props) => props.theme.color.gray[600]};
`;

const DistanceInner = styled.div`
  width: 10px;
  height: 10px;
  left: 2px;
  top: 2px;
  position: absolute;
  border: solid 1px ${(props) => props.theme.color.gray[600]};
`;
const InfoText = styled.div`
  color: ${(props) => props.theme.color.gray[600]};
  font-size: 14px;
  word-wrap: break-word;
`;
const LocationText = styled.div`
  color: ${(props) => props.theme.color.gray[600]};
  font-size: 14px;
  word-wrap: break-word;
`;
const NumberText = styled.div`
  color: ${(props) => props.theme.color.gray[600]};
  font-size: 14px;
  word-wrap: break-word;
`;

export {
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
  DistanceOuter,
  DistanceInner,
  InfoText,
  LocationText,
  NumberText,
  Icon,
};
