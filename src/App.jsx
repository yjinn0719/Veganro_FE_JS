import React from 'react';
import styled from 'styled-components';
import { RecoilRoot } from 'recoil';
import MyRouter from './routes/index';
import Toast from './hooks/useToast';
import Landing from './components/Landing/Landing';

const AppWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 80px;
  align-items: center;
`;
const AppContainer = styled.div`
  width: 480px;
  height: 100%;
  position: relative;
  border-left: solid 1px ${(props) => props.theme.color.gray[200]};
  border-right: solid 1px ${(props) => props.theme.color.gray[200]};
`;
function App() {
  // 루트 디렉토리의 index.html <script>태그 안에 있던 map api 호출 부분에서 에러 이슈 -> VITE_APP_KAKAO_MAP_KEY 값은 정적 HTML 파일에 직접 삽입 불가 -> jsx 파일 APP에 useEffect 통해 스크립트를 동적으로 로드
  // useEffect(() => {
  //   const initializeMap = () => {
  //     window.kakao.maps.load(() => {
  //       const mapContainer = document.getElementById('map'); // The element where the map will be rendered
  //       const mapOption = {
  //         center: new window.kakao.maps.LatLng(33.450701, 126.570667),
  //         level: 3,
  //       };
  //       new window.kakao.maps.Map(mapContainer, mapOption);
  //     });
  //   };

  //   // If the Kakao object is available, initialize the map
  //   if (window.kakao && window.kakao.maps) {
  //     initializeMap();
  //   } else {
  //     // If not, load the Kakao Maps SDK asynchronously
  //     const script = document.createElement('script');
  //     script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_APP_KAKAO_MAP_KEY}&autoload=false&libraries=services`;
  //     script.async = true;
  //     script.onload = () => initializeMap();
  //     document.head.appendChild(script);
  //   }

  //   // Clean-up function to remove the script from the document
  //   return () => {
  //     const existingScript = document.querySelector(
  //       'script[src^="//dapi.kakao.com"]',
  //     );
  //     if (existingScript) {
  //       existingScript.remove();
  //     }
  //   };
  // }, []);

  return (
    <RecoilRoot>
      <AppWrapper>
        <Landing />
        <AppContainer>
          <MyRouter />
          <Toast />
        </AppContainer>
      </AppWrapper>
    </RecoilRoot>
  );
}

export default App;
