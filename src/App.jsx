import React from 'react';
import styled from 'styled-components';
import Home from './pages/Home';

const AppContainer = styled.div`
  width: 480px;
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Home />
    </AppContainer>
  );
}

export default App;
