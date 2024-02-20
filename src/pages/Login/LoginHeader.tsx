import { Typography, theme } from 'antd';
import styled from 'styled-components';
import { useTheme } from '@/ThemeContext';
import videoSrcDark from '@/assets/mp4/Toss_Logo_Motion_Dark_1920.mp4'; // 비디오 파일의 경로를 올바르게 지정하세요.
import videoSrcLight from '@/assets/mp4/Toss_Logo_Motion_Light_1920.mp4'; // 비디오 파일의 경로를 올바르게 지정하세요.

const { Title } = Typography;

function LoginHeader() {
  const { token } = theme.useToken();
  const { currentTheme } = useTheme();

  const videoSrc = currentTheme === 'light' ? videoSrcLight : videoSrcDark;

  const titleStyle = {
    fontWeight: 'bold',
    color: '#0064FF',
    width: '100%',
  };

  const highlightStyle = {
    fontSize: 48,
    fontWeight: 'bold',
    color: token.colorText,
  };

  return (
    <LoginHeaderWrapper>
      <div style={{ display: 'contents' }}>
        <VideoContainer>
          <div>
            <StyledVideo key={currentTheme} autoPlay loop muted>
              <source src={videoSrc} type="video/mp4" />
              지원하지 않는 video tag입니다.
            </StyledVideo>
          </div>
        </VideoContainer>
      </div>
      <Title level={2} style={titleStyle}>
        Welcome <span style={highlightStyle}>t</span>
        <span style={highlightStyle}>o s</span>ean&apos;s <span style={highlightStyle}>s</span>pace
      </Title>
    </LoginHeaderWrapper>
  );
}

export default LoginHeader;

const LoginHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const VideoContainer = styled.div`
  width: 40%;
  margin: auto;

  & > div {
    border-radius: 16px;
    opacity: 1;
    aspect-ratio: 1.77391 / 1;
    overflow: hidden;
    width: 100%;
    will-change: transform;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 0;
  display: block;
  object-fit: cover;
  background-color: rgba(255, 255, 255, 0);
  object-position: 50% 50%;
`;
