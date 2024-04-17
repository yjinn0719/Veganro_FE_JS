import {
  Wrapper,
  ImageContainer,
  TextBox,
  TopText,
  BodyText,
  BottomText,
} from './Landing.styles';

const Landing = () => {
  return (
    <Wrapper>
      <ImageContainer></ImageContainer>
      <TextBox>
        <TopText>
          내일을 바꾸는 <b>여정</b>
        </TopText>
        <BodyText>내 주변 채식 맛집</BodyText>
        <BottomText>
          <small>바로</small>한 눈에
        </BottomText>
      </TextBox>
    </Wrapper>
  );
};

export default Landing;
