import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBox from '@/components/InputBox/InputBox';
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import { postEmailAuth } from '@/apis/api/authApi';
import mainLogo from '@/assets/images/logo.png';
import {
  Wrapper,
  Inner,
  LogoContainer,
  LogoContent,
  InputBoxContainer,
  BackButton,
} from './EmailAuth.styles';

function EmailAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isButtonEnabled = email.length > 0 && password.length > 0;

  const navigate = useNavigate();

  const EmailAuthData = () => {
    return {
      email: email,
      password: password,
    };
  };

  const handleSubmit = async () => {
    const data = EmailAuthData();
    try {
      const result = await postEmailAuth(data);
      navigate('/home');
    } catch (error) {
      console.error(error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <img src={mainLogo} style={{ width: '180px' }} />
          <LogoContent>한 발자국 더 건강한 길로, 비건로</LogoContent>
        </LogoContainer>
        <InputBoxContainer>
          <InputBox
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></InputBox>
          <InputBox
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></InputBox>
          <PrimaryButton
            title="로그인하기"
            isEnabled={isButtonEnabled}
            onClick={handleSubmit}
          ></PrimaryButton>
          <BackButton onClick={handleBack}>{'← 돌아가기'}</BackButton>
        </InputBoxContainer>
      </Inner>
    </Wrapper>
  );
}

export default EmailAuth;
