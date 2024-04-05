import { atom } from 'recoil';

export const currentPositionStoresState = atom({
  key: 'currentPositionStoresState',
  default: [],
});

// 위치 상태 전역 관리 (초기값 부여)
export const currentPositionState = atom({
  key: 'currentPositionState',
  default: {
    level: 4,
    center: {
      lat: 37.5465029,
      lng: 127.065263,
    },
  },
});

export const currentPositionStatusState = atom({
  key: 'currentPositionStatusState',
  default: 'Idle',
});
