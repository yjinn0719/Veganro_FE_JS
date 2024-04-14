const getPlacesWithDistance = async (userLocation, fetchPlacesFunc) => {
  try {
    const user = await userLocation;
    const res = await fetchPlacesFunc();
    return res.data.data.map((place) => {
      // 유의!! : DB에선 경도-위도 순서, 카카오가 받는 순서는 위도-경도
      // geolib 내장함수 계산불가 상태라 커스텀 로직 구현
      const distance = () => {
        // 사용자 위치 from kakao
        const userLat = user.lat;
        const userLon = user.lng;

        // place 위치 from DB
        const placeLat = place.location.coordinates[1];
        const placeLon = place.location.coordinates[0];

        if (userLat == placeLat && userLon == placeLon) return 0;

        const radianLat1 = (Math.PI * userLat) / 180;
        const radianLat2 = (Math.PI * placeLat) / 180;
        const radianTheta = (Math.PI * (userLon - placeLon)) / 180; // 삼각함수 tan θ ? 여기서 NaN 발생

        let dist =
          Math.sin(radianLat1) * Math.sin(radianLat2) +
          Math.cos(radianLat1) * Math.cos(radianLat2) * Math.cos(radianTheta); // radian 단위의 두 지점 사이의 각도

        dist = Math.min(1, Math.max(-1, dist)); //NaN에러의 원인일 수도 있는 삼각함수 -> -1 =< 범위값 =<1

        dist = (Math.acos(dist) * 180) / Math.PI; // radian 단위의 각도 값 dist를 도(degree) 단위로 변환
        dist = dist * 60 * 1.1515 * 1.609344 * 1000;

        if (dist < 100) dist = Math.round(dist / 10) * 10;
        dist = Math.round(dist / 100) * 100;

        return (dist / 1000).toFixed(1);
      };

      return {
        ...place,
        distance: distance(),
      };
    });
  } catch (error) {
    console.error('거리 계산 중 오류 발생:', error);
    return [];
  }
};

export default getPlacesWithDistance;
