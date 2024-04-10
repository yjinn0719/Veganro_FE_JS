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

export const postReview = async (reviewData) => {
  try {
    const response = await api.post('/reviews', reviewData);
    return response.data.data;
  } catch (error) {
    throw new Error('Error posting review: ' + error.message);
  }
};

const handleError = (error) => {
  if (error.response) {
    // 서버가 응답을 반환했지만 응답 코드가 2xx가 아닌 경우
    throw new Error(error.response.data.message);
  } else if (error.request) {
    // 서버에 요청을 보냈지만 응답을 받지 못한 경우
    throw new Error('서버로부터 응답을 받지 못했습니다.');
  } else {
    // 요청을 보내기 전에 발생한 오류
    throw new Error('요청을 보내는 동안 오류가 발생했습니다.');
  }
};
