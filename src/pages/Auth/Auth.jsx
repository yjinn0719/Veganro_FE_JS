import React from 'react';
import kakaoLoginImage from '@/assets/icons/kakao_login.png';
import mainLogo from '@/assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import {
  AuthContainer,
  Inner,
  LogoContainer,
  LogoContent,
  LoginBtnContainer,
  NoLogin,
  DemoLogin,
} from './Auth.styles';

function Auth() {
  const REST_API_KEY = import.meta.env.VITE_APP_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_APP_REDIRECT_URI;
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const navigate = useNavigate();

  const loginHandler = () => {
    window.location.href = link;
  };

  const handleEmailClick = () => {
    navigate('/emailauth');
  };

  const handleNoLoginClick = () => {
    navigate('/home');
  };

  return (
    <AuthContainer>
      <Inner>
        <LogoContainer>
          <img src={mainLogo} style={{ width: '180px' }} />
          <LogoContent>한 발자국 더 건강한 길로, 비건로</LogoContent>
        </LogoContainer>

        <LoginBtnContainer>
          <img
            src={kakaoLoginImage}
            onClick={loginHandler}
            style={{ width: '280px' }}
          />
          <NoLogin onClick={handleNoLoginClick}>로그인없이 둘러보기</NoLogin>
          <DemoLogin onClick={handleEmailClick}>데모용</DemoLogin>
        </LoginBtnContainer>
      </Inner>
    </AuthContainer>
  );
}

export default Auth;
