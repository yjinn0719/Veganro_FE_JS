import styled from 'styled-components';

export const PlaceTagBtn = styled.button`
  display: flex;
  height: 50px;
  width: 100%;
  max-width: 103px;
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

export const PlaceTagContent = styled.p`
  flex: 1 0 0;
  color: ${(props) =>
    props.clicked ? props.theme.color.green[500] : props.theme.color.gray[600]};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  ${(props) => props.theme.media.tablet`
    font-size: 16px;
  `}
  ${(props) => props.theme.media.mobile`
    font-size: 14px;
  `}
`;
