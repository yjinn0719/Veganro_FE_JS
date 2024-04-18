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
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid
    ${(props) =>
      props.clicked ? props.theme.color.white : props.theme.color.gray[300]};
  background: ${(props) =>
    getBackgroundColor(props.clicked, props.title, props.theme)};
  box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.1);
  transition: all 0.3s ease-in;

  img {
    width: 18px;
    height: 18px;
    &.clicked {
      filter: invert(100%);
    }
  }

  &:hover {
    box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.3);
  }

  ${(props) => props.theme.media.tablet`
      padding: 8px 12px;
      gap: 6px;
  `}

  ${(props) => props.theme.media.mobile`
      padding: 6px 8px;
      gap: 4px;
  `}
`;

export const PlaceCategoryTitle = styled.p`
  color: ${(props) =>
    props.clicked ? props.theme.color.white : props.theme.color.gray[700]};
  font-weight: 500;

  ${(props) => props.theme.media.tablet`
      font-size: 14px;
  `}

  ${(props) => props.theme.media.mobile`
      font-size: 12px;
  `}
`;
