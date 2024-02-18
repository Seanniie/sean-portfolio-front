import { Form, Input, Space, theme } from 'antd';

function LoginForm() {
  const [loginForm] = Form.useForm();
  const { token } = theme.useToken();

  return (
    <Space
      direction="vertical"
      align="center"
      size="small"
      style={{
        border: '1px solid',
        borderRadius: token.borderRadiusLG,
        borderColor: token.colorBorder,
        padding: 200,
      }}
    >
      <Form form={loginForm} layout="vertical">
        <Form.Item
          label="아이디"
          name="userId"
          rules={[{ required: true, message: '아이디를 입력해주세요', whitespace: true }]}
        >
          <Input placeholder="아이디" allowClear />
        </Form.Item>
      </Form>
    </Space>
  );
}

export default LoginForm;
