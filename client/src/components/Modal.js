import React from "react";
import { Modal, Button } from "antd";

export const AppModal = ({
  children,
  handleSave,
  title,
  isModalVisible,
  setIsModalVisible,
  loading,
}) => {
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
      <Button type="primary" onClick={showModal} loading={loading}>
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
