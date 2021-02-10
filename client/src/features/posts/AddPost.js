import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

import { addNewPost } from "./postsSlice";
import styles from "./Posts.module.css";
import { Form } from "antd";
import { PostForm } from "../../components/PostForm";
import { AppModal } from "../../components/Modal";

export const AddPostForm = () => {
    const [addRequestStatus, setAddRequestStatus] = useState("idle");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const onFinish = async () => {
        form.validateFields().then(async (values) => {
            form.resetFields();
            try {
                setAddRequestStatus("pending");
                const resultAction = await dispatch(addNewPost(values));
                unwrapResult(resultAction);
            } catch (err) {
                console.error("Failed to save the post: ", err);
            } finally {
                setAddRequestStatus("idle");
                setIsModalVisible(false)
            }
        });
    };

    return (
        <AppModal handleSave={onFinish}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            title="Add a New Post">
            <PostForm form={form} />
        </AppModal>
    );
};
