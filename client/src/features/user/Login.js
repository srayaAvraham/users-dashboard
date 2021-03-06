import { Form, Input, Button, Alert } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import styles from "./User.module.css";
import { useDispatch } from "react-redux";
import { login } from "./userSlice";
import { useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loginRequestStatus, setLoginRequestStatus] = useState("idle");
  const [error, setError] = useState(null);

  const onFinish = async (values) => {
    try {
      setLoginRequestStatus("pending");
      const resultAction = await dispatch(login(values));
      unwrapResult(resultAction);
      history.push("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoginRequestStatus("idle");
    }
  };

  return (
    <div className={styles.center}>
      <Form
        name="normal_login"
        className={styles.loginForm}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
            {
              type: "email",
              message: "is not a valid email!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className={styles.siteFormItemIcon} />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className={styles.siteFormItemIcon} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.loginFormButton}
            loading={loginRequestStatus == "pending"}
          >
            Log in
          </Button>
          Or <Link to={"/register"}>register now!</Link>
        </Form.Item>
        {error && <Alert message={error} type="error" />}
      </Form>
    </div>
  );
};
