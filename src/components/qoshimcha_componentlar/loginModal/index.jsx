import { UserOutlined } from "@ant-design/icons";
import { Button, Input, Modal } from "antd";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

function LoginModal() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
        footer={false}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 25,
          }}
        >
          <h2 className="text-2xl font-medium text-center">
            Кириш ёки рўйхатдан ўтиш
          </h2>
          <div className="flex flex-col gap-2">
            <label className="text-lg font-mono">Telefon</label>
            <input className="boder h-7" {...register("example")} />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg font-mono">Ism</label>
            <input
              className="boder h-7"
              {...register("exampleRequired", { required: true })}
            />
          </div>
          <Button htmlType="submit" type="primary" size="large">
            Kodni olish
          </Button>
        </form>
      </Modal>
    </div>  
  );
}

export default LoginModal;
