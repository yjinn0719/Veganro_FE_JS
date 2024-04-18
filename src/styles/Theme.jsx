import { css } from 'styled-components';

const sizes = {
  desktop: 1024,
  tablet: 768,
  mobile: 328,
};

const media = {
  desktop: (...args) => css`
    @media (min-width: ${sizes.desktop}px) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (min-width: ${sizes.tablet}px) {
      ${css(...args)}
    }
  `,
  mobile: (...args) => css`
    @media (min-width: ${sizes.mobile}px) and (max-width: ${sizes.tablet -
      1}px) {
      ${css(...args)};
    }
  `,
};

const Theme = {
  color: {
    green: {
      700: '#3D642A',
      500: '#4F8337',
      300: '#A9D097',
      100: '#F6F9F0',
    },
    skyblue: {
      500: '#7DB8E8',
    },
    beige: {
      500: '#A99283',
      300: '#FFF9F5',
      100: '#F7F9F0',
    },
    burgundy: {
      500: '#B53B3B',
    },
    olive: {
      500: '#7A7C22',
    },
    gray: {
      900: '#1F1F1F',
      800: '#383838',
      700: '#4F4F4F',
      600: '#6E6E6E',
      500: '#8F8F8F',
      400: '#ADADAD',
      300: '#C4C4C4',
      200: '#DDDDDD',
      100: '#EFEFEF',
      50: '#F5F5F5',
      10: '#f9f9f9',
    },
    white: '#fff',
  },
  media,
};

export default Theme;
