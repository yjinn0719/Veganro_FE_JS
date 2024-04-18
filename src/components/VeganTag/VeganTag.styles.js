import styled from 'styled-components';

export const VegTagButton = styled.button`
  display: flex;
  height: 50px;
  min-width: 100px;
  width: fit-content;
  padding: 12px 16px;
  align-items: center;
  border-radius: 100px;
  background: ${(props) =>
    props.$isActive ? '#4F83371A' : props.theme.color.gray[10]};
  border: 1px solid
    ${(props) =>
      props.$isActive
        ? props.theme.color.green[500]
        : props.theme.color.gray[10]};
`;

export const VegTagTitle = styled.p`
  flex: 1 0 0;
  color: ${(props) =>
    props.$isActive
      ? props.theme.color.green[500]
      : props.theme.color.gray[600]};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
