import { Button } from 'antd';
import { useTheme } from './ThemeContext';
// 예시
function ThemeSwitcher() {
  const { toggleTheme } = useTheme();

  return <Button onClick={toggleTheme}>Switch Theme</Button>;
}

export default ThemeSwitcher;
