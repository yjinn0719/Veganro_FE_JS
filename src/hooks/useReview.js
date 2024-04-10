import { useQuery } from '@tanstack/react-query';
import { getReviewsByPlaceId } from '../apis/api/reviewApi';

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
