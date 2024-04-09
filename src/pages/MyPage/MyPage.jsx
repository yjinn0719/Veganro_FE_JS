import TabBar from '@/components/TabBar/TabBar';
import Navbar from '@/components/Navbar/Navbar';
import {
  Container,
  ProfileWrapper,
  ProfileContent,
  AvatarContainer,
  Avatar,
  Badge,
  Nickname,
} from './MyPage.styles';

export default function MyPage({
  veganTag = '페스코테리안',
  nickname = '나는야 비건맨',
  url = 'https://images.unsplash.com/photo-1606780009403-2f3c4b1e1f0f',
}) {
  return (
    <Container>
      <Navbar icon="setting" title="마이페이지" />
      <ProfileWrapper>
        <ProfileContent>
          <AvatarContainer>
            <Avatar img={url} />
            <Badge>
              <div>{veganTag}</div>
            </Badge>
          </AvatarContainer>
          <Nickname>{nickname}</Nickname>
        </ProfileContent>
        <TabBar />
      </ProfileWrapper>
    </Container>
  );
}
