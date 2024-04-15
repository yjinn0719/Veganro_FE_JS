import { atom } from 'recoil';

export const selectedCategoryState = atom({
  key: 'selectedCategoryState',
  default: [],
});

// true: 전체 메뉴 비건, false: 일부 메뉴 비건
export const selectedMenuTypeState = atom({
  key: 'selectedMenuTypeState',
  default: null,
});
