import React, { useState } from "react";
import { Modal, Button } from "antd";

export const AppModal = ({ children, handleSave, title,isModalVisible,setIsModalVisible }) => {
  

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    handleSave();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Post
      </Button>
      <Modal
        title={title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
};
