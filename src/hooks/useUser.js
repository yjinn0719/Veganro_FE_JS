import { useQuery } from '@tanstack/react-query';
import {
  getUserData,
  getReviewsByUserId,
  getReportedByUserId,
  getBookmarkedByUserId,
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

export const useGetBookmarkedByUserId = () => {
  return useQuery({
    queryKey: ['getBookmarkedByUserId'],
    queryFn: () => getBookmarkedByUserId(),
    config: {
      retry: false,
    },
  });
};
