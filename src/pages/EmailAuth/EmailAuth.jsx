import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBox from '@/components/InputBox/InputBox';
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import { postEmailAuth } from '@/apis/api/authApi';
import { Wrapper, InputBoxContainer } from './EmailAuth.styles';

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

  return (
    <Wrapper>
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
      </InputBoxContainer>
    </Wrapper>
  );
}

export default EmailAuth;
