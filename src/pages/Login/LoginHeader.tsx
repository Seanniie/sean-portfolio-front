import { Space, Typography } from 'antd';

const { Title } = Typography;

function LoginHeader() {
  return (
    <Space direction="vertical" align="center" size="small">
      <Title style={{ fontWeight: 'bold', color: '#1890ff' }}>Sean&apos;s Place</Title>
      <Title level={3}>로그인</Title>
    </Space>
  );
}

export default LoginHeader;
