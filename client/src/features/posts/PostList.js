import { List, PageHeader, Button } from "antd";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, fetchPosts } from "./postsSlice";
import { AppModal } from "../../components/Modal";
import { AddPostForm } from "./AddPost";
export const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);

  const postStatus = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Posts"
        extra={<AddPostForm />}
      />
      <List
        size="large"
        itemLayout="horizontal"
        dataSource={posts}
        renderItem={(item) => (
          <List.Item key={item._id}>
            <List.Item.Meta title={item.title} />
          </List.Item>
        )}
      />
    </div>
  );
};
