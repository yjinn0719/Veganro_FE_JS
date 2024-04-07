import {
  Container,
  InnerContainer,
  TextBox,
  SubTextBox,
  Text,
  Card,
  TagContainer,
  Tag,
  ButtonContainer,
  Button,
} from './EditMyPage.styles';
import Navbar from '@/components/Navbar/Navbar';
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';

export default function EditMyPage() {
  return (
    <Container>
      <Navbar icon="null" title="프로필 설정" />
      <InnerContainer>
        <TextBox>
          <SubTextBox>
            <Text color="#383838" fontSize={20}>
              닉네임
            </Text>
          </SubTextBox>
          <Card background="#F9F9F9">
            <Text color="#C4C4C4" fontSize={16}>
              가게 이름
            </Text>
          </Card>
        </TextBox>
        <TagContainer>
          <SubTextBox>
            <Text color="#383838" fontSize={20}>
              채식 유형
            </Text>
          </SubTextBox>
          <TagContainer>
            <>
              <Tag width={100} background="#F9F9F9">
                <Text color="#6E6E6E" fontSize={16}>
                  비건
                </Text>
              </Tag>
              <Tag width={100} background="#F9F9F9">
                <Text color="#6E6E6E" fontSize={16}>
                  락토
                </Text>
              </Tag>
              <Tag
                width={100}
                background="rgba(79, 131, 55, 0.10)"
                border="1px #4F8337 solid"
              >
                <Text color="#4F8337" fontSize={16}>
                  오보
                </Text>
              </Tag>
              <Tag width={115} background="#F9F9F9">
                <Text color="#6E6E6E" fontSize={16}>
                  락토-오보
                </Text>
              </Tag>
            </>
            <>
              <Tag width={100} background="#F9F9F9">
                <Text color="#6E6E6E" fontSize={16}>
                  페스코
                </Text>
              </Tag>
              <Tag width={100} background="#F9F9F9">
                <Text color="#6E6E6E" fontSize={16}>
                  플로
                </Text>
              </Tag>
              <Tag width={100} background="#F9F9F9">
                <Text color="#6E6E6E" fontSize={16}>
                  플렉시테리언
                </Text>
              </Tag>
            </>
          </TagContainer>
        </TagContainer>
        <ButtonContainer>
          <PrimaryButton title="취소" />
          <PrimaryButton title="저장하기" />
        </ButtonContainer>
      </InnerContainer>
    </Container>
  );
}
