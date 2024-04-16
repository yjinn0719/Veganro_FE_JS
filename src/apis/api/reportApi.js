import api from '@/apis/utils/axiosInstance';

export const createReportPlace = async (AddPlaceData) => {
  try {
    const response = await api.post(`/reports`, AddPlaceData);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
