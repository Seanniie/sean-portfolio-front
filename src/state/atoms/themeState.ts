import { atom } from 'recoil';
import { ATOM_KEYS } from './keys';
import { ThemeType } from '@/types/commonTypes';

const themeState = atom<ThemeType>({
  key: ATOM_KEYS.THEME_STATE,
  default: 'light',
});

export default themeState;
