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
  nickname,
  veganLevel,
  comment,
  date,
}) {
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
          <IconContainer onClick={click}>
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
