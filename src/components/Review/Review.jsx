import React, { useState, useEffect } from 'react';

import ReviewCard from '@/components/ReviewCard/ReviewCard';
import {
  Container,
  ReviewWrapper,
  Header,
  ReviewCount,
  ReviewTitle,
  ReviewNumber,
  WriteReview,
  ReviewContent,
  NoReview,
  NoReviewText,
  LoadMoreButtonContainer,
  LoadMoreButtonText,
  LoadMoreButtonIconContainer,
  LoadMoreButtonIcon,
} from '@/components/Review/Review.styles';
import EditDrawer from '@/components/EditDrawer/EditDrawer';
import ReviewDrawer from '@/components/ReviewDrawer/ReviewDrawer';

export default function Review({
  address = '서울특별시 강남구 역삼동 123-45',
}) {
  const [isReviewDrawerOpen, setIsReviewDrawerOpen] = useState(false);
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);
  const [submittedReviews, setSubmittedReviews] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState(3);

  const toggleReviewDrawer = () => {
    setIsReviewDrawerOpen(!isReviewDrawerOpen);
    if (isEditDrawerOpen) {
      setIsEditDrawerOpen(false);
    }
  };

  const toggleEditDrawer = () => {
    setIsEditDrawerOpen(!isEditDrawerOpen);
    if (isReviewDrawerOpen) {
      setIsReviewDrawerOpen(false);
    }
  };

  useEffect(() => {
    if (isEditDrawerOpen) {
      setIsEditDrawerOpen(true);
    }
  }, [isEditDrawerOpen]);

  return (
    <>
      <Container>
        <ReviewWrapper>
          <Header>
            <ReviewCount>
              <ReviewTitle>리뷰</ReviewTitle>
              <ReviewNumber>{submittedReviews.length}개</ReviewNumber>
            </ReviewCount>

            <div
              onClick={() => {
                window.scrollTo({
                  top: 500,
                  behavior: 'smooth',
                });
              }}
            >
              <WriteReview onClick={toggleReviewDrawer}>리뷰 작성</WriteReview>
            </div>
          </Header>
          {submittedReviews.length === 0 ? (
            <ReviewContent>
              <NoReview>
                <NoReviewText>리뷰를 작성해주세요.</NoReviewText>
              </NoReview>
            </ReviewContent>
          ) : (
            <>
              {submittedReviews
                .slice(0, visibleReviews)
                .map((review, index) => (
                  <ReviewCard
                    key={index}
                    comment={review}
                    click={toggleEditDrawer}
                  />
                ))}
              {submittedReviews.length > visibleReviews && (
                <LoadMoreButtonContainer>
                  <LoadMoreButtonText
                    onClick={() => {
                      navigate('/review');
                    }}
                  >
                    더보기
                  </LoadMoreButtonText>
                  <LoadMoreButtonIconContainer>
                    <LoadMoreButtonIcon></LoadMoreButtonIcon>
                  </LoadMoreButtonIconContainer>
                </LoadMoreButtonContainer>
              )}
            </>
          )}
        </ReviewWrapper>
      </Container>
      {isReviewDrawerOpen && (
        <ReviewDrawer
          address={address}
          isOpened={isReviewDrawerOpen}
          toggleDrawer={toggleReviewDrawer}
          submittedReviews={submittedReviews}
          setSubmittedReviews={setSubmittedReviews}
        />
      )}
      {isEditDrawerOpen && <EditDrawer />}
    </>
  );
}
