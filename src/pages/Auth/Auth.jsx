import React from 'react';
import kakaoLoginImage from '../../assets/icons/kakao_login_medium_wide.png';
import logo_03 from '../../assets/icons/logo_03.svg';
import { AuthContainer, LogoContainer, LogoContent } from './Auth.styles';

function Auth() {
  const REST_API_KEY = 'b3bc79737b4fcbc77096caf5a631f774';
  const REDIRECT_URI = 'http://localhost:4000/auth/kakao/callback';
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <AuthContainer>
      <LogoContainer>
        <img src={logo_03} />
        <LogoContent>지구와 나를 지키는 여정</LogoContent>
      </LogoContainer>

      <img src={kakaoLoginImage} onClick={loginHandler} />
    </AuthContainer>
  );
}

export default Auth;
