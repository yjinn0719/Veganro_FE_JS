import { startTransition } from 'react';
import styled from 'styled-components';

export const SecondBtn = styled.button`
  display: flex;
  height: 50px;
  width: 100%;
  max-width: 261px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 4px;
  background-color: ${(props) => {
    switch (props.color) {
      case 'green':
        return props.theme.color.green[500];
      case 'gray':
        return props.theme.color.gray[300];
    }
  }};
`;

export const SecondBtnContent = styled.p`
  color: ${(props) => props.theme.color.white};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
