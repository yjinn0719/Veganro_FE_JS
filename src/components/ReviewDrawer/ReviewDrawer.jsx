import Drawer from '../Drawer/Drawer';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { useState } from 'react';
import {
  TitleContainer,
  Title,
  FormContentContainer,
  AddressInputContainer,
  LocationIcon,
  AddressText,
  ReviewTextAreaContainer,
  ReviewPlaceholder,
} from './ReviewDrawer.styles';

export default function ReviewDrawer({
  address,
  isOpened,
  toggleDrawer,
  submittedReviews,
  setSubmittedReviews,
  titleText,
}) {
  const [reviewText, setReviewText] = useState('');
  const [isEnabled, setIsEnabled] = useState(false); // isEnabled 상태 추가

  const handleReview = () => {
    if (reviewText.trim() !== '') {
      setSubmittedReviews([...submittedReviews, reviewText]);
      setReviewText('');
      toggleDrawer();
    }
  };

  const handleChange = (e) => {
    setReviewText(e.target.value);
    setIsEnabled(e.target.value.trim() !== ''); // 리뷰 텍스트가 비어있지 않으면 isEnabled를 true로 설정
  };

  return (
    <Drawer height={45.5} isOpened={isOpened} toggleDrawer={toggleDrawer}>
      {isOpened && (
        <>
          <TitleContainer>
            <Title>{titleText}</Title>
          </TitleContainer>
          <FormContentContainer>
            <AddressInputContainer>
              <LocationIcon>
                <div
                  style={{
                    width: '3px',
                    height: '3px',
                    left: '10.50px',
                    top: '7.50px',
                    position: 'absolute',
                    background: '#4F8337',
                  }}
                />
                <div
                  style={{
                    width: '15px',
                    height: '21px',
                    left: '4.50px',
                    top: '1.50px',
                    position: 'absolute',
                    background: '#4F8337',
                  }}
                />
              </LocationIcon>
              <AddressText>{address}</AddressText>
            </AddressInputContainer>
            <ReviewTextAreaContainer>
              <ReviewPlaceholder
                placeholder="리뷰를 남겨주세요! (100자 이내)"
                value={reviewText}
                onChange={handleChange}
              />
            </ReviewTextAreaContainer>
          </FormContentContainer>
          <PrimaryButton
            onClick={handleReview}
            title="등록하기"
            isEnabled={isEnabled}
          />
        </>
      )}
    </Drawer>
  );
}
