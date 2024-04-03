import React, { useEffect, useRef } from 'react';

export default function Search() {
  const mapContainer = useRef(null); // DOM element to render map

  useEffect(() => {
    // Dynamically load the Kakao Maps SDK
    const script = document.createElement('script');
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_APP_KAKAO_MAP_KEY
    }&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        // Instantiate map inside useEffect after the SDK is loaded
        const map = new window.kakao.maps.Map(mapContainer.current, mapOption);
      });
    };

    // Cleanup function to remove script tag on component unmount
    return () => document.head.removeChild(script);
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div
      id="map"
      style={{ width: '100%', height: '1080px' }}
      ref={mapContainer}
    ></div>
  );
}
