import { useEffect, useState } from 'react';

// 현재 위치 받아오는 함수
export const getCurrentPosition = () => {
  const [location, setLocation] = useState();

  useEffect(() => {
    const { geolocation } = navigator;

    if (geolocation) {
      geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({
            ...location,
            center: {
              lat: latitude,
              lng: longitude,
            },
            isLoading: false,
          });
        },
        (err) => {
          setLocation({
            ...location,
            errMsg: err.message,
            isLoading: false,
          });
        },
      );
    } else {
      setLocation({
        ...location,
        errMsg: '현재 위치를 불러올 수 없습니다.',
        isLoading: false,
      });
    }
  }, []);

  return {
    currentLocation: location,
  };
};
