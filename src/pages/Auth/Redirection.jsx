import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Redirection = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    console.log('Current URL:', window.location.href); // 현재 URL 전체 출력
    console.log('Code:', code);
    axios
      .post(
        `https://veganro-backend.vercel.app/api/auth/kakao/login`,
        {
          code: code,
        },
        {
          headers: {
            'Content-Type': 'application/json', // 콘텐트 타입을 JSON으로 명시
          },
        },
      )
      .then((response) => {
        console.log(response.data);

        localStorage.setItem('Authorization', `${response.data.data.token}`);

        navigate('/signup');
      })
      .catch((error) => {
        console.error('Error during login:', error);
        alert('로그인 중 문제가 발생했습니다. 관리자에게 문의하세요.');
      });
  }, [navigate, code]);

  return <div>로그인 중입니다.</div>;
};

export default Redirection;
