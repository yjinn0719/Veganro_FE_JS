import React, { useState } from 'react';
import InputBox from '../../components/InputBox/InputBox';
import Navbar from '../../components/Navbar/Navbar';
import PlaceMap from '../../components/PlaceMap/PlaceMap';
import PlaceTag from '../../components/PlaceTag/PlaceTag';
import MenuTag from '../../components/MenuTag/MenuTag';
import DateTag from '../../components/DateTag/DateTag';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import SelectBox from '../../components/SelectBox/SelectBox';

import {
  MainContainer,
  TagContainer,
  DateTagContainer,
  AddPlaceText,
} from './AddPlace.styles';

function AddPlace() {
  // 선택된 가게 형태를 관리하기 위한 상태
  const [selectedPlaceType, setSelectedPlaceType] = useState('');
  const [selectedMenuType, setSelectedMenuType] = useState('');

  // 가게 형태 태그를 클릭했을 때 호출될 함수
  const handlePlaceTagClick = (type) => {
    setSelectedPlaceType(type);
  };

  const handleMenuTagClick = (type) => {
    setSelectedMenuType(type);
  };

  const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일'];

  return (
    <MainContainer>
      <Navbar title="가게제보" icon="delete"></Navbar>
      {/* <PlaceMap></PlaceMap> */}
      <AddPlaceText>가게 위치</AddPlaceText>
      <InputBox></InputBox>

      <AddPlaceText>가게 이름</AddPlaceText>
      <InputBox></InputBox>

      <AddPlaceText>가게 형태</AddPlaceText>
      <TagContainer>
        {['식당', '술집', '카페', '기타'].map((type) => (
          <PlaceTag
            key={type}
            title={type}
            onClick={() => handlePlaceTagClick(type)}
            isSelected={selectedPlaceType === type}
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
            isSelected={selectedMenuType === type}
          />
        ))}
      </TagContainer>

      <AddPlaceText>SNS (옵션)</AddPlaceText>
      <InputBox></InputBox>

      <AddPlaceText>영업시간 (옵션)</AddPlaceText>
      <DateTagContainer>
        <DateTagContainer>
          {daysOfWeek.map((day) => (
            <DateTag key={day} title={day} />
          ))}
        </DateTagContainer>
      </DateTagContainer>
      <TagContainer>
        <SelectBox placeholder="영업 시작시간"></SelectBox>
        <SelectBox placeholder="영업 종료시간"></SelectBox>
      </TagContainer>
      <TagContainer>
        <SelectBox placeholder="브레이크 시작시간"></SelectBox>
        <SelectBox placeholder="브레이크 종료시간"></SelectBox>
      </TagContainer>

      <AddPlaceText>연락처 (옵션)</AddPlaceText>
      <InputBox></InputBox>

      <PrimaryButton title="이 위치로 등록하기"></PrimaryButton>
    </MainContainer>
  );
}

export default AddPlace;
