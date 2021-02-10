import { Form, Input, Button } from "antd";
import { LockOutlined , MailOutlined} from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import styles from "./User.module.css";
import { useDispatch } from "react-redux";
import { login } from "./userSlice";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onFinish = (values) => {
    dispatch(login(values));
    history.push("/")
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
          >
            Log in
          </Button>
          Or <Link to={"/register"}>register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};