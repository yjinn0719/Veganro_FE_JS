import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getReviewsByPlaceId,
  postReview,
  deleteReview,
} from '../apis/api/reviewApi';

export const useGetReviewsByPlaceId = (
  placeId,
  pageNumber = 1,
  pageSize = 10,
) => {
  return useQuery({
    queryKey: ['getReviewsByPlaceId', placeId, pageNumber, pageSize],
    queryFn: () => getReviewsByPlaceId(placeId, pageNumber, pageSize),
    config: {
      retry: false,
    },
  });
};

export const usePostReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postReview,
    onSuccess: () => {
      queryClient.invalidateQueries('reviews');
    },
  });
};

export const useDeleteReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteReview,
    onSuccess: () => {
      queryClient.invalidateQueries('reviews');
    },
  });
};
