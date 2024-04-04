import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 16px;
  padding-bottom: 717px;
  background: #f5f5f5;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 15px 0;
`;

const ContentContainer = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;
`;

const ImageSection = styled.div`
  width: 100%;
  height: 380px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  background: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 18px;
  display: flex;
`;

const Tag = styled.div`
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
`;

const VeganIcon = styled.div`
  width: 12px;
  height: 12px;
  position: relative;
`;

const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const InnerContainer = styled.div`
  margin: 0 10px 0 0;
  width: 54px;
  height: 54px;
  background: #4f8337;
  border-radius: 3.6px;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

const IconContainer = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  left: 4px;
  top: 4px;
  position: absolute;
  background: white;
  border: 0.5px #4f8337 solid;
`;

const NameContainer = styled.div`
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  display: inline-flex;
`;

const Name = styled.div`
  color: #383838;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 600;
  word-wrap: break-word;
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
  display: inline-flex;
`;

const placeTag = styled.div`
  color: #4f8337;
  font-size: 14px;
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

const Info = styled.div`
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

const Distance = styled.div`
  color: #6e6e6e;
  font-size: 12px;
  font-family: Pretendard;
  font-weight: 500;
  word-wrap: break-word;
`;

const placeVeganIcon = styled.div`
  width: 12px;
  height: 12px;
  position: relative;
`;

const VeganTag = styled.div`
  color: #6e6e6e;
  font-size: 12px;
  font-family: Pretendard;
  font-weight: 500;
  word-wrap: break-word;
`;

export {
  MainContainer,
  ContentContainer,
  ImageSection,
  Tag,
  Content,
  VeganIcon,
  OuterContainer,
  InnerContainer,
  IconContainer,
  Icon,
  NameContainer,
  Name,
  TagContainer,
  placeTag,
  InfoContainer,
  Info,
  DistanceIcon,
  Distance,
  placeVeganIcon,
  VeganTag,
};
