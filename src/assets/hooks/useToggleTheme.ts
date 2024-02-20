import { useRecoilState } from 'recoil';
import themeState from '@/state/atoms/themeState';

function useToggleTheme() {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return { currentTheme: theme, toggleTheme };
}

export default useToggleTheme;
