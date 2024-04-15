import axios from 'axios';

export const getAddressCoordinates = async (address) => {
  try {
    const apiKey = '8dd63e5f9683453decbcec3fa0376a61'; // 실제 API 키로 교체하세요.
    const response = await axios.get(
      'https://dapi.kakao.com/v2/local/search/address.json',
      {
        headers: {
          Authorization: `KakaoAK ${apiKey}`, // 헤더에 API 키를 올바르게 설정
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
