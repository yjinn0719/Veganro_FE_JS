import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getUserData,
  getReviewsByUserId,
  getReportedByUserId,
  getBookmarkedByUserId,
  updateUserData,
  postBookmark,
  deleteBookmark,
} from '../apis/api/userInfoApi';

export const useGetUser = (userId) => {
  return useQuery({
    queryKey: ['getUser', userId],
    queryFn: () => getUserData(userId),
    config: {
      retry: false,
    },
  });
};

export const useUpdateUser = () => {
  return useMutation({ mutationFn: updateUserData });
};

export const useGetReviewsByUserId = (pageNumber = 1, pageSize = 10) => {
  return useQuery({
    queryKey: ['getReviewsByUserId', pageNumber, pageSize],
    queryFn: () => getReviewsByUserId(pageNumber, pageSize),
    config: {
      retry: false,
    },
  });
};

export const useGetReportedByUserId = (pageNumber = 1, pageSize = 10) => {
  return useQuery({
    queryKey: ['getReportedByUserId', pageNumber, pageSize],
    queryFn: () => getReportedByUserId(pageNumber, pageSize),
    config: {
      retry: false,
    },
  });
};

export const useGetBookmarkedByUserId = (pageNumber = 1, pageSize = 10) => {
  return useQuery({
    queryKey: ['getBookmarkedByUserId', pageNumber, pageSize],
    queryFn: () => getBookmarkedByUserId(pageNumber, pageSize),
    config: {
      retry: false,
    },
  });
};

export const usePostBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postBookmark,
    onSuccess: () => {
      queryClient.invalidateQueries('bookmarks');
    },
  });
};
export const useDeleteBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBookmark,
    onSuccess: () => {
      queryClient.invalidateQueries('bookmarks');
    },
  });
};
