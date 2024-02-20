import { useEffect } from 'react';
import { theme } from 'antd';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';

function Login() {
  const { token } = theme.useToken();

  useEffect(() => {
    const originalTitle = document.title;
    document.title += ' - Login';

    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <LoginWrapper $backgroundColor={token.colorBgBase}>
      <LoginSpace>
        <LoginHeader />
        <LoginForm />
      </LoginSpace>
    </LoginWrapper>
  );
}

export default Login;

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
