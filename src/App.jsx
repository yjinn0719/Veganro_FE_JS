import React from 'react';
import styled from 'styled-components';
import { RecoilRoot } from 'recoil';
import { useMediaQuery } from 'react-responsive';
import MyRouter from './routes/index';
import Toast from './hooks/useToast';
import Landing from './components/Landing/Landing';

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
`;
const AppContainer = styled.div`
  width: 100%;
  max-width: 480px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  border-left: solid 1px ${(props) => props.theme.color.gray[200]};
  border-right: solid 1px ${(props) => props.theme.color.gray[200]};
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`;
function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)',
  });
  return (
    <RecoilRoot>
      <AppWrapper>
        {isDesktopOrLaptop && <Landing />}
        <AppContainer>
          <MyRouter />
          <Toast isDesktopOrLaptop={isDesktopOrLaptop} />
        </AppContainer>
      </AppWrapper>
    </RecoilRoot>
  );
}

export default App;
