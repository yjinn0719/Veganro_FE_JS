import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  top: 48px;
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 48px);
  padding: 16px;
  background: white;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: inline-flex;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ReviewContainer = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  gap: 8px;
  align-items: center;
  background-color: white;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 1000px;
  width: 95%;
`;

export { ReviewContainer, Content, Container };
