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
  address,
  reviewId,
  nickname,
  veganLevel,
  comment,
  date,
  selectedReviewId,
  onSelectReviewId,
  placeId,
  isOpened,
}) {
  const [isReviewCurrentUser, setIsReviewCurrentUser] = useState(false);
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);
  const [isComplaintDrawerOpen, setIsComplaintDrawerOpen] = useState(false);
  const [clickedReviewId, setClickedReviewId] = useState(null);
  console.log(isOpened);

  const { placeid } = useParams();
  const effectivePlaceId = placeId || placeid;
  const { data: myReviews } = useGetMyReviews(effectivePlaceId);
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
      setIsEditDrawerOpen(false);
    }
  };

  const toggleComplaintReview = () => {
    setIsComplaintDrawerOpen(!isComplaintDrawerOpen);
    if (isEditDrawerOpen) {
      setIsComplaintDrawerOpen(false);
    }
  };

  const handleReviewCardClick = () => {
    setClickedReviewId(reviewId);
    onSelectReviewId(reviewId);
    if (isReviewCurrentUser) {
      toggleEditDrawer();
    } else {
      toggleComplaintReview();
    }
  };

  useEffect(() => {
      if(selectedReviewId !== null) {
          if(selectedReviewId !== clickedReviewId) {
              setIsEditDrawerOpen(false);
              setIsComplaintDrawerOpen(false);
          }
      }
  },[selectedReviewId]);

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
      <DrawerContainer>
        {isEditDrawerOpen && (
          <EditDrawer
            address={address}
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
    </>
  );
}
