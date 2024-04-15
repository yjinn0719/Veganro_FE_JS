import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  top: 40px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 16px;
  background: white;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: inline-flex;
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
}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 1000px;
  width: 95%;
`;

export { ReviewContainer, Content, Container };
