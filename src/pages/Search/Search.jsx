import React from 'react';

import SearchBar from '@/components/SearchBar/SearchBar';
import PlaceCategory from '@/components/PlaceCategory/PlaceCategory';
import SearchList from '@/components/SearchList/SearchList';

import { PLACE_TYPES } from '../../constants';

export default function Search() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    async function loadPlaces() {
      const data = await fetchPlaces();
      setPlaces(data);
    }

    loadPlaces();
  }, []);

  return (
    <div>
      <SearchBar placeholder="‘가게 이름' 또는 ‘주소'를 검색해보세요." />
      <Box className="category-bar">
        {PLACE_TYPES.map((title, index) => (
          <PlaceCategory
            key={index}
            title={title}
            onClick={() => handleCategorySelect(title)}
          />
        ))}
      </Box>
      {places.map((place) => (
        <SearchList
          key={place.id}
          name={place.name}
          distance={place.distance}
          address={`${place.address} + ${place.address_detail}`}
          tel={place.tel}
        />
      ))}
    </div>
  );
}
