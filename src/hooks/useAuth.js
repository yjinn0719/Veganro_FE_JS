import { postAuth } from '../apis';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePostAuth = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postAuth,
    onSuccess: () => {
      queryClient.invalidateQueries('auth');
    },
  });
};
