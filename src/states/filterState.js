import { atom } from 'recoil';
import { PLACE_TYPES } from '@/constants';

export const initialCategoryState = atom({
  key: 'initialCategoryState',
  default: PLACE_TYPES.map((type) => ({
    name: type,
    clicked: type === '식당',
  })),
});

export const selectedCategoryState = atom({
  key: 'selectedCategoryState',
  default: ['식당'],
});

// true: 전체 메뉴 비건, false: 일부 메뉴 비건
export const selectedMenuTypeState = atom({
  key: 'selectedMenuTypeState',
  default: null,
});
