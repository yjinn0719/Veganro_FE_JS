import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetUser } from '@/hooks/useUser';
import { usePostAuth } from '@/hooks/useAuth';

const Redirection = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  const postAuth = usePostAuth();
  const {
    data: userData,
    isLoading: userLoading,
    refetch: refetchUser,
  } = useGetUser();

  useEffect(() => {
    const handlePostAuth = async () => {
      try {
        if (code) {
          const authData = await postAuth(code);
          if (authData && authData.token) {
            localStorage.setItem('Authorization', authData.token);
            refetchUser();
          }
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    };

    handlePostAuth();
  }, [code, postAuth, refetchUser]);

  useEffect(() => {
    if (!userLoading && userData) {
      if (userData.nickname) {
        navigate('/');
      } else {
        navigate('/signup');
      }
    }
  }, [userLoading, userData, navigate]);

  return <div>로그인 중입니다.</div>;
};

export default Redirection;
