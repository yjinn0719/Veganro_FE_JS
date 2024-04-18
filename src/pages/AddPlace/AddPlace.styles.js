import styled from 'styled-components';

export const MapContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;
export const ContentWrapper = styled.div`
  width: 100%;
`;
export const MainContainer = styled.div`
  position: absolute;
  top: 48px;
  display: flex;
  width: 100%;
  height: calc(100% - 48px);
  overflow-y: scroll;
  padding: 0 16px 16px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  background: ${(props) => props.theme.color.white};
  &::-webkit-scrollbar {
    display: none;
  }
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
  color: ${(props) => props.theme.color.gray[800]};
  text-overflow: ellipsis;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: -6px;
  small {
    font-size: 80%;
    color: ${(props) => props.theme.color.gray[500]};
    font-weight: 500;
  }
  ${(props) => props.theme.media.desktop`
    font-size: 16px;
  `}
  ${(props) => props.theme.media.mobile`
    font-size: 14px;
  `}
`;

export const AddPlaceSearch = styled.p`
  white-space: nowrap;
  display: flex;
  color: ${(props) => props.theme.color.gray[500]};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  position: absolute;
  cursor: pointer;
  right: 8px;
  transition: all 0.2s ease-in;
  &:hover {
    svg {
      color: ${(props) => props.theme.color.green[500]};
    }
  }
`;

export const AddressInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  position: relative;
`;
