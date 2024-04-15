import Drawer from '../Drawer/Drawer';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { useParams } from 'react-router-dom';
import { usePostReview, useUpdateReview } from '../../hooks/useReview';
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
import { notify } from '../../hooks/useToast';

export default function ReviewDrawer({
  address,
  isOpened,
  toggleDrawer,
  titleText,
  submitText,
  reviewIndex,
}) {
  const { placeid } = useParams();
  const { mutate: postReview } = usePostReview();
  const { mutate: updateReview } = useUpdateReview();
  const [reviewText, setReviewText] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const handleReview = async () => {
    if (reviewText.trim() !== '') {
      try {
        const reviewData = {
          place_id: placeid,
          content: reviewText,
        };
        if (submitText) {
          await postReview(reviewData);
          notify('success', '리뷰가 등록되었습니다.');
        } else {
          await updateReview({ reviewId: reviewIndex, content: reviewText });
          notify('success', '리뷰가 수정되었습니다.');
        }
        setReviewText('');

        setTimeout(() => {
          window.location.reload();
        }, 500);
      } catch (error) {
        console.error('Error posting or updating review:', error);
      }
    }
  };

  const handleChange = (e) => {
    setReviewText(e.target.value);
    setIsEnabled(e.target.value.trim() !== '');
  };

  return (
    <Drawer height={45.5} isOpened={isOpened} toggleDrawer={toggleDrawer}>
      {isOpened && (
        <>
          <TitleContainer>
            <Title>{titleText ? '리뷰 작성' : '리뷰 수정'}</Title>
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
            title={submitText ? '등록하기' : '수정하기'}
            isEnabled={isEnabled}
          />
        </>
      )}
    </Drawer>
  );
}
