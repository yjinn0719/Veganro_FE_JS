import { useState, useEffect } from 'react';

const getCurrentIp = async () => {
  await fetch('https://geolocation-db.com/json/')
    .then((res) => res.json())
    .then((res) => res['IPv4']);
};

export const useGeolocation = () => {
  const [geo, setGeo] = useState({ lat: 0, lon: 0 });
  const getLocation = async () => {
    const currentIp = await getCurrentIp();
    const geoData = await fetch(`http://ip-api.com/json/${currentIp}`).then(
      (res) =>
        res.json().then((res) => {
          // 사용자 IP 가져오기
          console.log(res);
          return res;
        }),
    );
    const latitude = geoData.lat;
    const longitude = geoData.lon;
    setGeo({ lat: latitude, lon: longitude });
  };
  useEffect(() => {
    getLocation();
  }, []);

  return geo;
};
