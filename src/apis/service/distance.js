// src/apis/service/distance.js
import { getDistance } from 'geolib';

export const getPlacesWithDistance = async (userLocation, fetchPlacesFunc) => {
  try {
    const res = await fetchPlacesFunc();
    return res.data.data.map((place) => {
      // 유의!! : DB에선 경도-위도 순서, 카카오가 받는 순서는 위도-경도
      const distance = getDistance(
        { latitude: userLocation.lat, longitude: userLocation.lon },
        {
          latitude: place.location.coordinates[1],
          longitude: place.location.coordinates[0],
        },
      );
      return {
        ...place,
        distance,
      };
    });
  } catch (error) {
    console.error('거리 계산 중 오류 발생:', error);
    return [];
  }
};
