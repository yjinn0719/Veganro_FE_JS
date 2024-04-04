import React from 'react';
import styled from 'styled-components';

function PrimaryButton(props) {
  return (
    <PrimaryBtn onClick={props.onClick} disabled={!props.isEnabled}>
      <PrimaryBtnTitle>{props.title}</PrimaryBtnTitle>
    </PrimaryBtn>
  );
}

export default PrimaryButton;

const PrimaryBtn = styled.button`
  display: flex;
  width: 448px;
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

const PrimaryBtnTitle = styled.p`
  color: ${(props) => props.theme.color.white};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
