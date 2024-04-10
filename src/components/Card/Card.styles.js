import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: white;
  border-radius: 4px;
  overflow: hidden;
  border: 1px #efefef solid;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
`;

const GreenBox = styled.div`
  margin: 0 10px 0 0;
  width: 60px;
  height: 60px;
  border-radius: 3.6px;
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
  border: 0.5px #4f8337 solid;
`;

const TextContainer = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;
`;

const NameContainer = styled.div`
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: inline-flex;
`;

const TagContainer = styled.div`
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 4px;
  padding-bottom: 4px;
  background: rgba(79, 131, 55, 0.1);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: flex;
`;

const TagText = styled.div`
  color: #4f8337;
  font-size: 12px;
  font-family: Pretendard;
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
  gap: 2px;
  display: flex;
`;

const DistanceIcon = styled.div`
  width: 12px;
  height: 12px;
  position: relative;
`;

const DistanceOuter = styled.div`
  width: 4.87px;
  height: 4.87px;
  left: 3.37px;
  top: 3.75px;
  position: absolute;
  background: #6e6e6e;
`;

const DistanceInner = styled.div`
  width: 9px;
  height: 9px;
  left: 1.5px;
  top: 1.5px;
  position: absolute;
  border: 0.75px #6e6e6e solid;
`;

const InfoText = styled.div`
  color: #6e6e6e;
  font-size: 12px;
  font-family: Pretendard;
  font-weight: 500;
  word-wrap: break-word;
`;

const LocationText = styled.div`
  color: #4f4f4f;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 500;
  word-wrap: break-word;
`;

const NumberText = styled.div`
  color: #6e6e6e;
  font-size: 12px;
  font-family: Pretendard;
  font-weight: 500;
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
  DistanceIcon,
  DistanceOuter,
  DistanceInner,
  InfoText,
  LocationText,
  NumberText,
  Icon,
};
