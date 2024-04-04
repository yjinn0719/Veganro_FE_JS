import { useState, useEffect } from 'react';

const getCurrentIp = async () => {
  try {
    const response = await fetch('https://geolocation-db.com/json/');
    const data = await response.json();
    return data.IPv4;
  } catch (e) {
    console.error(`IP주소 불러오기 실패`, e);
  }
};

export const useGeolocation = () => {
  const [geo, setGeo] = useState({ lat: 0, lon: 0 });

  useEffect(() => {
    // const getLocation = async () => {
    //   const currentGeo = await getCurrentIp();
    //   if (currentGeo) {
    //     const lat = currentGeo.latitude;
    //     const lon = currentGeo.longitude;
    //     setGeo({ lat, lon });
    //   }
    // };
    const getLocation = async () => {
      try {
        const currentIp = await getCurrentIp();
        if (currentIp) {
          //ip-api.com 서비스의 무료 버전의 ip-api.com은 HTTP를 통한 요청만 허용하는 이슈 발생하여 다른 무료 HTTPS 지원 지오로케이션 서비스(ipstack) 이용하여 dev모드 testing
          const response = await fetch(
            `http://api.ipstack.com/114.202.205.20?access_key=${import.meta.env.VITE_APP_IPSTACK_KEY}`,
          );
          const geoData = await response.json();

          // IP API로부터 정상적인 응답을 받았는지 check해줘야함
          if (geoData && !geoData.error) {
            const { lat, lon } = geoData;
            setGeo({ lat, lon });
          }
        }
      } catch (e) {
        console.error(`사용자 위치 불러오기 실패`, e);
      }
    };
    getLocation();
  }, []);

  return geo;
};
