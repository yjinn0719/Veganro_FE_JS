import styled from 'styled-components';

export const SecondaryBtn = styled.button`
  display: inline-flex;
  height: 48px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  border-radius: 100px;
  background: ${(props) => props.theme.color.gray[800]};
`;

export const SecondaryBtnTitle = styled.p`
  color: ${(props) => props.theme.color.white};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
