import React, { useEffect } from 'react';
import Loading from '@/components/Loading/Loading';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { useGetUser } from '@/hooks/useUser';
import { usePostAuth } from '@/hooks/useAuth';

const Redirection = () => {
  const navigate = useNavigate();
  const [searchParams, _] = useSearchParams();
  const authorizationCode = searchParams.get('code');

  const postAuth = usePostAuth();
  const { data, isLoading, isFetching, isError, refetch } = useGetUser();

  if (authorizationCode === '' || authorizationCode === undefined) {
    return navigate('/', { replace: true });
  }

  useEffect(() => {
    if (authorizationCode) {
      postAuth(authorizationCode)
        .then((data) => {
          const { token } = data;
          if (token) {
            localStorage.setItem('Authorization', token);
            refetch();
          } else {
            console.error('토큰을 응답받지 못했습니다.');
          }
        })
        .catch((err) => console.error(err));
    }
  }, [authorizationCode]);

  if (data !== undefined) {
    return data.nickname ? (
      <Navigate to="/home" replace={true} />
    ) : (
      <Navigate to="/signup" replace={true} />
    );
  }

  return (
    <div>
      <Loading />
    </div>
  );
};

export default Redirection;
