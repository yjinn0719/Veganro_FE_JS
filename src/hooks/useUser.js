import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from '@tanstack/react-query';
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

export const useGetReviewsByUserId = (pageSize = 10) => {
  return useInfiniteQuery({
    queryKey: ['getReviewsByUserId'],
    queryFn: ({ pageParam }) => getReviewsByUserId(pageParam, pageSize),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });
};

export const useGetReportedByUserId = (pageSize = 10) => {
  return useInfiniteQuery({
    queryKey: ['getReportedByUserId'],
    queryFn: ({ pageParam }) => getReportedByUserId(pageParam, pageSize),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });
};

export const useGetBookmarkedByUserId = (pageSize = 10) => {
  return useInfiniteQuery({
    queryKey: ['getBookmarkedByUserId'],
    queryFn: ({ pageParam }) => getBookmarkedByUserId(pageParam, pageSize),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });
};

export const useGetBookmarked = (pageNumber = 1, pageSize = 10) => {
  return useQuery({
    queryKey: ['getBookmarked', pageNumber, pageSize],
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
