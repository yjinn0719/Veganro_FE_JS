import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
`;

export const CardContent = styled.div`
  display: flex;
  width: 100%;
  padding: 16px 12px;
  align-items: flex-start;
  gap: 12px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color.gray[100]};
  background: ${(props) => props.theme.color.white};
`;

export const Thumbnail = styled.div`
  display: flex;
  width: 54px;
  height: 54px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 3.6px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const Title = styled.p`
  display: -webkit-box;
  max-width: 180px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: ${(props) => props.theme.color.gray[900]};
  text-overflow: ellipsis;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Distance = styled.p`
  color: ${(props) => props.theme.color.gray[600]};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Address = styled.p`
  color: ${(props) => props.theme.color.gray[700]};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Number = styled.p`
  color: ${(props) => props.theme.color.gray[600]};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
