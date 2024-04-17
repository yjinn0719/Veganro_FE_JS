import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetUser } from '@/hooks/useUser';
import { usePostAuth } from '../../hooks/useAuth';

const Redirection = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  const [nickname, setNickname] = useState('');
  const { data: authData } = usePostAuth(code);
  const { data: userData } = useGetUser();
  console.log('userData', userData);
  if (userData) {
    setNickname(userData.nickname);
  }
  if (nickname === null) {
    navigate('/signup');
  } else {
    navigate('/');
  }

  return <div>로그인 중입니다.</div>;
};

export default Redirection;
