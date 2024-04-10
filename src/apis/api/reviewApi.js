import { api } from '@/apis/utils/axiosInstance';

//https://veganro-backend.vercel.app/api/reviews?placeId=6610e830658638b12ce49ef2&pageNumber=1r&pageSize=10

export const getReviewsByPlaceId = async (
  placeId,
  pageNumber = 1,
  pageSize = 10,
) => {
  try {
    const response = await api.get(
      `/reviews?placeId=${placeId}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
    );
    return response.data.data;
  } catch (error) {
    handleError(error);
  }
};
