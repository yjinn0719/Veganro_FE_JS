import React from 'react';
import styled from 'styled-components';
import Drawer from '@/components/Drawer';
import Theme from '@/styles/theme';

const AddPlace = () => {
  return (
    <Box>
      <Drawer height="40">
        <Inner className="inner">
          <Title className="title">가게 제보하기</Title>
        </Inner>
      </Drawer>
    </Box>
  );
};

export default AddPlace;

const Box = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
`;
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 16px;
`;
const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  height: 40px;
  text-align: center;
`;
const Location = styled.p`
  width: 100px;
  padding: 12px 16px;
  font-size: 16px;
  display: flex;
  gap: 6px;
  align-items: center;
  border-radius: 4px;
`;
