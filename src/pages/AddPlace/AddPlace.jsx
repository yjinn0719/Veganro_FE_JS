import styled from 'styled-components';
import Drawer from '@/components/Drawer';
import { Location } from 'react-ionicons';
import Theme from '@/styles/Theme';

const AddPlace = () => {
  return (
    <Box>
      <Drawer height="auto">
        <Inner className="inner">
          <Title className="title">가게 제보하기</Title>
          <Place>
            <Location color={Theme.color.green[500]} />
            <Text>등록 위치</Text>
          </Place>
          <ButtonSubmit>이 위치로 등록하기</ButtonSubmit>
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
  gap: 16px;
`;
const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Place = styled.div`
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: ${Theme.color.gray[10]};
  color: ${Theme.color.gray[800]};
`;
const Text = styled.span`
  font-size: 16px;
`;
const ButtonSubmit = styled.button`
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: ${Theme.color.green[500]};
  color: ${Theme.color.white};
  transition: all 0.3s ease-in;
  $:hover {
    background-color: ${Theme.color.green[700]};
  }
`;
