import React, { useState } from 'react';
import InputBox from '@/components/InputBox/InputBox';
import Navbar from '@/components/Navbar/Navbar';
import PlaceMap from '@/components/PlaceMap/PlaceMap';
import PlaceTag from '@/components/PlaceTag/PlaceTag';
import MenuTag from '@/components/MenuTag/MenuTag';
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import KakaoAddress from '../../components/KakaoAddress/KakaoAddress';
import OpenTimeTab from '../../components/OpenTimeTab/OpenTimeTab';
import { createReportPlace } from '@/apis/api/reportApi';
import {
  MainContainer,
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
  const [placeSns, setPlaceSns] = useState('');
  const [placeNumber, setPlaceNumber] = useState('');
  const [placeAddressApi, setPlaceAddressApi] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [snsUrls, setSnsUrls] = useState([]);
  const [selectedTag, setSelectedTag] = useState('월');
  const [timeValues, setTimeValues] = useState({
    월: { 0: '', 1: '', 2: '', 3: '' },
    화: { 0: '', 1: '', 2: '', 3: '' },
    수: { 0: '', 1: '', 2: '', 3: '' },
    목: { 0: '', 1: '', 2: '', 3: '' },
    금: { 0: '', 1: '', 2: '', 3: '' },
    토: { 0: '', 1: '', 2: '', 3: '' },
    일: { 0: '', 1: '', 2: '', 3: '' },
  });

  const collectData = () => {
    return {
      name: placeName,
      category: selectPlace,
      vegan_option: selectMenu === '일부 채식 메뉴 제공',
      tel: placeNumber || '',
      address: placeAddressApi,
      address_lot_number: '서울 00-00',
      address_detail: placeAddress || '',
      location: [126.9710461, 37.5560575],
      open_times: timeValues.length > 0 ? timeValues : [],
      sns_url: snsUrls.length > 0 ? snsUrls : [],
    };
  };

  const handleSubmit = async () => {
    const data = collectData();
    try {
      const result = await createReportPlace(data);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const isButtonEnabled =
    placeAddressApi.length > 0 &&
    placeName.length > 0 &&
    selectPlace !== '' &&
    selectMenu !== '';

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddressSelect = (address) => {
    setPlaceAddressApi(address); // 사용자가 선택한 주소를 상태에 저장
    closeModal(); // 주소 선택 후 모달 닫기
  };

  const handlePlaceTagClick = (type) => {
    setSelectPlace(type);
  };

  const handleMenuTagClick = (type) => {
    setSelectMenu(type);
  };

  const handleTimeChange = (day, index, value) => {
    setTimeValues((prevValues) => ({
      ...prevValues,
      [day]: { ...prevValues[day], [index]: value },
    }));
  };
  return (
    <>
      <MainContainer>
        <Navbar title="가게제보" icon="delete" />
        {/* <PlaceMap></PlaceMap> */}
        <AddPlaceText>가게 위치</AddPlaceText>
        <AddressInputContainer>
          <InputBox
            placeholder="가게 위치"
            value={placeAddressApi} // 주소 검색 결과를 표시
            onChange={(e) => setPlaceAddressApi(e.target.value)}
          ></InputBox>
          <AddPlaceSearch onClick={openModal}>검색</AddPlaceSearch>
        </AddressInputContainer>
        <InputBox
          placeholder="상세 위치"
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
          {['식당', '술집', '카페', '마켓'].map((type) => (
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
          {['전체 채식 메뉴 제공', '일부 채식 메뉴 제공'].map((type) => (
            <MenuTag
              key={type}
              title={type}
              onClick={() => handleMenuTagClick(type)}
              isSelected={selectMenu === type}
            />
          ))}
        </TagContainer>
        <AddPlaceText>SNS (옵션)</AddPlaceText>
        <InputBox
          placeholder="https://www.instagram.com/vegan-ro/"
          value={placeSns}
          onChange={(e) => setPlaceSns(e.target.value)}
        ></InputBox>
        <AddPlaceText>영업시간 (옵션)</AddPlaceText>
        <OpenTimeTab
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          timeValues={timeValues}
          handleTimeChange={handleTimeChange}
        />
        <AddPlaceText>연락처 (옵션)</AddPlaceText>
        <InputBox
          placeholder="010-1234-5678"
          value={placeNumber}
          onChange={(e) => setPlaceNumber(e.target.value)}
        ></InputBox>
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
