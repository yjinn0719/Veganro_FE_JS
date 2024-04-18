import React, { useEffect } from 'react';
import TabBar from '@/components/TabBar/TabBar';
import Navbar from '@/components/Navbar/Navbar';
import { useGetUserData } from '../../hooks/useUser';
import MenuButton from '@/components/MenuButton/MenuButton';
import Loading from '@/components/Loading/Loading';
import { useNavigate } from 'react-router-dom';
import { notify } from '../../hooks/useToast';

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
  const navigate = useNavigate();

  const {
    data: userData,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetUserData();

  if (isLoading) return <Loading />;
  if (isError) {
    notify('error', '로그인이 되어있는지 확인해주세요.');
    navigate('/');
  }
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
