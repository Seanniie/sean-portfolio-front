import { useEffect } from 'react';
import { Space } from 'antd';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';

function Login() {
  useEffect(() => {
    const originalTitle = document.title;
    document.title += ' - Login';

    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <LoginWrapper>
      <Space direction="vertical" align="center">
        <LoginHeader />
        <LoginForm />
      </Space>
    </LoginWrapper>
  );
}

export default Login;

const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
