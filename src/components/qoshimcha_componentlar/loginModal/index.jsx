import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Input, Modal } from "antd";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import axios from "axios";

function LoginModal() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [ikkinchiModal, setIkkinchiModal] = useState("ism_phone");
  const [phoneInputValue, setPhoneInputValue] = useState("");
  const [timer, setTimer] = useState(10);
  const [timerButton, setTimerButton] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (ikkinchiModal === "tasdiqlandi") {
      setTimer(59);
      setTimerButton(true);

      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setTimerButton(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [ikkinchiModal]);

  const onSubmit = (data) => {
    console.log("Yuborilgan ma'lumot:", data);
    setPhoneInputValue(data.phone);

    axios
      .post("https://gateway.texnomart.uz/api/common/v1/user/register", {
        data,
      })
      .then((response) => {
        console.log("Serverdan javob:", response.data);
        setIkkinchiModal("tasdiqlandi");
      })
      .catch((error) => {
        console.error("Xatolik yuz berdi:", error);
      });
  };

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
      <div>
        {ikkinchiModal === "ism_phone" ? (
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
                <input
                  className="boder h-7"
                  {...register("phone", { required: true })}
                  onChange={(e) => setPhoneInputValue(e.currentTarget.value)}
                />
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
        ) : (
          <Modal
            onCancel={() => {
              setIsOpenModal(false);
            }}
            open={isOpenModal}
            key={phoneInputValue}
            footer={false}
          >
            <ArrowLeftOutlined
              onClick={() => {
                setIkkinchiModal("ism_phone");
              }}
              className="cursor-pointer"
            />
            <div className="flex flex-col justify-center items-center gap-4">
              <h2 className="font-medium text-3xl">SMS kodni kiriting</h2>
              <div className="flex flex-col justify-center items-center gap-2">
                <p>Raqamga kod yuborildi</p>
                <p>{phoneInputValue}</p>
              </div>
              <Input />
              {timerButton ? (
                <p>qayta yuboraolasiz (00 : {timer} soniyada)</p>
              ) : (
                <Button>Kodni qayta yuborish</Button>
              )}
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default LoginModal;
