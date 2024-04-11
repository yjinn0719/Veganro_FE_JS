import api from '@/apis/utils/axiosInstance';

export const createReportPlace = async (collectData) => {
  try {
    const response = await api.post(`/reports`, collectData);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
