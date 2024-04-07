import styled from 'styled-components';

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

export {
  Container,
  TitleWrapper,
  Title,
  InfoWrapper,
  InfoItem,
  IconWrapper,
  Icon,
  InfoText,
};
