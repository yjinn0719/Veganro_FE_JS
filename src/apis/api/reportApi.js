import api from '@/apis/utils/axiosInstance';
import { notify } from '../../hooks/useToast';

export const createReportPlace = async (AddPlaceData) => {
  try {
    const response = await api.post(`/reports`, AddPlaceData);
    notify('success', '장소가 제보되었습니다.');
    return response.data;
  } catch (error) {
    notify('error', '장소 제보에 실패하였습니다.');
    console.error(error);
  }
};
