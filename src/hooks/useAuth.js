import { postAuth } from '../apis';
import { useQueryClient } from '@tanstack/react-query';

export const usePostAuth = () => {
  const queryClient = useQueryClient();

  const handlePostAuth = async (code) => {
    try {
      const authData = await postAuth(code);
      queryClient.invalidateQueries('auth');
      return authData;
    } catch (error) {
      throw error;
    }
  };

  return handlePostAuth;
};
