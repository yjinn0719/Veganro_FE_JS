import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetReviews } from '../../hooks/useReview';
import { Link } from 'react-scroll';
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
} from '@/components/Review/Review.styles';

import ReviewDrawer from '@/components/ReviewDrawer/ReviewDrawer';
import { IoChevronDownSharp } from 'react-icons/io5';

export default function Review({ address }) {
  const { placeid } = useParams();
  const {
    data: ReviewsData,
    isLoading,
    isError,
    error,
  } = useGetReviews(placeid);
  const [isReviewDrawerOpen, setIsReviewDrawerOpen] = useState(false);
  const [submittedReviews, setSubmittedReviews] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState(3);
  const navigate = useNavigate();

  const handleWriteReviewClick = () => {
    toggleDrawer();
    document.body.style.overflow = 'hidden';
  };

  useEffect(() => {
    if (!isReviewDrawerOpen) {
      document.body.style.overflow = 'auto';
    }
  }, [isReviewDrawerOpen]);

  const toggleDrawer = () => {
    setIsReviewDrawerOpen(!isReviewDrawerOpen);
  };

  const [selectedReviewId, setSelectedReviewId] = useState(null);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <Container id="write-review">
        <ReviewWrapper>
          <Header>
            <ReviewCount>
              <ReviewTitle>리뷰</ReviewTitle>
              <ReviewNumber>{ReviewsData?.totalCount}개</ReviewNumber>
            </ReviewCount>
            <Link to="write-review" smooth={true} duration={500}>
              <WriteReview onClick={handleWriteReviewClick}>
                리뷰 작성
              </WriteReview>
            </Link>
          </Header>
          {ReviewsData?.totalCount === 0 ? (
            <ReviewContent>
              <NoReview>
                <NoReviewText>리뷰를 작성해주세요.</NoReviewText>
              </NoReview>
            </ReviewContent>
          ) : (
            <>
              {ReviewsData?.reviews.map((review) => (
                <ReviewCard
                  key={review._id}
                  reviewId={review._id}
                  isCurrentUser={review.CurrentUser}
                  nickname={review.user_id.nickname}
                  veganLevel={review.user_id.tag}
                  comment={review.content}
                  date={review.updatedAt}
                  selectedReviewId={selectedReviewId}
                  onSelectReviewId={setSelectedReviewId}
                />
              ))}

              {ReviewsData.reviews.length > visibleReviews && (
                <LoadMoreButtonContainer
                  onClick={() => {
                    navigate(`/place/${placeid}/review`);
                  }}
                >
                  <LoadMoreButtonText>더보기</LoadMoreButtonText>
                  <LoadMoreButtonIconContainer>
                    <IoChevronDownSharp size="15" />
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
          titleText={true}
          submitText={true}
          isOpened={isReviewDrawerOpen}
          toggleDrawer={toggleDrawer}
          submittedReviews={submittedReviews}
          setSubmittedReviews={setSubmittedReviews}
        />
      )}
    </>
  );
}
