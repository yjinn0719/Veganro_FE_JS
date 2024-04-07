import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
`;

const InnerContainer = styled.div`
  position: relative;
  margin-top: 60px;
  margin-left: 16px;

  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
`;

const TextBox = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100px;
  gap: 12px;
  display: flex;
`;

const SubTextBox = styled.div`
  height: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  display: flex;
`;

const Text = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}px;
  font-family: 'Pretendard';
  font-weight: 600;
  word-wrap: break-word;
`;

const Card = styled.div`
  width: 448px;
  height: 50px;
  padding: 12px;
  background: ${(props) => props.background};
  border-radius: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
`;

const TagContainer = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: flex;
`;

const Tag = styled.div`
  width: ${(props) => props.width}px;
  padding: 12px;
  background: ${(props) => props.background};
  border-radius: 100px;
  border: ${(props) => props.border};
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  display: flex;
  width: 96.55%;
`;

const Button = styled.div`
  flex: 1 1 0;
  height: 50px;
  padding: 12px;
  background: ${(props) => props.background};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: flex;
`;

export {
  Container,
  InnerContainer,
  TextBox,
  SubTextBox,
  Text,
  Card,
  TagContainer,
  Tag,
  ButtonContainer,
  Button,
};
