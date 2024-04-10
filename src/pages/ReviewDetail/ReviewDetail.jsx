import Navbar from '@/components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import ReviewCard from '@/components/ReviewCard/ReviewCard';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import { useGetReviewsByPlaceId } from '../../hooks/useReview';
import {
  ReviewContainer,
  Content,
} from '@/pages/ReviewDetail/ReviewDetail.styles';
import { useState } from 'react';
export default function ReviewDetail() {
  const { placeid } = useParams();
  const {
    data: ReviewsData,
    isLoading,
    isError,
    error,
  } = useGetReviewsByPlaceId(placeid);
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);

  const toggleEditDrawer = () => {
    setIsEditDrawerOpen(!isEditDrawerOpen);
  };
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  console.log(ReviewsData);

  return (
    <>
      <ScrollToTop />
      <Navbar title="리뷰" icon="null" />

      <ReviewContainer>
        <Content>
          {ReviewsData.map((review) => (
            <ReviewCard
              key={review._id}
              nickname={review.author}
              veganLevel={review.author_tag}
              comment={review.content}
              date={review.updatedAt}
              click={toggleEditDrawer}
            />
          ))}
        </Content>
      </ReviewContainer>
    </>
  );
}
