import styled from 'styled-components';
const TitleContainer = styled.div`
  align-self: stretch;
  height: 40px;
  padding-top: 12px;
  padding-bottom: 12px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;
const Title = styled.button`
  text-align: center;
  color: ${(props) => props.theme.color.gray[800]};
  font-size: 20px;
  font-weight: 600;
  word-wrap: break-word;
`;

const FormContentContainer = styled.div`
  align-self: stretch;
  height: 218px;
  padding-top: 16px;
  padding-bottom: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  display: flex;
`;

const AddressInputContainer = styled.div`
  width: 100%;
  height: 50px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  background: ${(props) => props.theme.color.gray[10]};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  display: inline-flex;
`;

const LocationIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.color.green[500]};
`;

const AddressText = styled.div`
  color: ${(props) => props.theme.color.gray[800]};
  font-size: 16px;
  font-weight: 600;
  word-wrap: break-word;
`;

const ReviewTextAreaContainer = styled.div`
  width: 100%;
  height: 120px;
  padding: 12px;
  background: ${(props) => props.theme.color.gray[10]};
  border-radius: 4px;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
`;

const ReviewPlaceholder = styled.textarea`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.color.gray[800]};
  font-size: 16px;
  word-wrap: break-word;
  background: none;
  border: none;
  &::placeholder {
    color: ${(props) => props.theme.color.gray[300]};
  }
`;

const SubmitButtonContainer = styled.div`
  width: 100%;
  height: 50px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  background: #c4c4c4;
  border-radius: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: flex;
`;

const SubmitButtonText = styled.button`
  color: white;
  font-size: 16px;
  font-weight: 600;
  word-wrap: break-word;
`;

export {
  TitleContainer,
  Title,
  FormContentContainer,
  AddressInputContainer,
  LocationIcon,
  AddressText,
  ReviewTextAreaContainer,
  ReviewPlaceholder,
  SubmitButtonContainer,
  SubmitButtonText,
};
