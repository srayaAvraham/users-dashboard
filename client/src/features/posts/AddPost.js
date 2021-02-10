import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

import { addNewPost } from "./postsSlice";
import styles from "./Posts.module.css";
import { Form, Input, Button } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { PostForm } from "../../components/PostForm";
import { AppModal } from "../../components/Modal";
export const AddPostForm = () => {
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const formRef = useRef();
  const onFinish = async () => {
    form.validateFields().then(async (values) => {
      form.resetFields();
      try {
        setAddRequestStatus("pending");
        const resultAction = await dispatch(addNewPost(values));
        unwrapResult(resultAction);
        console.log(resultAction);
      } catch (err) {
        console.error("Failed to save the post: ", err);
      } finally {
        setAddRequestStatus("idle");
      }
    });
  };

  return (
    <AppModal handleSave={onFinish} title="Add a New Post">
      <PostForm form={form} />
    </AppModal>
  );
};
