import React from 'react';
import styled from 'styled-components';
import MyRouter from './routes/index';

const AppContainer = styled.div`
  width: 100%;
  max-width: 480px;
  height: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <AppContainer>
      <MyRouter />
    </AppContainer>
  );
}

export default App;
