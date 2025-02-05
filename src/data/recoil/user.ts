import { atom } from 'recoil';

type UserState = {
  name: string;
  email: string;
};

export const DEFAULT_USER_RECOIL_STATE = {
  name: '',
  email: '',
};

export const userRecoil = atom<UserState>({
  key: 'userRecoilState',
  default: DEFAULT_USER_RECOIL_STATE,
});
