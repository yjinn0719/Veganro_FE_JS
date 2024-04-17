import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.color.gray[50]};
  flex-direction: column;
  align-items: center;
  display: flex;
  overflow: hidden;
  position: relative;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 16px 0;
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 48px);
  position: absolute;
  top: 48px;
  overflow-y: scroll;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ContentContainer = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: flex;
`;

const ImageSection = styled.div`
  width: 100%;
  padding: 0 16px 16px 16px;
  background: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 18px;
  display: flex;
`;

const Tag = styled.div`
  padding: 4px 6px;
  box-sizing: border-box;
  color: ${(props) => props.theme.color.green[500]};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 12px;
  display: flex;
`;

const VeganIcon = styled.div`
  width: 12px;
  height: 12px;
  position: relative;
`;

const OuterContainer = styled.div`
  width: 100%;
`;

const InnerContainer = styled.div`
  margin: 0 20px 0 0;
  width: 60px;
  height: 60px;
  border-radius: 4px;
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

const NameContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Name = styled.div`
  color: #383838;
  font-size: 18px;
  font-weight: 600;
  word-wrap: break-word;
`;

const TagContainer = styled.div`
  padding: 4px 5px;
  background: rgba(79, 131, 55, 0.1);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const placeTag = styled.div`
  color: ${(props) => props.theme.color.green[500]};
  font-size: 14px;
  font-weight: 600;
  word-wrap: break-word;
`;

const InfoContainer = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  gap: 6px;
  display: flex;
`;

const Info = styled.div`
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
  display: flex;
`;

const DistanceIcon = styled.div`
  width: 15px;
  height: 15px;
  position: relative;
`;

const Distance = styled.div`
  color: #6e6e6e;
  font-size: 12px;
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
  font-weight: 500;
  word-wrap: break-word;
`;

const ReviewContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white;
`;

const Loading = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export {
  MainContainer,
  ContentWrapper,
  ContentContainer,
  ImageSection,
  Tag,
  Content,
  VeganIcon,
  OuterContainer,
  InnerContainer,
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
  ReviewContainer,
  Loading,
};
