import { Button } from 'antd';
import { useTheme } from './ThemeContext';
// 예시
function ThemeSwitcher() {
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} style={{ position: 'absolute', top: 0, right: 0 }}>
      {currentTheme === 'light' ? '어두운 모드' : '밝은 모드'}
    </Button>
  );
}

export default ThemeSwitcher;
