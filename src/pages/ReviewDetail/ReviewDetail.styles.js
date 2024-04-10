import styled from 'styled-components';

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

export { ReviewContainer, Content };
