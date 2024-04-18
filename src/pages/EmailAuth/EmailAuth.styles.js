import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.color.green[100]};
`;
export const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 44px;
  z-index: 9;
  position: absolute;
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const LogoContent = styled.p`
  color: ${(props) => props.theme.color.green[500]};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.48px;
`;
export const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  padding: 0 40px;
  input {
    border: solid 1px ${(props) => props.theme.color.gray[200]};
    transition: all 0.2s ease-in;
    &:focus {
      border-color: ${(props) => props.theme.color.green[500]};
    }
  }
`;
export const BackButton = styled.button`
  color: ${(props) => props.theme.color.gray[500]};

  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: underline;
  transition: all 0.2s ease-in;
  &:hove {
    color: ${(props) => props.theme.color.gray[700]};
  }
`;
