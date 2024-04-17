import React, { useEffect } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { ModalOverlay, ModalContent } from './KakaoAddress.styles';
import { getAddressCoordinates } from '@/apis/api/addressApi';

const KakaoAddress = ({ onClose, onAddressSelect }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleComplete = async (data) => {
    let fullAddress = data.address;
    let extraAddress = '';
    let jibunAddress = data.jibunAddress || '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress
          ? `, ${data.buildingName}`
          : data.buildingName;
      }
      fullAddress += extraAddress ? ` (${extraAddress})` : '';
    }

    try {
      const coordinates = await getAddressCoordinates(fullAddress);
      console.log(coordinates);
      onAddressSelect({
        roadAddress: fullAddress,
        lotAddress: jibunAddress,
        coordinates: coordinates,
      });
    } catch (error) {
      console.error('좌표 변환 실패:', error);
      onAddressSelect({
        roadAddress: fullAddress,
        lotAddress: jibunAddress,
        coordinates: null,
      });
    }

    document.body.style.overflow = 'auto';
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
