import { useState } from 'react';
import Drawer from '@/components/Drawer/Drawer';
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
} from '@/components/ReviewCard/ReviewCard.styles';

export default function ReviewCard({
  click,
  nickname = 'Anonymous',
  veganLevel = 'Not specified',
  comment = 'No comment provided',
  date = '2021-09-01',
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => {
      click(!prevState);
      return !prevState;
    });
  };

  return (
    <>
      <CommentContainer>
        <CommentHeader>
          <CommentInfo>
            <CommentTitle>{nickname}</CommentTitle>
            <CommentTag>
              <TagText>{veganLevel}</TagText>
            </CommentTag>
          </CommentInfo>
          <IconContainer onClick={toggleDrawer}>
            <IconDot top={6.5} />
            <IconDot top={11.5} />
            <IconDot top={1.5} />
          </IconContainer>
        </CommentHeader>
        <CommentDate>{date}</CommentDate>
        <CommentText>{comment}</CommentText>
      </CommentContainer>
    </>
  );
}
