import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 400px;
  width: calc(100% - 480px);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;
export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(/src/assets/images/logo.png);
  background-position: center;
  background-repeate: no-repeat;
  background-size: 200px 200px;
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;
export const TopText = styled.p`
  font-size: 36px;
  font-weight: 800;
  color: ${(props) => props.theme.color.green[500]};
`;
export const BodyText = styled.p`
  font-size: 40px;
  font-weight: 800;
  padding: 12px 18px;
  border-radius: 100px;
  background-color: white;
  box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.1);
  color: ${(props) => props.theme.color.green[500]};
  b {
    font-weight: 900;
  }
`;
export const BottomText = styled.p`
  font-size: 36px;
  font-weight: 800;
  color: ${(props) => props.theme.color.green[500]};
  display: flex;
  align-items: center;
  small {
    font-size: 28px;
    display: inline-block;
    margin-right: 8px;
    position: relative;
    &::after {
      content: '';
      width: 100%;
      height: 2px;
      position: absolute;
      bottom: -4px;
      left: 0;
      background-color: ${(props) => props.theme.color.green[500]};
    }
  }
`;
export const Button = styled.button``;
