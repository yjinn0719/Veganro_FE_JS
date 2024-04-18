import {
  Wrapper,
  Link,
  TextBox,
  TopText,
  BodyText,
  BottomText,
} from './Landing.styles';

const Landing = () => {
  return (
    <Wrapper>
      <Link
        href="https://kdt-gitlab.elice.io/sw_track/class_08/web_project_ii/team05"
        target="_blank"
      />
      <TextBox>
        <TopText>
          한 발자국 더 <b>건강한 길로</b>
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
