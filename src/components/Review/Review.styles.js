import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 16px;
  background: white;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: inline-flex;
`;

const ReviewWrapper = styled.div`
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  display: inline-flex;
`;

const Header = styled.div`
  align-self: stretch;
  padding-bottom: 6px;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
`;

const ReviewCount = styled.div`
  height: 19px;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  display: flex;
`;

const ReviewTitle = styled.div`
  color: #1f1f1f;
  font-size: 16px;
  font-weight: 600;
  word-wrap: break-word;
`;

const ReviewNumber = styled.div`
  color: #8f8f8f;
  font-size: 10px;
  font-weight: 500;
  word-wrap: break-word;
`;

const WriteReview = styled.button`
  color: ${(props) => props.theme.color.green[500]};
  font-size: 12px;
  font-weight: 600;
  word-wrap: break-word;
`;

const ReviewContent = styled.div`
  align-self: stretch;
  height: 120px;
  padding: 16px 12px;
  background: #f9f9f9;
  border-radius: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  display: flex;
`;

const NoReview = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: inline-flex;
`;

const NoReviewText = styled.div`
  color: #c4c4c4;
  font-size: 12px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

const LoadMoreButtonContainer = styled.div`
  padding: 8px 12px;
  box-sizing: border-box;
  background: white;
  border-radius: 100px;
  border: 1px solid #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.1);
  transition: all 0.2s ease-in;
  cursor: pointer;
  &:hover {
    box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.3);
  }
`;

const LoadMoreButtonText = styled.button`
  color: #6e6e6e;
  font-size: 12px;
  font-weight: 500;
  word-wrap: break-word;
`;

const LoadMoreButtonIconContainer = styled.div`
  width: 12px;
  height: 12px;
  position: relative;
`;

const LoadMoreButtonIcon = styled.div`
  width: 6.75px;
  height: 3.38px;
  left: 2.62px;
  top: 4.31px;
  position: absolute;
  border: solid 1px #c4c4c4;
`;

export {
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
  LoadMoreButtonIcon,
};
