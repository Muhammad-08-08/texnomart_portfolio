import { UserOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useState } from "react";

function LoginModal() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setIsOpenModal(true);
        }}
        className="flex flex-col items-center cursor-pointer"
      >
        <UserOutlined />
        <p>Kirish</p>
      </div>
      <Modal
        open={isOpenModal}
        onCancel={() => {
          setIsOpenModal(false);
        }}
        onOk={() => {
          setIsOpenModal(false);
        }}
      >
        LoginModal
      </Modal>
    </div>
  );
}

export default LoginModal;
