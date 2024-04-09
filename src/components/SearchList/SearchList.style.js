import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  width: 448px;
  padding: 16px 12px;
  align-items: flex-start;
  gap: 12px;
  border-radius: 4px;
  border: 1px solid var(--Gray-100, #efefef);
  background: var(--White, #fff);
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;
export const PlaceName = styled.div`
  overflow: hidden;
  color: var(--Gray-800, #383838);
  font-feature-settings:
    'clig' off,
    'liga' off;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Distance = styled.div`
  color: var(--Gray-600, #6e6e6e);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Address = styled.div`
  color: var(--Gray-700, #4f4f4f);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CategoryIcon = styled.div`
  position: absolute;
  border: 1px #8f8f8f solid;
`;
