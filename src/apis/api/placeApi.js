import api from '@/apis/utils/axiosInstance';

// 장소 리스트(전체 + 필터)
// /places?center=x,y&radius=number&size=number&category=value&search=value
export const fetchPlaces = async (params) => {
  try {
    return await api.get('/places', { params });
  } catch (e) {
    console.log('apis/api에서 에러', e);
  }
};

export const getAllPlaces = async () => {
  try {
    const response = await api.get('/places');
    return response.data.data;
  } catch (error) {
    handleError(error);
  }
};

// 장소 상세 조회
export const getPlaceData = async (placeId) => {
  try {
    const response = await api.get(`/places/${placeId}`);
    return response.data.data;
  } catch (error) {
    handleError(error);
  }
};

export const getBookmarkByPlaceId = async (placeId, token) => {
  try {
    const response = await api.get(`/bookmarks/check?placeId=${placeId}`);
    return response.data.data;
  } catch (error) {
    handleError(error);
  }
};

// 장소 등록
export const createPlace = async (placeData) => {
  return await api.post('/admin/places', placeData);
};

// 장소 수정
export const updatePlace = async (placeId, updateData) => {
  return await api.put(`/admin/places/${placeId}`, updateData);
};

// 장소 삭제(해당 장소의 리뷰, 북마크도 삭제 되어야 함)
export const deletePlace = async (placeId) => {
  return await api.delete(`/admin/places/${placeId}`);
};

// 검증된 장소 조회
export const fetchAdminPlaces = async () => {
  return await api.get('/admin/places');
};

export const handleError = (error) => {
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
