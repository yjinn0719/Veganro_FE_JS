import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapMarker } from 'react-kakao-maps-sdk';
import { getAllPlaces } from '../../apis/api/placeApi';

const PlaceMarkers = ({ selectedCategories }) => {
  const navigate = useNavigate();
  const [placeData, setPlaceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPlacesData = async () => {
      try {
        const data = await getAllPlaces();
        setPlaceData(data);
        setIsLoading(false);
      } catch (error) {
        console.error(`Error fetching data : `, error);
        setIsLoading(false);
      }
    };
    fetchPlacesData(); // 컴포넌트 마운트 되었을때, 데이터 부르기
  }, []);

  const markers = placeData.map((place) => ({
    id: place._id,
    position: {
      lat: place.location.coordinates[1], //경도
      lng: place.location.coordinates[0], //위도
    },
    category: place.category,
    categoryImg: place.category_img.url.pin_url,
    name: place.name,
  }));

  const [isVisible, setIsVisible] = useState({
    id: -1,
    isVisible: false,
  });

  // 식당 상세 페이지 이동 핸들러
  const handleMarkerClick = (id) => {
    // todo 여기에 정보 모달창 그려줘야함
    // 그리고 해당 식당 상세 페이지로 이동
  };

  if (isLoading) return <div>Loading...</div>;

  const filteredMarkers =
    selectedCategories.length > 0
      ? markers.filter((marker) => selectedCategories.includes(marker.category))
      : markers;

  return (
    <>
      {filteredMarkers.map((marker) => (
        <MapMarker
          key={marker.id}
          position={marker.position}
          category={marker.category}
          clickable={true}
          image={{
            src: marker.categoryImg,
            size: { width: 30, height: 30 },
          }}
        ></MapMarker>
      ))}
    </>
  );
};

export default PlaceMarkers;
