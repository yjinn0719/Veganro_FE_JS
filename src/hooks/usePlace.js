import { useQuery } from '@tanstack/react-query';
import { getPlaceData } from '../apis/services/place';

export const useGetPlace = (placeId) => {
  return useQuery({
    queryKey: ['getPlace', placeId],
    queryFn: () => getPlaceData(placeId),
    config: {
      retry: false,
    },
  });
};
