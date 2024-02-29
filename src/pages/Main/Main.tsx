import { useEffect } from 'react';
import { theme } from 'antd';
import styled from 'styled-components';
import Button1 from './Button1';
import Button2 from './Button2';

function Main() {
  const { token } = theme.useToken();

  useEffect(() => {
    const originalTitle = document.title;
    document.title += ' - Main';

    return () => {
      document.title = originalTitle;
    };
  }, []);

  useEffect(() => {
    console.log('rerendered main');
  }, []);

  return (
    <LoginWrapper $backgroundColor={token.colorBgBase}>
      <LoginSpace>
        <Button1 />
        <Button2 />
      </LoginSpace>
    </LoginWrapper>
  );
}

export default Main;

interface LoginWrapperProps {
  $backgroundColor: string;
}

const LoginWrapper = styled.div<LoginWrapperProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

const LoginSpace = styled.div`
  display: flex;
  height: 100%;
  width: 40%;
  min-width: 558px;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
