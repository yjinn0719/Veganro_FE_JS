import styled from 'styled-components';

export const DateTagBtn = styled.button`
  display: flex;
  width: 50px;
  height: 50px;
  padding: 12px 16px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  background: ${(props) =>
    props.clicked ? '#4F83371A' : props.theme.color.gray[10]};
  border: 1px solid
    ${(props) =>
      props.clicked
        ? props.theme.color.green[500]
        : props.theme.color.gray[10]};
`;

export const DateTagContent = styled.p`
  color: ${(props) =>
    props.clicked ? props.theme.color.green[500] : props.theme.color.gray[600]};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
