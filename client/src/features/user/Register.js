import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from 'react-redux';
import styles from "./User.module.css";
import { Redirect, useHistory } from "react-router-dom";
import api from '../../helpers/api';
import { useState } from "react";

export const RegisterForm = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    try {
      setLoading(true);
      await api.post('auth/signup/', { ...values })
      history.push("/login")
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err)
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
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className={styles.siteFormItemIcon} />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className={styles.siteFormItemIcon} />}
              placeholder="Username"
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
              loading={loading}
            >
              Register
          </Button>
          </Form.Item>
        </Form>
    </div>
  );
};
