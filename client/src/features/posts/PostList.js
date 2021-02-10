import { List, PageHeader, Button, Space} from "antd";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, fetchPosts } from "./postsSlice";
import { AddPostForm } from "./AddPost";
import {StarOutlined, FieldTimeOutlined} from '@ant-design/icons'
import moment from 'moment';
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);


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
      {/* <List
        size="large"
        itemLayout="horizontal"
        dataSource={posts}
        renderItem={(item) => (
          <List.Item key={item._id}>
            <List.Item.Meta title={item.title} discription={item.content}/>
          </List.Item>
        )}
      /> */}
        <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={posts}

    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <IconText icon={FieldTimeOutlined} text={moment(item.date).fromNow()} key="list-vertical-star-o" />]
        }
      >
        <List.Item.Meta
          title={<a href={item.href}>{item.title}</a>}
          // description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
    </div>
  );
};
