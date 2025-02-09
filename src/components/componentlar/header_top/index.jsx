import { useState } from "react";
import { DownOutlined, DribbbleOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import Location01Icon from "../../../assets/location-01-stroke-rounded";

const items = [
  { key: "1", label: "Qashqadaryo" },
  { key: "2", label: "Surxondaryo" },
  { key: "3", label: "Samarqand" },
  { key: "4", label: "Jizzax" },
  { key: "5", label: "Sirdaryo" },
  { key: "6", label: "Namangan" },
];

const langueItems = [
  { key: "uz", label: "uz" },
  { key: "ru", label: "ru" },
  { key: "en", label: "en" },
];

function HeaderTop() {
  const [selectedLang, setSelectedLang] = useState("uz");

  const handleLangChange = (e) => {
    setSelectedLang(e.key);
  };

  return (
    <div className="w-full py-4 bg-black/90">
      <div className="container text-white mx-auto px-10 flex justify-between">
        <div className="flex items-center gap-10">
          <div>
            <div className="flex gap-2">
              <Location01Icon />
              <Dropdown menu={{ items }} placement="bottomLeft">
                <p className="hover:opacity-90 cursor-pointer">Toshkent</p>
              </Dropdown>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <p className="cursor-pointer">Bizning do'konlarimiz</p>
            <p className="cursor-pointer py-1 px-2 bg-white/30 w-max rounded-lg">
              Yuridik shaxslar uchun
            </p>
            <p className="cursor-pointer">To'lov usullari</p>
          </div>
        </div>
        <div className="flex gap-10">
          <p>
            Aloqa markazi : <span className="text-xl">+99871 209 99 44</span>
          </p>
          <Dropdown
            menu={{ items: langueItems, onClick: handleLangChange }}
            placement="bottom"
          >
            <button className="border border-gray-600 px-5 rounded-4xl cursor-pointer">
              <DribbbleOutlined /> {selectedLang} <DownOutlined />
            </button>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
