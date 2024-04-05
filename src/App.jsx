import styled from 'styled-components';
import SearchBar from './components/SearchBar';
// import MyRouter from './routes/index';
const AppContainer = styled.div`
  width: 100%;
  max-width: 480px;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
`;
function App() {
  return (
    <AppContainer>
      {/* <MyRouter /> */}
      <SearchBar />
    </AppContainer>
  );
}

export default App;
