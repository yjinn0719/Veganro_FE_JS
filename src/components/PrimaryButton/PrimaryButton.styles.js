import styled from 'styled-components';

export const PrimaryBtn = styled.button`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 12px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: ${(props) =>
    props.disabled
      ? props.theme.color.gray[300]
      : props.theme.color.green[500]};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const PrimaryBtnTitle = styled.p`
  color: ${(props) => props.theme.color.white};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
