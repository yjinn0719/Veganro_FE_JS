import React, { Suspense } from 'react';
import Spinner from '@/components/Spinner/Spinner';
import TabBar from '@/components/TabBar/TabBar';
import Navbar from '@/components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { useGetUser } from '../../hooks/useUser';
import MenuButton from '@/components/MenuButton/MenuButton';

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
  if (isLoading) return <Spinner />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <Container>
        <Navbar icon="setting" title="마이페이지" />
        <ProfileWrapper>
          <ProfileContent>
            <AvatarContainer>
              <>
                <Avatar src={userData.tag_img.url.basic_url} />
              </>
              <Badge>
                <BadgeText>{userData.tag}</BadgeText>
              </Badge>
            </AvatarContainer>
            <Nickname>{userData.nickname}</Nickname>
          </ProfileContent>
          <TabBar />
        </ProfileWrapper>
      </Container>
      <MenuButton />
    </>
  );
}
