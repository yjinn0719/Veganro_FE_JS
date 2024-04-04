import styled from 'styled-components';
import PlaceCategory from './components/PlaceCategory';
// import MyRouter from './routes/index';

const AppContainer = styled.div`
  width: 100%;
  max-width: 480px;
  height: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <AppContainer>
      <PlaceCategory title="식당"></PlaceCategory>
      <PlaceCategory title="카페"></PlaceCategory>
      <PlaceCategory title="술집"></PlaceCategory>
      <PlaceCategory title="기타"></PlaceCategory>
      {/* <MyRouter /> */}
    </AppContainer>
  );
}

export default App;
