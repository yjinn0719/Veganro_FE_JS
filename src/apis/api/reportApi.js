import api from '@/apis/utils/axiosInstance';
import { notify } from '../../hooks/useToast';

export const createReportPlace = async (AddPlaceData) => {
  try {
    const response = await api.post(`/reports`, AddPlaceData);
    notify('success', '장소가 제보되었습니다.');
    return response.data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        notify('error', '로그인이 되어있는지 확인해주세요.');
      } else {
        notify('error', '장소 제보에 실패하였습니다.');
      }
    } else {
      notify('error', '네트워크 문제 또는 기타 에러가 발생하였습니다.');
    }
    console.error(error);
    return null;
  }
};
