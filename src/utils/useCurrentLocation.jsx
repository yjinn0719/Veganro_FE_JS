import { useState, useEffect } from 'react';

const useCurrentLocation = () => {
  const [location, setLocation] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({
          center: { lat: latitude, lng: longitude },
        });
        setIsLoading(false);
      },
      (err) => {
        setError(err.message);
        setIsLoading(false);
      },
    );
  };

  useEffect(() => {
    if (navigator.geolocation) {
      getCurrentPosition();
    } else {
      setError('geolocation 사용 불가, 현재 위치를 불러올 수 없습니다.');
    }
  }, []);

  return { location, error, isLoading, reloadLocation: getCurrentPosition };
};

export default useCurrentLocation;
