import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: #fff;
`;

const ProfileWrapper = styled.div`
  height: calc(100vh - 48px);
  position: relative;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  top: 50px;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;

const ProfileContent = styled.div`
  width: 100%;
  height: 271px;
  padding-top: 32px;
  padding-bottom: 32px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  display: flex;
`;

const AvatarContainer = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  display: flex;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 9999px;
`;

const Badge = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  background: rgba(79, 131, 55, 0.1);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: flex;
  color: #4f8337;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 600;
  word-wrap: break-word;
`;

const Nickname = styled.div`
  color: #1f1f1f;
  font-size: 32px;
  font-family: Pretendard;
  font-weight: 700;
  word-wrap: break-word;
`;
const BadgeText = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

export {
  Container,
  ProfileWrapper,
  ProfileContent,
  AvatarContainer,
  Avatar,
  Badge,
  Nickname,
  BadgeText,
};
