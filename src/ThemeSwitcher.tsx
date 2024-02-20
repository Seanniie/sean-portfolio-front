import { Button } from 'antd';
import useToggleTheme from './assets/hooks/useToggleTheme';

function ThemeSwitcher() {
  const { currentTheme, toggleTheme } = useToggleTheme();

  return (
    <Button onClick={toggleTheme} style={{ position: 'absolute', bottom: 0, left: 0 }}>
      {currentTheme === 'light' ? '어두운 모드' : '밝은 모드'}
    </Button>
  );
}

export default ThemeSwitcher;
