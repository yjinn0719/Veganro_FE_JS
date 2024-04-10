import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import { ModalOverlay, ModalContent } from './KakaoAddress.styles';

const KakaoAddress = ({ onClose, onAddressSelect }) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    // 선택한 주소 정보를 부모 컴포넌트로 전달
    onAddressSelect(fullAddress);
    onClose();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <DaumPostcode onComplete={handleComplete} className="post-modal" />
      </ModalContent>
    </ModalOverlay>
  );
};

export default KakaoAddress;
