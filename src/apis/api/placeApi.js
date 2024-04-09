import axios from './axios';

// 장소 리스트(전체 + 필터)
// /places?center=x,y&radius=number&size=number&category=value&search=value
export const fetchPlaces = async (params) => {
  return await axios.get('/places', { params });
};

// 장소 상세 조회
export const fetchPlaceById = async (placeId) => {
  return await axios.get(`/places/${placeId}`);
};

// 장소 등록
export const createPlace = async (placeData) => {
  return await axios.post('/admin/places', placeData);
};

// 장소 수정
export const updatePlace = async (placeId, updateData) => {
  return await axios.put(`/admin/places/${placeId}`, updateData);
};

// 장소 삭제(해당 장소의 리뷰, 북마크도 삭제 되어야 함)
export const deletePlace = async (placeId) => {
  return await axios.delete(`/admin/places/${placeId}`);
};

// 검증된 장소 조회
export const fetchAdminPlaces = async () => {
  return await axios.get('/admin/places');
};
