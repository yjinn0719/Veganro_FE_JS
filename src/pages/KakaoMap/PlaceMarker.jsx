import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MapMarker } from 'react-kakao-maps-sdk';
import { getAllPlaces } from '@/apis/api/place';

const InfoContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
`;

const PlaceName = styled.div`
  padding: 5px;
  font-size: 15px;
  text-align: center;
`;

const markerImage = [
  'https://storage.cloud.google.com/vegan-ro/restaurant.png',
  'https://storage.cloud.google.com/vegan-ro/cafe.png',
  'https://storage.cloud.google.com/vegan-ro/bar.png',
  'https://storage.cloud.google.com/vegan-ro/etc.png',
];

const PlaceMarkers = () => {
  const navigate = useNavigate();
  const {
    axiosData: getPickerPlace,
    responseData: pickerPlaces,
    status,
  } = useAxios(getAllPlaces);
  const [releaseMarker, setReleaseMarker] = useState(false);
  const [isVisible, setIsVisible] = useState({
    id: -1,
    isVisible: false,
  });

  // 식당 상세 페이지 이동 핸들러
  const clickStoreHandler = (id) => {
    navigate(`/places/${id}`);
  };

  useEffect(() => {
    if (status === 'Success' && !releaseMarker) {
      getPickerPlace();
      setReleaseMarker(true);
    }
  }, [status, releaseMarker]);

  return (
    <>
      {Array.isArray(pickerPlaces)
        ? pickerPlaces.map((place) => (
            <MapMarker
              key={place.id}
              image={{
                src: markerImage[place.index],
                size: { width: 25, height: 25 },
              }}
              position={{ lat: place.latitude, lng: place.longitude }}
              category={place.category}
              clickable={true}
              onMouseOver={() =>
                setIsVisible({ id: place.id, isVisible: true })
              }
              onMouseOut={() => setIsVisible({ id: -1, isVisible: false })}
              onClick={() => clickHandler(place.id)}
            >
              {isVisible.isVisible && isVisible.id === place.id && (
                <InfoContainer>
                  <PlaceName>{place.name}</PlaceName>
                </InfoContainer>
              )}
            </MapMarker>
          ))
        : null}
    </>
  );
};

export default PlaceMarkers;
