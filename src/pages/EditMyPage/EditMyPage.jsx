import { useState } from 'react';
import {
  Container,
  InnerContainer,
  TextBox,
  SubTextBox,
  Text,
  TagContainer,
  ButtonContainer,
  VeganTagContainer,
  Icon,
  ButtonContent,
} from './EditMyPage.styles';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar/Navbar';
import { IoInformationCircle } from 'react-icons/io5';
import SecondaryButton from '@/components/SecondaryButton/SecondaryButton';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import VeganTag from '../../components/VeganTag/VeganTag';
import InputBox from '../../components/InputBox/InputBox';
import { updateUserData } from '../../apis/api/userInfoApi';
import { useNavigate } from 'react-router-dom';
import { notify } from '@/hooks/useToast';

export default function EditMyPage({ title = '프로필 설정', nickname }) {
  const [newNickname, setNewNickname] = useState(nickname);
  const [activeTag, setActiveTag] = useState('');
  const { userid } = useParams();
  const navigate = useNavigate();

  const handleNicknameChange = (e) => {
    setNewNickname(e.target.value);
  };

  const handleTagClick = (tag) => {
    setActiveTag(tag);
  };
  const handleSave = async () => {
    try {
      await updateUserData({ nickname: newNickname, tag: activeTag });
      notify('success', '프로필이 등록되었습니다.');
      navigate(`/`);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMessage('이미 사용 중인 닉네임입니다.');
      } else {
        console.error(error);
      }
    }
  };
  const isButtonEnabled = newNickname && newNickname.length > 0; // 조건문으로 확인

  return (
    <Container>
      <Navbar icon="null" title={title} />
      <InnerContainer>
        <TextBox>
          <SubTextBox>
            <Text color="#383838" fontSize={20}>
              닉네임
            </Text>
          </SubTextBox>
          <InputBox
            placeholder="닉네임을 입력해주세요"
            value={newNickname}
            onChange={handleNicknameChange}
          />
        </TextBox>
        <TagContainer>
          <SubTextBox>
            <Text color="#383838" fontSize={20}>
              채식 유형
            </Text>
            <Icon>
              <IoInformationCircle size="20" />
            </Icon>
          </SubTextBox>
          <TagContainer>
            <VeganTagContainer>
              <VeganTag
                title="비건"
                isActive={activeTag === '비건'}
                onClick={() => handleTagClick('비건')}
              />
              <VeganTag
                title="락토"
                isActive={activeTag === '락토'}
                onClick={() => handleTagClick('락토')}
              />
              <VeganTag
                title="오보"
                isActive={activeTag === '오보'}
                onClick={() => handleTagClick('오보')}
              />
              <VeganTag
                title="락토-오보"
                isActive={activeTag === '락토-오보'}
                onClick={() => handleTagClick('락토-오보')}
              />
              <VeganTag
                title="페스코"
                isActive={activeTag === '페스코'}
                onClick={() => handleTagClick('페스코')}
              />
              <VeganTag
                title="플로"
                isActive={activeTag === '플로'}
                onClick={() => handleTagClick('플로')}
              />
              <VeganTag
                title="플렉시테리언"
                isActive={activeTag === '플렉시테리언'}
                onClick={() => handleTagClick('플렉시테리언')}
              />
            </VeganTagContainer>
          </TagContainer>
        </TagContainer>
        <ButtonContent>
          <ButtonContainer>
            <SecondaryButton
              title="취소"
              color="gray"
              onClick={() => navigate(`/user/${userid}`)}
            />
          </ButtonContainer>
          <ButtonContainer>
            <PrimaryButton
              title="저장하기"
              isEnabled={isButtonEnabled}
              onClick={handleSave}
            />
          </ButtonContainer>
        </ButtonContent>
      </InnerContainer>
    </Container>
  );
}
