import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useGetReviewsByPlaceId } from '../../hooks/useReview';
import Loading from '@/components/Loading/Loading';
import MenuButton from '@/components/MenuButton/MenuButton';

import { useGetPlace } from '../../hooks/usePlace';
import { Link } from 'react-scroll';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import Navbar from '@/components/Navbar/Navbar';
import ReviewCard from '@/components/ReviewCard/ReviewCard';
import {
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
import { Container } from '@/pages/ReviewDetail/ReviewDetail.styles';

import ReviewDrawer from '@/components/ReviewDrawer/ReviewDrawer';

export default function Review() {
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
  const { data: placeData } = useGetPlace(placeid);
  const [isReviewDrawerOpen, setIsReviewDrawerOpen] = useState(false);
  const [selectedReviewId, setSelectedReviewId] = useState(null);

  const [submittedReviews, setSubmittedReviews] = useState([]);
  const handleWriteReviewClick = () => {
    toggleDrawer();
    document.body.style.overflow = 'hidden';
  };
  useEffect(() => {
    if (!isReviewDrawerOpen) {
      document.body.style.overflow = 'auto';
    }
  }, [isReviewDrawerOpen]);
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const toggleDrawer = () => {
    setIsReviewDrawerOpen(!isReviewDrawerOpen);
  };

  if (isLoading) return <Loading />;
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
                    key={review?._id}
                    reviewId={review?._id}
                    address={placeData?.address}
                    isCurrentUser={review?.CurrentUser}
                    nickname={review?.user_id.nickname}
                    veganLevel={review?.user_id.tag}
                    comment={review?.content}
                    date={review?.updatedAt}
                    selectedReviewId={selectedReviewId}
                    onSelectReviewId={setSelectedReviewId}
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
          address={placeData?.address}
          titleText={true}
          submitText={true}
          isOpened={isReviewDrawerOpen}
          toggleDrawer={toggleDrawer}
          submittedReviews={submittedReviews}
          setSubmittedReviews={setSubmittedReviews}
        />
      )}
      <MenuButton />
    </>
  );
}
