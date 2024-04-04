import React, { useState } from 'react';
import styled from 'styled-components';

function PrimaryButton(props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <PrimaryBtn onClick={handleClick} clicked={isClicked}>
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
    props.clicked ? props.theme.color.green[500] : props.theme.color.gray[300]};
`;

const PrimaryBtnTitle = styled.p`
  color: ${(props) => props.theme.color.white};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
