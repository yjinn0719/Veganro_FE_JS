import { useQuery } from '@tanstack/react-query';
import { getPlaceData, getBookmarkByPlaceId } from '../apis/api/placeApi';

export const useGetPlace = (placeId) => {
  return useQuery({
    queryKey: ['getPlace', placeId],
    queryFn: () => getPlaceData(placeId),
    config: {
      retry: false,
    },
  });
};

export const useGetBookmarkByPlaceId = (placeId, token) => {
  return useQuery({
    queryKey: ['getBookmarkByPlaceId', placeId],
    queryFn: () => getBookmarkByPlaceId(placeId, token),
    retry: false,
    enabled: !!token,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
