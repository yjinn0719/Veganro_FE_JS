import styled from 'styled-components';
import {
  SecondBtn,
  SecondBtnContent,
} from '../SecondaryButton/SecondaryButton.styles';

export const Container = styled.div`
  width: 100%;
  padding: 16px;
  z-index: 999;
  position: absolute;
  top: 98px;
  left: 0;
  right: 0;
`;
export const Inner = styled.div`
  width: 100%;
  padding: 24px 16px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.color.gray[300]};
  background: ${(props) => props.theme.color.white};
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.1);
  transition: all 0.2s ease-in;
`;
export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.color.gray[700]};
`;
export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;
export const SaveButton = styled(SecondBtn)`
  max-width: 100%;
`;
export const SaveButtonTxt = styled(SecondBtnContent)`
  font-weight: 500;
  font-size: 16px;
`;
