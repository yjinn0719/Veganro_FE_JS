import React, { useEffect, useState } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import { getAllPlaces } from '@/apis';
import PlaceInfoModal from '@/components/PlaceInfoModal/PlaceInfoModal';

const PlaceMarkers = ({
  categoriesStatus,
  selectedMenuTypes,
  handleMarkerClick,
}) => {
  const [placeData, setPlaceData] = useState([]);
  const [filteredMarkers, setFilteredMarkers] = useState([]);
  const [selectedMarkerId, setSelectedMarkerId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    fetchPlacesData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const categoryFilteredMarkers = placeData.filter((place) =>
        categoriesStatus.some(
          (category) => category.name === place.category && category.clicked,
        ),
      );

      const menuTypeFilteredMarkers = categoryFilteredMarkers.filter(
        (place) =>
          selectedMenuTypes === null ||
          place.vegan_option === selectedMenuTypes,
      );

      setFilteredMarkers(
        menuTypeFilteredMarkers.map((place) => ({
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
  }, [placeData, categoriesStatus, selectedMenuTypes, isLoading]);

  // 식당 상세 페이지 이동 핸들러
  const handleMarkerMove = (id, position) => {
    setSelectedMarkerId(id);
    handleMarkerClick(position);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
          onClick={() => handleMarkerMove(marker.id, marker.position)}
          image={{
            src: selectedMarkerId === marker.id ? null : marker.categoryImg,
            size: { width: 30, height: 30 },
          }}
        ></MapMarker>
      ))}
      {isModalOpen && selectedMarkerId !== null && (
        <PlaceInfoModal markerId={selectedMarkerId} closeModal={closeModal} />
      )}
    </>
  );
};

export default PlaceMarkers;
