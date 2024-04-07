import styled from 'styled-components';

export const MenuTagBtn = styled.button`
  display: flex;
  height: 50px;
  width: 100%;
  max-width: 218px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  border-radius: 4px;
  background: ${(props) =>
    props.clicked ? '#4F83371A' : props.theme.color.gray[10]};
  border: 1px solid
    ${(props) =>
      props.clicked
        ? props.theme.color.green[500]
        : props.theme.color.gray[10]};
`;

export const MenuTagContent = styled.p`
  color: ${(props) =>
    props.clicked ? props.theme.color.green[500] : props.theme.color.gray[600]};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
