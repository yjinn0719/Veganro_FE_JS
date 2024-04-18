import { atom } from 'recoil';
import { PLACE_TYPES } from '@/constants';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'sessionStorageAtom',
  storage: sessionStorage,
});

// Home.jsx category 초기값
export const initialCategoryState = atom({
  key: 'initialCategoryState',
  default: PLACE_TYPES.map((type) => ({
    name: type,
    clicked: type === '식당',
  })),
  effects_UNSTABLE: [persistAtom],
});

// Search.jsx category 초기값
export const selectedCategoryState = atom({
  key: 'selectedCategoryState',
  default: ['식당'],
  effects_UNSTABLE: [persistAtom],
});

// true: 전체 메뉴 비건, false: 일부 메뉴 비건
export const selectedMenuTypeState = atom({
  key: 'selectedMenuTypeState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
