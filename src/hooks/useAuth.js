import { postAuth } from '../apis';
import { useQueryClient } from '@tanstack/react-query';

export const usePostAuth = () => {
  const queryClient = useQueryClient();

  const handlePostAuth = async (code) => {
    try {
      const authData = await postAuth(code);
      queryClient.invalidateQueries('auth'); // API 호출이 성공한 경우 쿼리를 갱신합니다.
      return authData; // API 호출 결과를 반환합니다.
    } catch (error) {
      console.error('Error during login:', error);
      throw error; // 오류가 발생한 경우 해당 오류를 다시 던집니다.
    }
  };

  return handlePostAuth; // 변이(mutate)를 만들지 않고 API 호출을 수행하는 함수를 반환합니다.
};
