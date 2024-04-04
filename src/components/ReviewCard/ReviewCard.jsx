import {
  CommentContainer,
  CommentHeader,
  CommentInfo,
  CommentTitle,
  CommentTag,
  TagText,
  IconContainer,
  CommentText,
  CommentDate,
  IconDot,
} from './ReviewCard.styles';

export default function ReviewCard({
  nickname = 'Anonymous',
  veganLevel = 'Not specified',
  comment = 'No comment provided',
  date = '2021-09-01',
}) {
  return (
    <CommentContainer>
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
  );
}
