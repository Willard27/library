import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const res = await axios.post("/user/login", values);
    console.log(res);
    if (res.data.code === 0) {
      navigate("/home");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="h-screen w-screen">
      <div className="grid size-full place-items-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-cover">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="current-password"
        >
          <Form.Item
            label="账号"
            name="uid"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="passwd"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="post">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
