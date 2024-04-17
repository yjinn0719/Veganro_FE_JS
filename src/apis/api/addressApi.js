import axios from 'axios';

export const getAddressCoordinates = async (address) => {
  try {
    const REST_API_KEY = import.meta.env.VITE_APP_REST_API_KEY;
    const response = await axios.get(
      'https://dapi.kakao.com/v2/local/search/address.json',
      {
        headers: {
          Authorization: `KakaoAK ${REST_API_KEY}`,
        },
        params: {
          query: address,
        },
      },
    );

    if (response.data.documents.length > 0) {
      const { x, y } = response.data.documents[0];
      return [x, y];
    } else {
      throw new Error('주소에 해당하는 좌표 정보를 찾을 수 없습니다.');
    }
  } catch (error) {
    console.error('주소를 좌표로 변환하는데 실패했습니다:', error);
    return null;
  }
};
