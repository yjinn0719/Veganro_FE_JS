import { useEffect, useState } from 'react';

const getCurrentIp = async () => {
  const response = await fetch('https://geolocation-db.com/json/');
  const data = await response.json();
  return data['IPv4'];
};

const useGeolocation = () => {
  const [geo, setGeo] = useState({ lat: 0, lon: 0 });

  const getLocation = async () => {
    const currentIp = await getCurrentIp();

    const geoData = await fetch(`http://ip-api.com/json/${currentIp}`).then(
      (res) => res.json(),
    );

    if (geoData && geoData.lat && geoData.lon) {
      const latitude = geoData.lat;
      const longitude = geoData.lon;

      setGeo({ lat: latitude, lon: longitude });
    } else {
      console.error('위도와 경도를 찾을 수 없습니다.');
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return geo;
};

export default useGeolocation;
