import styled from 'styled-components';

export default function EditMyPage() {
  return (
    <Container>
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
            <Tag width={100} background="#F9F9F9">
              <Text color="#6E6E6E" fontSize={16}>
                비건
              </Text>
            </Tag>
            <Tag width={100} background="#F9F9F9">
              <Text color="#6E6E6E" fontSize={16}>
                페스코
              </Text>
            </Tag>
            <Tag
              width={100}
              background="rgba(79, 131, 55, 0.10)"
              border="1px #4F8337 solid"
            >
              <Text color="#4F8337" fontSize={16}>
                락토
              </Text>
            </Tag>
            <Tag width={115} background="#F9F9F9">
              <Text color="#6E6E6E" fontSize={16}>
                플렉시테리안
              </Text>
            </Tag>
            <Tag width={100} background="#F9F9F9">
              <Text color="#6E6E6E" fontSize={16}>
                오보
              </Text>
            </Tag>
            <Tag width={100} background="#F9F9F9">
              <Text color="#6E6E6E" fontSize={16}>
                락토-오보
              </Text>
            </Tag>
          </TagContainer>
        </TagContainer>
      </InnerContainer>
      <ButtonContainer>
        <Button background="#C4C4C4">
          <Text color="white" fontSize={18}>
            취소
          </Text>
        </Button>
        <Button background="#4F8337">
          <Text color="white" fontSize={18}>
            저장하기
          </Text>
        </Button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 90px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  background: white;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 658px;
  display: inline-flex;
`;

const InnerContainer = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  display: inline-flex;
`;

const TextBox = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: flex;
`;

const SubTextBox = styled.div`
  height: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  display: flex;
`;

const Text = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}px;
  font-family: 'Pretendard';
  font-weight: 600;
  word-wrap: break-word;
`;

const Card = styled.div`
  width: 448px;
  height: 50px;
  padding: 12px;
  background: ${(props) => props.background};
  border-radius: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
`;

const TagContainer = styled.div`
  height: 148px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: flex;
`;

const Tag = styled.div`
  width: ${(props) => props.width}px;
  padding: 12px;
  background: ${(props) => props.background};
  border-radius: 100px;
  border: ${(props) => props.border};
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;

const ButtonContainer = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  display: inline-flex;
`;

const Button = styled.div`
  flex: 1 1 0;
  height: 50px;
  padding: 12px;
  background: ${(props) => props.background};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: flex;
`;
