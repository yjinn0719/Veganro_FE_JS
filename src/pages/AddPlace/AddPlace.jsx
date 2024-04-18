import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBox from '@/components/InputBox/InputBox';
import Navbar from '@/components/Navbar/Navbar';
import PlaceMap from '@/components/PlaceMap/PlaceMap';
import PlaceTag from '@/components/PlaceTag/PlaceTag';
import MenuTag from '@/components/MenuTag/MenuTag';
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import KakaoAddress from '@/components/KakaoAddress/KakaoAddress';
import OpenTimeTab from '@/components/OpenTimeTab/OpenTimeTab';
import { createReportPlace } from '@/apis/api/reportApi';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { PLACE_TYPES, VEGAN_MENU_TYPES } from '@/constants';
import {
  MainContainer,
  MapContainer,
  TagContainer,
  AddPlaceText,
  AddressInputContainer,
  AddPlaceSearch,
} from './AddPlace.styles';

function AddPlace() {
  const [selectPlace, setSelectPlace] = useState('');
  const [selectMenu, setSelectMenu] = useState('');
  const [placeAddress, setPlaceAddress] = useState('');
  const [placeName, setPlaceName] = useState('');
  const [placeSns, setPlaceSns] = useState([]);
  const [placeNumber, setPlaceNumber] = useState('');
  const [placeAddressApi, setPlaceAddressApi] = useState('');
  const [placeAddressLotApi, setPlaceAddressLotApi] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState(null);
  const [warning, setWarning] = useState('');
  const [selectedTag, setSelectedTag] = useState('월');
  const [timeValues, setTimeValues] = useState({
    월: ['', '', '', ''],
    화: ['', '', '', ''],
    수: ['', '', '', ''],
    목: ['', '', '', ''],
    금: ['', '', '', ''],
    토: ['', '', '', ''],
    일: ['', '', '', ''],
  });

  const navigate = useNavigate();

  const AddPlaceData = () => {
    const week = ['월', '화', '수', '목', '금', '토', '일'];
    const newOpenTimes = week.map((day) => {
      const times = timeValues[day];
      if (
        times.length === 0 ||
        (times[0] === '' &&
          times[1] === '' &&
          times[2] === '' &&
          times[3] === '')
      ) {
        return `${day}: 휴무`;
      } else {
        let dailyTimes = [];
        if (times[0] && times[1]) {
          dailyTimes.push(`${times[0]}-${times[1]}`);
        }
        if (times[2] && times[3]) {
          dailyTimes.push(`브레이크타임: ${times[2]}-${times[3]}`);
        }
        return `${day}: ${dailyTimes.length > 0 ? dailyTimes.join(', ') : '정보 없음'}`;
      }
    });

    return {
      name: placeName,
      category: selectPlace,
      vegan_option: selectMenu === VEGAN_MENU_TYPES[1],
      tel: placeNumber || '',
      address: placeAddressApi,
      address_lot_number: placeAddressLotApi,
      address_detail: placeAddress || '',
      location: location,
      open_times: newOpenTimes,
      sns_url: placeSns.length > 0 ? placeSns : '',
    };
  };

  const isButtonEnabled =
    placeAddressApi.length > 0 &&
    placeName.length > 0 &&
    selectPlace !== '' &&
    selectMenu !== '';

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddressSelect = ({ roadAddress, lotAddress, coordinates }) => {
    setPlaceAddressApi(roadAddress);
    setPlaceAddressLotApi(lotAddress);

    if (coordinates) {
      setLocation(coordinates);
    } else {
      console.error('주소에 대한 좌표 정보를 설정할 수 없습니다.');
    }
    closeModal();
  };

  const handlePlaceTagClick = (type) => {
    setSelectPlace(type);
  };

  const handleMenuTagClick = (type) => {
    setSelectMenu(type);
  };

  const handleTimeChange = (day, index, value) => {
    setTimeValues((prevValues) => {
      const newTimes = [...prevValues[day]]; // 현재 요일의 시간 배열을 복사
      newTimes[index] = value; // 특정 인덱스 위치에 새로운 시간 값 저장
      return {
        ...prevValues,
        [day]: newTimes, // 업데이트된 시간 배열로 상태 갱신
      };
    });
  };

  const handleSubmit = async () => {
    const data = AddPlaceData();
    try {
      const result = await createReportPlace(data);
      navigate('/home');
    } catch (error) {
      console.error(error);
    }
  };

  const handleNumberChange = (e) => {
    const newNumber = e.target.value;
    setPlaceNumber(newNumber);

    // 전화번호 형식 검사
    const phoneRegex = /^(0\d{1,4}-\d{1,4}-\d{4})$/;
    if (!phoneRegex.test(newNumber)) {
      setWarning(
        '유효하지 않은 전화번호 형식입니다. 예: 00-000-0000, 000-0000-0000 ...',
      );
    } else {
      setWarning('');
    }
  };

  return (
    <>
      <Navbar title="가게제보" icon="null" />
      <MainContainer>
        <MapContainer>
          <PlaceMap address={placeAddressApi} name={placeName}></PlaceMap>
        </MapContainer>
        <AddPlaceText>가게 위치</AddPlaceText>
        <AddressInputContainer>
          <InputBox
            placeholder="도로명 주소"
            value={placeAddressApi} // 주소 검색 결과를 표시
            onChange={(e) => setPlaceAddressApi(e.target.value)}
          ></InputBox>
          <AddPlaceSearch onClick={openModal}>
            <SearchOutlinedIcon sx={{ width: '24px', height: '24px' }} />
          </AddPlaceSearch>
        </AddressInputContainer>
        <InputBox
          placeholder="지번 주소"
          value={placeAddressLotApi} // 지번 주소 검색 결과를 표시
          onChange={(e) => setPlaceAddressLotApi(e.target.value)}
        />
        <InputBox
          placeholder="상세 위치 (선택)"
          value={placeAddress}
          onChange={(e) => setPlaceAddress(e.target.value)}
        ></InputBox>
        <AddPlaceText>가게 이름</AddPlaceText>
        <InputBox
          placeholder="가게 이름"
          value={placeName}
          onChange={(e) => setPlaceName(e.target.value)}
        />
        <AddPlaceText>가게 형태</AddPlaceText>
        <TagContainer>
          {PLACE_TYPES.map((type) => (
            <PlaceTag
              key={type}
              title={type}
              onClick={() => handlePlaceTagClick(type)}
              isSelected={selectPlace === type}
            />
          ))}
        </TagContainer>
        <AddPlaceText>채식 메뉴</AddPlaceText>
        <TagContainer>
          {VEGAN_MENU_TYPES.map((type) => (
            <MenuTag
              key={type}
              title={type}
              onClick={() => handleMenuTagClick(type)}
              isSelected={selectMenu === type}
            />
          ))}
        </TagContainer>
        <AddPlaceText>
          SNS <small>(선택)</small>
        </AddPlaceText>
        <InputBox
          placeholder="https://www.instagram.com/vegan-ro/"
          value={placeSns}
          onChange={(e) => setPlaceSns(e.target.value)}
        ></InputBox>
        <AddPlaceText>
          영업시간 <small>(선택)</small>
        </AddPlaceText>
        <OpenTimeTab
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          timeValues={timeValues}
          handleTimeChange={handleTimeChange}
        />
        <AddPlaceText>
          연락처 <small>(선택)</small>
        </AddPlaceText>
        <InputBox
          type="text"
          placeholder="010-1234-5678"
          value={placeNumber}
          onChange={handleNumberChange}
        ></InputBox>
        {warning && <p style={{ color: 'red' }}>{warning}</p>}

        <PrimaryButton
          title="이 위치로 등록하기"
          isEnabled={isButtonEnabled}
          onClick={handleSubmit}
        ></PrimaryButton>
      </MainContainer>
      {isModalOpen && (
        <KakaoAddress
          onClose={closeModal}
          onAddressSelect={handleAddressSelect}
        />
      )}
    </>
  );
}

export default AddPlace;
