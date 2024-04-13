import TabBar from '@/components/TabBar/TabBar';
import Navbar from '@/components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { useGetUser } from '../../hooks/useUser';
import {
  Container,
  ProfileWrapper,
  ProfileContent,
  AvatarContainer,
  Avatar,
  Badge,
  Nickname,
  BadgeText,
} from './MyPage.styles';

export default function MyPage() {
  const { userid } = useParams();
  const { data: userData, isLoading, isError, error } = useGetUser(userid);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <Container>
      <Navbar icon="setting" title="마이페이지" />
      <ProfileWrapper>
        <ProfileContent>
          <AvatarContainer>
            <Avatar img={userData.tag_img} />
            <Badge>
              <BadgeText>{userData.tag}</BadgeText>
            </Badge>
          </AvatarContainer>
          <Nickname>{userData.nickname}</Nickname>
        </ProfileContent>
        <TabBar />
      </ProfileWrapper>
    </Container>
  );
}
