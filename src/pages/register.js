import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
import axios from "../utils/http";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    const res = await axios.post("/user/register", values);
    console.log(res);
    if (res.data.code === 0) {
      navigate("/login");
    }
  };

  return (
    <div className="grid h-screen w-screen place-items-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-cover">
      <div className="flex h-1/2 w-1/4 flex-col items-center justify-around rounded-md bg-white p-5">
        <div className="font-serif text-2xl">注册</div>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          // initialValues={{
          //   residence: ["zhejiang", "hangzhou", "xihu"],
          //   prefix: "86",
          // }}
          style={{
            maxWidth: 600,
          }}
          scrollToFirstError
        >
          <Form.Item
            name="uid"
            label="账号"
            rules={[
              {
                required: true,
                message: "请输入账号！",
              },
            ]}
          >
            <InputNumber min={100000} max={999999} />
          </Form.Item>

          <Form.Item
            name="passwd"
            label="密码"
            rules={[
              {
                required: true,
                message: "请输入密码！",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="确认密码"
            dependencies={["passwd"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "请再次输入密码！",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("passwd") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("与第一次输入的密码不一致！"),
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="userName"
            label="名字"
            rules={[
              {
                required: false,
                message: "请输出名字！",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Register;
