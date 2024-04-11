import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetReviewsByPlaceId } from '../../hooks/useReview';
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
import EditDrawer from '@/components/EditDrawer/EditDrawer';
import ReviewDrawer from '@/components/ReviewDrawer/ReviewDrawer';
import { IoChevronDownSharp } from 'react-icons/io5';

export default function Review({ address }) {
  const { placeid } = useParams();
  const {
    data: ReviewsData,
    isLoading,
    isError,
    error,
  } = useGetReviewsByPlaceId(placeid);
  const [isReviewDrawerOpen, setIsReviewDrawerOpen] = useState(false);
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);
  const [editReview, setEditReview] = useState(false);
  const [submittedReviews, setSubmittedReviews] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState(3);
  const [selectedReviewIndex, setSelectedReviewIndex] = useState(null);
  const navigate = useNavigate();

  const handleWriteReviewClick = () => {
    toggleReviewDrawer();
    document.body.style.overflow = 'hidden';
  };

  useEffect(() => {
    if (!isReviewDrawerOpen) {
      document.body.style.overflow = 'auto';
    }
  }, [isReviewDrawerOpen]);

  const toggleDrawer = () => {
    setIsReviewDrawerOpen(!isReviewDrawerOpen);
    if (isEditDrawerOpen || editReview) {
      setIsEditDrawerOpen(false);
    }
  };

  const toggleReviewDrawer = () => {
    setIsReviewDrawerOpen(!isReviewDrawerOpen);
    if (isEditDrawerOpen || editReview) {
      setIsEditDrawerOpen(false);
      setEditReview(false);
    }
  };

  const toggleEditDrawer = (reviewId) => {
    setSelectedReviewIndex(reviewId);
    setIsEditDrawerOpen(!isEditDrawerOpen);
    if (isReviewDrawerOpen || editReview) {
      setIsReviewDrawerOpen(false);
      setEditReview(false);
    }
  };
  const toggleEditReview = () => {
    setEditReview(!editReview);
    if (isEditDrawerOpen || isReviewDrawerOpen) {
      setIsEditDrawerOpen(false);
      setIsReviewDrawerOpen(false);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <Container id="write-review">
        <ReviewWrapper>
          <Header>
            <ReviewCount>
              <ReviewTitle>리뷰</ReviewTitle>
              <ReviewNumber>{ReviewsData.length}개</ReviewNumber>
            </ReviewCount>
            <Link to="write-review" smooth={true} duration={500}>
              <WriteReview onClick={handleWriteReviewClick}>
                리뷰 작성
              </WriteReview>
            </Link>
          </Header>
          {ReviewsData.length === 0 ? (
            <ReviewContent>
              <NoReview>
                <NoReviewText>리뷰를 작성해주세요.</NoReviewText>
              </NoReview>
            </ReviewContent>
          ) : (
            <>
              {ReviewsData.slice(0, visibleReviews).map((review) => (
                <ReviewCard
                  key={review._id}
                  nickname={review.user_id.nickname}
                  veganLevel={review.user_id.tag}
                  comment={review.content}
                  date={review.updatedAt}
                  click={() => {
                    setSelectedReviewIndex(review._id);
                    toggleEditDrawer(review._id);
                  }}
                />
              ))}
              {ReviewsData.length > visibleReviews && (
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
      {isEditDrawerOpen && (
        <EditDrawer
          onEdit={toggleEditReview}
          reviewId={selectedReviewIndex}
          isOpened={isEditDrawerOpen}
        />
      )}
      {editReview && (
        <ReviewDrawer
          address={address}
          titleText={false}
          submitText={false}
          isOpened={toggleEditReview}
          toggleDrawer={toggleDrawer}
          submittedReviews={submittedReviews}
          setSubmittedReviews={setSubmittedReviews}
          reviewIndex={selectedReviewIndex}
        />
      )}
    </>
  );
}
