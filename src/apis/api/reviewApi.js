import api from '@/apis/utils/axiosInstance';
import { notify } from '../../hooks/useToast';

//https://veganro-backend.vercel.app/api/reviews?placeId=6610e830658638b12ce49ef2&pageNumber=1r&pageSize=10

export const getReviewsByPlaceId = async (
  placeId,
  pageNumber = 1,
  pageSize,
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
export const getMyReviews = async (placeId, token) => {
  try {
    if (token) {
      const response = await api.get(`/reviews/check?placeId=${placeId}`);
      return response.data.data;
    } else {
      return null;
    }
  } catch (error) {
    handleError(error);
  }
};
export const postReview = async (reviewData) => {
  try {
    const response = await api.post('/reviews', reviewData);
    notify('success', '리뷰가 등록되었습니다.');
    return response.data.data;
  } catch (error) {
    notify('error', '로그인이 필요합니다.');
    throw new Error('Error posting review: ' + error.message);
  }
};

export const updateReview = async ({ reviewId, content }) => {
  try {
    const formData = new FormData();

    formData.append('content', content);

    const response = await api.patch(`/reviews/${reviewId}`, formData);

    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteReview = async (reviewId) => {
  try {
    const response = await api.delete(`/reviews/${reviewId}`);
    return response.data.data;
  } catch (error) {
    throw new Error('Error deleting review: ' + error.message);
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
