import React from 'react';
import kakaoLoginImage from '@/assets/icons/kakao_login.png';
import mainLogo from '@/assets/icons/mainLogo.svg';
import { AuthContainer, LogoContainer, LogoContent } from './Auth.styles';

function Auth() {
  const REST_API_KEY = import.meta.env.VITE_APP_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_APP_REDIRECT_URI;
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <AuthContainer>
      <LogoContainer>
        <img src={mainLogo} />
        <LogoContent>지구와 나를 지키는 여정</LogoContent>
      </LogoContainer>

      <img
        src={kakaoLoginImage}
        onClick={loginHandler}
        style={{ width: '380px', padding: '0 50px' }}
      />
    </AuthContainer>
  );
}

export default Auth;
