import styled from 'styled-components';

export const getBackgroundColor = (clicked, title, theme) => {
  if (!clicked) return theme.color.white;
  switch (title) {
    case '식당':
      return theme.color.green[500];
    case '카페':
      return theme.color.beige[500];
    case '술집':
      return theme.color.burgundy[500];
    case '기타':
      return theme.color.skyblue[500];
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
      props.clicked ? props.theme.color.white : props.theme.color.gray[800]};
  background: ${(props) =>
    getBackgroundColor(props.clicked, props.title, props.theme)};
  box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.12);
  transition: all 0.3s ease-in;

  img {
    width: 20px;
    height: 20px;
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
