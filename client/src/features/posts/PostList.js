import { List, PageHeader, Space, Avatar } from "antd";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, fetchPosts } from "./postsSlice";
import { AddPostForm } from "./AddPost";
import {
  FieldTimeOutlined,
  StarOutlined,
  LikeOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { Link } from "react-router-dom";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  console.log(posts);
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
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={posts}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
              <IconText
                icon={FieldTimeOutlined}
                text={moment(item.date).fromNow()}
                key="list-vertical-star-o"
              />,
            ]}
            // extra={
            // <img
            //   width={272}
            //   alt="logo"
            //   src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            // />
            // }
          >
            <List.Item.Meta
              avatar={<Avatar>{item.author.username}</Avatar>}
              title={<Link to={`/editor/${item._id}`}>{item.title}</Link>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
};
