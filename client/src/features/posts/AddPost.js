import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'

import { addNewPost } from './postsSlice'
import styles from "./Posts.module.css";
export const AddPostForm = () => {

    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const dispatch = useDispatch()

    const onFinish = async (values) => {
        try {
            setAddRequestStatus('pending')
            const resultAction = await dispatch(
                addNewPost(values)
            )
            unwrapResult(resultAction)
        } catch (err) {
            console.error('Failed to save the post: ', err)
        } finally {
            setAddRequestStatus('idle')
        }
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <Form
                name="add_post"
                onFinish={onFinish}
            >
                <Form.Item
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Title!",
                        },
                    ]}
                >
                    <Input
                        prefix={<MailOutlined className={styles.siteFormItemIcon} />}
                        placeholder="Title"
                    />
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
                    <Input
                        prefix={<LockOutlined className={styles.siteFormItemIcon} />}
                        type="text"
                        placeholder="Content"
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className={styles.loginFormButton}
                    >
                        Save
          </Button>
                </Form.Item>
            </Form>
        </section>
    )
}
