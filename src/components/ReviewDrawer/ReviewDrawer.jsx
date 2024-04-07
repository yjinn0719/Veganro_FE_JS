import Drawer from '../Drawer/Drawer';
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
  SubmitButtonContainer,
  SubmitButtonText,
} from './ReviewDrawer.styles';

export default function ReviewDrawer({
  address,
  isOpened,
  toggleDrawer,
  submittedReviews,
  setSubmittedReviews,
  titleText,
  submitText,
}) {
  const [reviewText, setReviewText] = useState('');

  const handleReview = () => {
    if (reviewText.trim() !== '') {
      setSubmittedReviews([...submittedReviews, reviewText]);
      setReviewText('');
      toggleDrawer();
    }
  };

  return (
    <Drawer height={43.5} isOpened={isOpened} toggleDrawer={toggleDrawer}>
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
                onChange={(e) => setReviewText(e.target.value)}
              />
            </ReviewTextAreaContainer>
          </FormContentContainer>
          <SubmitButtonContainer onClick={handleReview}>
            <SubmitButtonText>{submitText}</SubmitButtonText>
          </SubmitButtonContainer>
        </>
      )}
    </Drawer>
  );
}
