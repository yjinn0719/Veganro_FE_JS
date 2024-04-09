import { useQuery } from '@tanstack/react-query';
import { getPlaceData } from '../apis/api/placeApi';

export const useGetPlace = (placeId) => {
  return useQuery({
    queryKey: ['getPlace', placeId],
    queryFn: () => getPlaceData(placeId),
    config: {
      retry: false,
    },
  });
};
