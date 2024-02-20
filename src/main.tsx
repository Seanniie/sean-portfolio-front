import type { ThemeConfig } from 'antd';
import { ConfigProvider, theme as antdTheme } from 'antd';
import koKR from 'antd/locale/ko_KR';
import dayjs from 'dayjs';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ThemeProvider, useTheme } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import App from '@/App';

dayjs.locale('ko');

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

function ThemedApp() {
  const { currentTheme } = useTheme();

  const defaultThemeConfig: ThemeConfig = {
    token: {
      fontFamily: 'TossFaceFont, sans-serif',
      colorBgBase: '#fff',
      colorText: 'rgb(51, 61, 75)',
    },
    algorithm: [antdTheme.defaultAlgorithm, antdTheme.compactAlgorithm],
    components: {
      Button: {
        colorText: 'rgb(51, 61, 75)',
      },
      Typography: {
        fontFamily: 'TossFaceFont, sans-serif',
      },
    },
  };

  const darkThemeConfig: ThemeConfig = {
    token: {
      fontFamily: 'TossFaceFont, sans-serif',
      colorBgBase: '#202632',
      colorText: '#ffffff',
    },
    algorithm: [antdTheme.darkAlgorithm, antdTheme.compactAlgorithm],
    components: {
      Button: {
        colorText: '#ffffff',
      },
      Typography: {
        fontFamily: 'TossFaceFont, sans-serif',
      },
    },
  };

  const themeConfig = currentTheme === 'light' ? defaultThemeConfig : darkThemeConfig;

  return (
    <ConfigProvider locale={koKR} theme={themeConfig}>
      <App />
      <ThemeSwitcher />
    </ConfigProvider>
  );
}

root.render(
  <ThemeProvider>
    <RecoilRoot>
      <ThemedApp />
    </RecoilRoot>
  </ThemeProvider>,
);
