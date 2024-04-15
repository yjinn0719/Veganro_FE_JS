import styled, { keyframes } from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';
import { Button } from '@/components/RoundButton/RoundButton.style';

export const ModalWrapper = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 16px;
  position: absolute;
  bottom: 64px;
  z-index: 999;
`;
export const Inner = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.color.gray[300]};
  background: ${(props) => props.theme.color.white};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.1);
`;
export const InfoBox = styled.div`
  display: flex;
  gap: 12px;
`;
export const Thumbsnail = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export const PlaceTypeIcon = styled.img`
  width: 100%;
  height: 100%;
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.color.gray[800]};
`;
export const MenuTag = styled.div`
  padding: 4px 6px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.color.green[500]};
  background: rgba(79, 131, 55, 0.1);
`;
export const Distance = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
`;
export const DistanceIcon = styled.div`
  width: 16px;
  height: 16px;
  color: ${(props) => props.theme.color.gray[600]};
`;
export const DistanceText = styled.div`
  color: ${(props) => props.theme.color.gray[600]};
  font-size: 14px;
  font-weight: 500;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;
export const RedirectButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.color.green[500]};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in;
  &:hover {
    transform: rotate(90deg);
  }
`;
export const RedirectButtonText = styled.small`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.color.green[500]};
`;
export const ArrowIcon = styled(FaArrowUp)`
  fill: white;
  width: 20px;
  height: 20px;
`;
export const CloseButton = styled(Button)`
  position: absolute;
  bottom: 16px;
  left: 50%;
  z-index: 999;
  transform: translateX(-50%);
`;
