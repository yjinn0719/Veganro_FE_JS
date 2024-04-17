import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetUser } from '@/hooks/useUser';
import { usePostAuth } from '../../hooks/useAuth';

const Redirection = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  const postAuth = usePostAuth();
  const { data: userData } = useGetUser();

  useEffect(() => {
    const handlePostAuth = async () => {
      try {
        const authData = await postAuth(code);
        const token = authData.token;
        localStorage.setItem('Authorization', `${token}`);
        // 사용자 데이터가 있을 경우에만 리다이렉션을 수행합니다.
        if (userData) {
          if (userData.nickname !== null) {
            navigate('/');
          } else {
            navigate('/signup');
          }
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    };

    handlePostAuth();
  }, [code, navigate, postAuth, userData]);

  return <div>로그인 중입니다.</div>;
};

export default Redirection;
