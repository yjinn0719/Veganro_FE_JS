import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useGeolocation } from '../../utils/useGeolocation';
import { Box, SearchBar, ButtonCurrentLocation, Pin } from '../Home/Home.style';

export default function Home() {
  const geo = useGeolocation();

  return (
    <>
      <Box className="home">
        <SearchBar />
        <Map
          id="map"
          center={{ lat: geo.lat, lng: geo.lon }}
          style={{ width: '100%', height: '1080px' }}
          level={4}
        >
          <MapMarker position={{ lat: geo.lat, lng: geo.lon }}>
            <Pin>현재 위치</Pin>
          </MapMarker>
        </Map>
        <ButtonCurrentLocation />
      </Box>
    </>
  );
}
