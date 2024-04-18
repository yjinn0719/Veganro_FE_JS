import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const confirmLogout = window.confirm('정말 로그아웃 하시겠습니까?');
    if (confirmLogout) {
      const token = localStorage.getItem('Authorization');
      if (token) {
        localStorage.removeItem('Authorization');
      }
      navigate('/');
    } else {
      navigate('/home');
    }
  }, [navigate]);

  return null;
};

export default Logout;
