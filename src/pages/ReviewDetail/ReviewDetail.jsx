import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar/Navbar';
import { useGetReviewsByPlaceId } from '../../hooks/useReview';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
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
} from '@/components/Review/Review.styles';
import EditDrawer from '@/components/EditDrawer/EditDrawer';
import ComplaintDrawer from '@/components/ComplaintDrawer/ComplaintDrawer';
import ReviewDrawer from '@/components/ReviewDrawer/ReviewDrawer';

export default function Review({ address }) {
  const { placeid } = useParams();
  const { ref, inView } = useInView();
  const {
    data: ReviewsData,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetReviewsByPlaceId(placeid);
  console.log(ReviewsData);
  const [isReviewDrawerOpen, setIsReviewDrawerOpen] = useState(false);
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);
  const [isComplaintDrawerOpen, setIsComplaintDrawerOpen] = useState(false);
  const [editReview, setEditReview] = useState(false);
  const [submittedReviews, setSubmittedReviews] = useState([]);
  const [selectedReviewIndex, setSelectedReviewIndex] = useState(null);

  const handleWriteReviewClick = () => {
    toggleReviewDrawer();
    document.body.style.overflow = 'hidden';
  };

  useEffect(() => {
    if (!isReviewDrawerOpen) {
      document.body.style.overflow = 'auto';
    }
  }, [isReviewDrawerOpen]);
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const toggleDrawer = () => {
    setIsReviewDrawerOpen(!isReviewDrawerOpen);
    if (isEditDrawerOpen || editReview || isComplaintDrawerOpen) {
      setIsEditDrawerOpen(false);
      setEditReview(false);
      setIsComplaintDrawerOpen(false);
    }
  };

  const toggleReviewDrawer = () => {
    setIsReviewDrawerOpen(!isReviewDrawerOpen);
    if (isEditDrawerOpen || editReview || isComplaintDrawerOpen) {
      setIsEditDrawerOpen(false);
      setEditReview(false);
      setIsComplaintDrawerOpen(false);
    }
  };

  const toggleEditDrawer = (reviewId) => {
    setSelectedReviewIndex(reviewId);
    setIsEditDrawerOpen(!isEditDrawerOpen);
    if (isReviewDrawerOpen || editReview || isComplaintDrawerOpen) {
      setIsReviewDrawerOpen(false);
      setEditReview(false);
      setIsComplaintDrawerOpen(false);
    }
  };
  const toggleEditReview = () => {
    setEditReview(!editReview);
    if (isEditDrawerOpen || isReviewDrawerOpen || isComplaintDrawerOpen) {
      setIsEditDrawerOpen(false);
      setIsReviewDrawerOpen(false);
      setEditReview(false);
    }
  };

  const toggleComplaintReview = () => {
    setIsComplaintDrawerOpen(!isComplaintDrawerOpen);
    if (isEditDrawerOpen || isReviewDrawerOpen || editReview) {
      setIsEditDrawerOpen(false);
      setIsReviewDrawerOpen(false);
      setEditReview(false);
    }
  };

  const handleReviewCardClick = (review) => {
    if (review.isWrittenByCurrentUser === true) {
      setSelectedReviewIndex(review._id);
      toggleEditDrawer(review._id);
    } else {
      setSelectedReviewIndex(review._id);
      setIsComplaintDrawerOpen(true);
    }
  };
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <ScrollToTop />
      <Navbar title="리뷰" icon="null" />

      <Container id="write-review">
        <ReviewWrapper>
          <Header>
            <ReviewCount>
              <ReviewTitle>리뷰</ReviewTitle>
              <ReviewNumber>{ReviewsData.pages[0].totalCount}개</ReviewNumber>
            </ReviewCount>
            <Link to="write-review" smooth={true} duration={500}>
              <WriteReview onClick={handleWriteReviewClick}>
                리뷰 작성
              </WriteReview>
            </Link>
          </Header>
          {ReviewsData.pages[0].totalCount === 0 ? (
            <ReviewContent>
              <NoReview>
                <NoReviewText>리뷰를 작성해주세요.</NoReviewText>
              </NoReview>
            </ReviewContent>
          ) : (
            <>
              {ReviewsData?.pages.map((page) =>
                page.reviews.map((review) => (
                  <ReviewCard
                    key={review._id}
                    reviewId={review._id}
                    isCurrentUser={review.isWrittenByCurrentUser}
                    nickname={review.user_id.nickname}
                    veganLevel={review.user_id.tag}
                    comment={review.content}
                    date={review.updatedAt}
                    click={() => handleReviewCardClick(review)}
                  />
                )),
              )}
            </>
          )}
          <div ref={ref}>
            {isFetchingNextPage ? (
              <div>Loading more...</div>
            ) : hasNextPage ? (
              <div>Load More</div>
            ) : (
              'No more reviews'
            )}
          </div>
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
      {isComplaintDrawerOpen && (
        <ComplaintDrawer
          reviewId={selectedReviewIndex}
          isOpened={isComplaintDrawerOpen}
          toggleDrawer={toggleComplaintReview}
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
