import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "../features/user/userSlice";
import { useHistory } from "react-router-dom";
import { Layout, Button, Avatar } from "antd";

const { Header } = Layout;

export const AppHeader = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  const button = user ? (
    <div>
      {" "}
      <Avatar
        style={{ backgroundColor: "#1890ff", verticalAlign: "middle" }}
        size="large"
      >
        {user.username}
      </Avatar>
      <Button
        size="small"
        style={{ margin: "0 16px", verticalAlign: "middle" }}
        onClick={handleLogout}
      >
        Logout
      </Button>{" "}
    </div>
  ) : null;
  return (
    <div>
      <Header style={{ textAlign: "start" }}>{button}</Header>
    </div>
  );
};
