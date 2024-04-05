import styled from 'styled-components';

export const BookmarkContainer = styled.button`
  display: flex;
  width: 100%;
  max-width: 448px;
  margin: auto;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid
    ${(props) =>
      props.clicked
        ? props.theme.color.green[500]
        : props.theme.color.gray[800]};
  background: ${(props) => props.theme.color.white};
  cursor: pointer;
`;

export const BookmarkContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  p {
    color: ${(props) =>
      props.clicked
        ? props.theme.color.green[500]
        : props.theme.color.gray[800]};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
