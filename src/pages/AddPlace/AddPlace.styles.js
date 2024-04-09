import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  background: ${(props) => props.theme.color.white};
`;

export const TagContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
`;

export const DateTagContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const AddPlaceText = styled.p`
  overflow: hidden;
  color: ${(props) => props.theme.color.gray[800]};
  text-overflow: ellipsis;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
