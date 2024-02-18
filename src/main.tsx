import type { ThemeConfig } from 'antd';
import { ConfigProvider, theme as antdTheme } from 'antd';
import koKR from 'antd/locale/ko_KR';
import dayjs from 'dayjs';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ThemeProvider, useTheme } from './ThemeContext';
import App from '@/App';

dayjs.locale('ko');

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

function ThemedApp() {
  const { theme } = useTheme();

  const defaultThemeConfig: ThemeConfig = {
    // token: {
    //   colorPrimary: '#1890ff',
    // },
    algorithm: antdTheme.defaultAlgorithm,
  };

  const darkThemeConfig: ThemeConfig = {
    // token: {
    //   colorPrimary: '#1d1d1d',
    // },
    algorithm: antdTheme.darkAlgorithm,
  };

  const themeConfig = theme === 'default' ? defaultThemeConfig : darkThemeConfig;

  return (
    <ConfigProvider locale={koKR} theme={themeConfig}>
      <App />
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
