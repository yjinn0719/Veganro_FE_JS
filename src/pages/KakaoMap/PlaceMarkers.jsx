import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapMarker } from 'react-kakao-maps-sdk';
import { getAllPlaces } from '../../apis/api/placeApi';

const PlaceMarkers = ({ categoriesStatus }) => {
  const navigate = useNavigate();

  const [placeData, setPlaceData] = useState([]);
  const [filteredMarkers, setFilteredMarkers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const markers = placeData
    // 데이터 좌표값 체크
    .filter(
      (place) =>
        place.location &&
        place.location.coordinates &&
        place.location.coordinates.length >= 2,
    )
    .map((place) => ({
      id: place._id,
      position: {
        lat: place.location.coordinates[1], //위도
        lng: place.location.coordinates[0], //경도
      },
      category: place.category,
      categoryImg: place.category_img.url.pin_url,
      name: place.name,
    }));

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

  useEffect(() => {
    if (!isLoading) {
      const newFilteredMarkers = markers.filter((marker) => {
        const selectedCategory = categoriesStatus.find(
          (c) => c.name === marker.category,
        );
        return !selectedCategory || selectedCategory.clicked;
      });
      setFilteredMarkers(newFilteredMarkers);
    }
  }, [placeData, categoriesStatus, isLoading]);

  // 식당 상세 페이지 이동 핸들러
  const handleMarkerClick = (id) => {
    // TODO 여기에 정보 모달창 그려줘야함
    // 그리고 해당 식당 상세 페이지로 이동
    console.log('클릭한 마커 ID:', id);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {filteredMarkers.map((marker) => (
        <MapMarker
          key={marker.id}
          position={marker.position}
          category={marker.category}
          clickable={true}
          onClick={() => handleMarkerClick(marker.id)}
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
