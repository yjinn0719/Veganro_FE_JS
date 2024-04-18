import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { MapMarker } from 'react-kakao-maps-sdk';
import { getAllPlaces } from '@/apis';
import PlaceInfoModal from '@/components/PlaceInfoModal/PlaceInfoModal';
import { isMenuOpenState } from '@/states/menuOpenState';
import { isModalOpenState } from '@/states/placeModalState';
import Loading from '@/components/Loading/Loading';

const PlaceMarkers = ({
  categoriesStatus,
  selectedMenuTypes,
  handleMarkerClick,
}) => {
  const [placeData, setPlaceData] = useState([]);
  const [filteredMarkers, setFilteredMarkers] = useState([]);
  const [selectedMarkerId, setSelectedMarkerId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(isMenuOpenState);

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

  useEffect(() => {
    if (isMenuOpen) {
      setIsModalOpen(false);
    }
  }, [isMenuOpen]);

  // 식당 상세 페이지 이동 핸들러
  const handleMarkerMove = (id, position) => {
    setSelectedMarkerId(id);
    handleMarkerClick(position);
    setIsModalOpen(true);
  };

  if (isLoading) return <Loading />;

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
            src: selectedMarkerId === marker.id ? '' : marker.categoryImg,
            size: { width: 30, height: 30 },
            style: {
              display: selectedMarkerId === marker.id ? 'none' : 'block',
            },
          }}
        ></MapMarker>
      ))}
      {isModalOpen && selectedMarkerId !== null && (
        <PlaceInfoModal markerId={selectedMarkerId} />
      )}
    </>
  );
};

export default PlaceMarkers;
