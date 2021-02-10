import React from "react";
import { Form, Input } from "antd";
const { TextArea } = Input;
export const PostForm = ({ form }) => {
  return (
    <section>
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
          <Input placeholder="Title" />
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
          <TextArea rows={4} type="text" placeholder="Content" />
        </Form.Item>
      </Form>
    </section>
  );
};
