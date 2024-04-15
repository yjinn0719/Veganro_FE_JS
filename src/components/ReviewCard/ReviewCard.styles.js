import styled from 'styled-components';

const CommentContainer = styled.div`
  width: 100%;
  padding: 12px;
  background: #f9f9f9;
  border-radius: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  display: inline-flex;
`;

const CommentHeader = styled.div`
  align-self: stretch;
  justify-content: space-between;
  align-items: flex-start;
  display: inline-flex;
`;

const CommentInfo = styled.div`
  width: 273.5px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  display: flex;
`;

const CommentTitle = styled.div`
  color: #383838;
  font-size: 14px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

const CommentTag = styled.div`
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 4px;
  padding-bottom: 4px;
  background: rgba(79, 131, 55, 0.1);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
`;

const TagText = styled.div`
  color: #4f8337;
  font-size: 12px;
  font-family: 'Pretendard';
  font-weight: 600;
  word-wrap: break-word;
`;

const IconContainer = styled.button`
  width: 16px;
  height: 16px;
  position: relative;
`;

const IconDot = styled.div`
  width: 3px;
  height: 3px;
  left: 6.5px;
  top: ${({ top }) => top}px;
  position: absolute;
  background: #6e6e6e;
`;
const CommentDate = styled.div`
  color: #6e6e6e;
  font-size: 12px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

const CommentText = styled.div`
  color: #6e6e6e;
  font-size: 14px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
`;

const DrawerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  DrawerContainer,
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
  Container,
};
