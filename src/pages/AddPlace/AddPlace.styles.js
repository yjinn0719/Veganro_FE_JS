import styled from 'styled-components';

export const MapContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;
export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin-top: 50px;
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

export const AddPlaceSearch = styled.p`
  white-space: nowrap;
  display: flex;
  color: ${(props) => props.theme.color.green[500]};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const AddressInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%; // 컨테이너의 너비를 부모에 맞춥니다.
`;
