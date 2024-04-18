import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 16px;
  background: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: inline-flex;
  position: relative;
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
  color: ${(props) => props.theme.color.gray[800]};
  font-size: 16px;
  font-weight: 600;
  word-wrap: break-word;
`;

const InfoWrapper = styled.div`
  align-self: stretch;
  border-radius: 4px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  display: flex;
`;

const InfoItem = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  display: inline-flex;
`;

const IconWrapper = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    fill: ${(props) => props.theme.color.gray[700]};
  }
`;
const InfoText = styled.div`
  flex: 1 1 0;
  color: ${(props) => props.theme.color.gray[800]};
  font-size: 12px;
  word-wrap: break-word;
  font-weight: 500;
  line-height: 16px;
`;
const HoursSummary = styled.summary`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  gap: 12px;
  color: ${(props) => props.theme.color.gray[600]};
  &::after {
    content: '';
    width: 16px;
    height: 16px;
    background: url('/src/assets/icons/ChevronDownIcon.svg') no-repeat;
    background-size: 16px;
    background-position: center;
    transition: all 0.2s ease-in;
    position: absolute;
    right: -20px;
  }
`;
const HoursContainer = styled.div`
  margin: 8px 0 0 24px;
  width: 100%;
  height: 100%;
  padding: 12px;
  border-radius: 4px;
  background: ${(props) => props.theme.color.gray[10]};
  box-sizing: border-box;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
const HourText = styled.div`
  flex: 1 1 0;
  color: ${(props) => props.theme.color.gray[800]};
  font-size: 12px;
  word-wrap: break-word;
  font-weight: 500;
`;
const UrlText = styled.a`
  flex: 1 1 0;
  color: ${(props) => props.theme.color.gray[800]};
  font-size: 12px;
  word-wrap: break-word;
  font-weight: 500;
`;

export {
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
};
