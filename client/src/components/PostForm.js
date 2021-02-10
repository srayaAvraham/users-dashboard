import React, { useState } from "react";
// import styles from "./Posts.module.css";
import { Form, Input, Button } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
export const PostForm = ({ form }) => {
  return (
    <section>
      <h2>Add a New Post</h2>
      <Form name="add_post" form={form}>
        <Form.Item
          name="title"
          rules={[
            {
              required: true,
              message: "Please input your Title!",
            },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Title" />
        </Form.Item>
        <Form.Item
          name="content"
          rules={[
            {
              required: true,
              message: "Please input your Content!",
            },
          ]}
        >
          <Input prefix={<LockOutlined />} type="text" placeholder="Content" />
        </Form.Item>
      </Form>
    </section>
  );
};
