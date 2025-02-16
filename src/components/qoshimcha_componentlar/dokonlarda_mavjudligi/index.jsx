import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ClockCircleOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";

function DokonlardaMavjudligi({ productId }) {
  const [dokondaMavjud, setdokondaMavjud] = useState([]);
  const [batafsil, setBatafsil] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://gw.texnomart.uz/api/web/v1/product/available-stores?id=${productId}`
      )
      .then((response) => {
        setdokondaMavjud(response.data.data.data);
      });
  }, []);

  if (!dokondaMavjud.length) {
    return <div className="text-center font-bold text-xl">Loading...</div>;
  }

  return (
    <div className="relative py-1">
      <div
        className={`my-10 ${batafsil ? "h-auto" : "h-[200px] overflow-hidden"}`}
      >
        <div className="flex gap-4 border-b pb-2 font-semibold">
          <div className="w-[56%]">Manzil</div>
          <div className="flex gap-72">
            <div>Ish tartibi</div>
            <div>Telefon</div>
          </div>
        </div>
        {dokondaMavjud.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 py-3 border-b border-b-gray-200 items-center"
          >
            <div className="flex items-center gap-2 w-[56%]">
              <EnvironmentOutlined className="text-yellow-500 text-lg" />
              <p className="font-semibold">{item.address}</p>
            </div>
            <div className="flex flex-1 gap-32">
              <div className="flex flex-1 items-center gap-2">
                <ClockCircleOutlined className="text-gray-600 text-lg" />
                Har kuni {item.work_time}
              </div>
              <div className="flex flex-1 items-center gap-2">
                <PhoneOutlined className="text-gray-600 text-lg" />
                {item.phone}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p
        onClick={() => {
          setBatafsil(!batafsil);
        }}
        className="absolute bottom-0 text-blue-600 cursor-pointer flex gap-2"
      >
        {batafsil ? "Qisqacha" : "Batafsil"}
        {batafsil ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
      </p>
    </div>
  );
}

export default DokonlardaMavjudligi;
