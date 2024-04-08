import { useQuery } from 'react-query';
import { getPlaceData } from '../apis/services/place';

export const useGetPlace = (placeId) => {
  return useQuery(['getPlace', placeId], () => getPlaceData(placeId), {
    retry: false,
  });
};
