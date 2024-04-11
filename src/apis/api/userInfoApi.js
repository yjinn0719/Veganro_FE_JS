import { api } from '@/apis/index';

export const getUserData = async () => {
  try {
    const response = await api.get('/users/me');
    return response.data.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateUserData = async ({ nickname, tag }) => {
  try {
    const formData = new FormData();

    formData.append('nickname', nickname);
    formData.append('tag', tag);

    const response = await api.put('/users/me', formData);

    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

//reviews/me?pageNumber=number&pageSize=number
export const getReviewsByUserId = async (pageNumber = 1, pageSize = 10) => {
  try {
    const response = await api.get(
      `/reviews?me?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    );
    return response.data.data;
  } catch (error) {
    handleError(error);
  }
};

export const getReportedByUserId = async (pageNumber = 1, pageSize = 10) => {
  try {
    const response = await api.get(
      `/reports/me?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    );
    return response.data.data;
  } catch (error) {
    handleError(error);
  }
};

// /bookmarks/users
export const getBookmarkedByUserId = async () => {
  try {
    const response = await api.get(`/bookmarks/users`);
    return response.data.data;
  } catch (error) {
    handleError(error);
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
