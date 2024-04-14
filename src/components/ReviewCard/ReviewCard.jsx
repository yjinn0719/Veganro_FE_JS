import React, { useState, useEffect } from 'react';
import {
  CommentContainer,
  CommentHeader,
  CommentInfo,
  CommentTitle,
  CommentTag,
  TagText,
  IconContainer,
  IconDot,
  CommentDate,
  CommentText,
  DrawerContainer,
} from '@/components/ReviewCard/ReviewCard.styles';
import { useParams } from 'react-router-dom';
import { useGetMyReviews } from '../../hooks/useReview';
import EditDrawer from '@/components/EditDrawer/EditDrawer';
import ComplaintDrawer from '@/components/ComplaintDrawer/ComplaintDrawer';

export default function ReviewCard({
  reviewId,
  nickname,
  veganLevel,
  comment,
  date,
}) {
  const [isReviewCurrentUser, setIsReviewCurrentUser] = useState(false);
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);
  const [isComplaintDrawerOpen, setIsComplaintDrawerOpen] = useState(false);
  const [clickedReviewId, setClickedReviewId] = useState(null);

  const { placeid } = useParams();
  const { data: myReviews } = useGetMyReviews(placeid);
  console.log(myReviews);
  useEffect(() => {
    if (myReviews) {
      const reviewCurrentUser = myReviews.reviews.find(
        (review) => review.reviewId === reviewId,
      );
      if (reviewCurrentUser) {
        setIsReviewCurrentUser(reviewCurrentUser.CurrentUser);
      }
    }
  }, [myReviews, reviewId]);

  const toggleEditDrawer = () => {
    setIsEditDrawerOpen(!isEditDrawerOpen);
    if (isComplaintDrawerOpen) {
      setIsComplaintDrawerOpen(false);
    }
  };

  const toggleComplaintReview = () => {
    setIsComplaintDrawerOpen(!isComplaintDrawerOpen);
    if (isEditDrawerOpen) {
      setIsEditDrawerOpen(false);
    }
  };

  const handleReviewCardClick = () => {
    setClickedReviewId(reviewId);
    if (isReviewCurrentUser) {
      toggleEditDrawer();
    } else {
      toggleComplaintReview();
    }
  };

  return (
    <>
      <CommentContainer onClick={handleReviewCardClick}>
        <CommentHeader>
          <CommentInfo>
            <CommentTitle>{nickname}</CommentTitle>
            <CommentTag>
              <TagText>{veganLevel}</TagText>
            </CommentTag>
          </CommentInfo>
          <IconContainer>
            <IconDot top={6.5} />
            <IconDot top={11.5} />
            <IconDot top={1.5} />
          </IconContainer>
        </CommentHeader>
        <CommentDate>{date}</CommentDate>
        <CommentText>{comment}</CommentText>
      </CommentContainer>
      {(isEditDrawerOpen || isComplaintDrawerOpen) && (
        <DrawerContainer>
          {isEditDrawerOpen && (
            <EditDrawer
              reviewId={clickedReviewId}
              isOpened={isEditDrawerOpen}
              toggleDrawer={toggleEditDrawer}
            />
          )}
          {isComplaintDrawerOpen && (
            <ComplaintDrawer
              reviewId={clickedReviewId}
              isOpened={isComplaintDrawerOpen}
              toggleDrawer={toggleComplaintReview}
            />
          )}
        </DrawerContainer>
      )}
    </>
  );
}
