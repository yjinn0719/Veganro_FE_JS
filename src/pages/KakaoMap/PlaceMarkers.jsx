import React, { useEffect, useState } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import { getAllPlaces } from '@/apis';
import PlaceInfoModal from '@/components/PlaceInfoModal/PlaceInfoModal';

// TODO
// 1. 식당 마커 클릭 시, 식당 인포 모달 띄워주기
// 2. 식당 상세 페이지로 이동
// 3. 로딩 컴포넌트 연결

const PlaceMarkers = ({
  categoriesStatus,
  handleShowPlaceModal,
  handlePlaceModalClose,
  mapCenter,
  setMapCenter,
}) => {
  const [placeData, setPlaceData] = useState([]);
  const [filteredMarkers, setFilteredMarkers] = useState([]);
  const [selectedMarkerId, setSelectedMarkerId] = useState(null);
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

  useEffect(() => {
    if (!isLoading) {
      const newFilteredMarkers = placeData.filter((place) =>
        categoriesStatus.some(
          (category) => category.name === place.category && category.clicked,
        ),
      );
      setFilteredMarkers(
        newFilteredMarkers.map((place) => ({
          id: place._id,
          position: {
            lat: place.location.coordinates[1], // 위도
            lng: place.location.coordinates[0], // 경도
          },
          category: place.category,
          categoryImg: place.category_img.url.pin_url,
          name: place.name,
        })),
      );
    }
  }, [placeData, categoriesStatus, isLoading]);

  // 식당 상세 페이지 이동 핸들러
  const handleMarkerClick = (id, position) => {
    setSelectedMarkerId(id);
    setMapCenter(position);
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
      {selectedMarkerId !== null && (
        <PlaceInfoModal
          markerId={selectedMarkerId}
          handleShowPlaceModal={handleShowPlaceModal}
          onClose={handlePlaceModalClose}
        />
      )}
    </>
  );
};

export default PlaceMarkers;
