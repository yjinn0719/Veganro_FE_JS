import styled from 'styled-components';

export const getBackgroundColor = (clicked, title, theme) => {
  switch (title) {
    case '식당':
      return clicked ? theme.color.green[500] : theme.color.white;
    case '카페':
      return clicked ? theme.color.beige[500] : theme.color.white;
    case '술집':
      return clicked ? theme.color.burgundy[500] : theme.color.white;
    case '마켓':
      return clicked ? theme.color.skyblue[500] : theme.color.white;
    default:
      return theme.color.white;
  }
};

export const PlaceCategoryBtn = styled.button`
  display: inline-flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 4px;
  border: 1px solid
    ${(props) =>
      props.clicked ? props.theme.color.white : props.theme.color.gray[300]};
  background: ${(props) =>
    getBackgroundColor(props.clicked, props.title, props.theme)};
  box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.12);
  transition: all 0.3s ease-in;

  img {
    width: 18px;
    height: 18px;
    &.clicked {
      filter: invert(100%);
    }
  }
`;

export const PlaceCategoryTitle = styled.p`
  color: ${(props) =>
    props.clicked ? props.theme.color.white : props.theme.color.gray[700]};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
