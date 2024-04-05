import { atom } from 'recoil';

const defaultStoreInfo = {
  id: '1',
  tel: '',
  img: '',
  address: '',
  zonecode: '',
  name: '',
  category: '',
  longitude: null,
  latitude: null,
};

export const storeInfoState = atom({
  key: 'storeInfoState',
  default: defaultStoreInfo,
});

export const storeInfoStatusState = atom({
  key: 'storeInfoStatusState',
  default: 'Idle',
});
