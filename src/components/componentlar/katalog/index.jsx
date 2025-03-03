import { Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function Katalog() {
  const [katalogApi, setKatalogApi] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    axios
      .get("https://gw.texnomart.uz/api/web/v1/header/popup-menu-catalog")
      .then((response) => {
        setKatalogApi(response.data.data.data);
        setActiveCategory(response.data.data.data[0]);
      });
  }, []);

  if (!katalogApi.length) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-white/70">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] mt-7 rounded-2xl shadow-lg bg-white overflow-hidden flex">
      <div className="w-[320px] bg-gray-100 overflow-y-auto">
        {katalogApi.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setActiveCategory(item)}
            className={`w-full py-4 px-5 flex gap-3 items-center cursor-pointer transition hover:bg-amber-200 rounded-xl`}
          >
            <img src={item.icon} alt={item.name} className="w-6 h-6" />
            <span className="font-medium text-gray-800">{item.name}</span>
          </div>
        ))}
      </div>

      <div className="flex-1 p-5 overflow-y-auto">
        {activeCategory && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 border-b pb-2">
              {activeCategory.name}
            </h2>
            <div className="grid grid-cols-3 gap-4 mt-3">
              {activeCategory.childs.map((child) => (
                <div key={child.id}>
                  <h3 className="text-md font-medium text-gray-700 mb-2">
                    {child.name}
                  </h3>
                  <ul className="space-y-1">
                    {child.childs.map((nomi) => (
                      <Link to={"/kategory-bottom-filter"}>
                        <li
                          key={nomi.id}
                          className="text-sm text-gray-600 hover:text-amber-500 cursor-pointer transition"
                        >
                          {nomi.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Katalog;
