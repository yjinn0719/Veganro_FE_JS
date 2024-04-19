import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { notify } from '../../hooks/useToast'; // notify 함수를 임포트합니다.

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('Authorization');
    if (!token) {
      notify('error', '로그아웃하실 수 없습니다. 로그인 먼저 시도해주세요.');
      navigate('/');
    } else {
      if (window.confirm('정말 로그아웃 하시겠습니까?')) {
        localStorage.removeItem('Authorization');
        navigate('/');
      } else {
        navigate('/home');
      }
    }
  }, [navigate]);

  return null;
};

export default Logout;
