import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: #fff;
`;

const ProfileWrapper = styled.div`
  position: relative;
  top: 50px;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;

const ProfileContent = styled.div`
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

const Avatar = styled.div`
  background-image: url(${(props) => props.img});
  width: 100px;
  height: 100px;
  background: #c4c4c4;
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
  display: inline-flex;
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

export {
  Container,
  ProfileWrapper,
  ProfileContent,
  AvatarContainer,
  Avatar,
  Badge,
  Nickname,
};
