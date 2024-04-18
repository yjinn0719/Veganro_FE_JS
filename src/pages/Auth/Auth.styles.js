import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: inline-flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.color.green[300]};
  gap: 45px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const LogoContent = styled.p`
  color: ${(props) => props.theme.color.white};
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.48px;
`;

export const NoLogin = styled.p`
  color: ${(props) => props.theme.color.gray[100]};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: underline;
  cursor: default;
`;

export const LoginBtnContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
