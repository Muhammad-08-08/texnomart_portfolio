import texnomart_logo from "../../../assets/texnomart-logo.svg";
import {
  CloseOutlined,
  HeartOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Katalog from "../katalog";
import { useState, useEffect } from "react";
import useMyStore from "../../component_home_page/zustand/useMyStore";
import Savatcha from "../savatcha";
import LikePage from "../like";
import { Link } from "react-router";

function NavbarTexnomart() {
  const [katalog, setKatalog] = useState(false);
  const [katalogSavatcha, setKatalogSavatcha] = useState(false);
  const [likeOyna, setLikeOyna] = useState(false);

  const savatcha = useMyStore((state) => state.korzina);
  const like = useMyStore((state) => state.like);

  useEffect(() => {
    if (katalog || katalogSavatcha || likeOyna) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [katalog, katalogSavatcha, likeOyna]);

  return (
    <div className="container mx-auto px-10">
      <div className="container mx-auto mt-6 flex justify-between">
        <div className="flex gap-6 items-center">
          <Link to={"/"}>
            <img
              className="cursor-pointer"
              src={texnomart_logo}
              alt="texnomart logo"
            />
          </Link>
          <button
            onClick={() => setKatalog(!katalog)}
            className="px-6 py-2 bg-orange-500 text-black/70 font-bold text-xl flex gap-3 items-center cursor-pointer rounded-lg hover:text-white transition-all duration-1000"
          >
            {katalog ? <CloseOutlined /> : <MenuOutlined />} katalog
          </button>
        </div>
        <div className="w-2/4 border border-orange-400 px-4 rounded-xl flex gap-3 items-center">
          <SearchOutlined />
          <input
            className="w-full py-2 focus:outline-none"
            type="text"
            placeholder="qidirish"
          />
        </div>
        <div className="flex gap-14 items-center">
          <div className="flex flex-col items-center">
            <UserOutlined />
            <p>Kirish</p>
          </div>

          <div
            onClick={() => setLikeOyna(true)}
            className="flex flex-col items-center cursor-pointer"
          >
            <div className="relative flex">
              <HeartOutlined />
              <p className="absolute -right-1.5 -top-1 px-1 text-[9px] h-max bg-red-500 text-white rounded-full">
                {like.length > 0 ? like.length : <></>}
              </p>
            </div>
            <p>Sevimlilar</p>
          </div>

          <div
            onClick={() => setKatalogSavatcha(true)}
            className="flex flex-col items-center cursor-pointer"
          >
            <div className="relative flex">
              <ShoppingCartOutlined />
              <p className="absolute -right-1.5 -top-1 px-1 text-[9px] h-max bg-amber-500 text-white rounded-full">
                {savatcha.length > 0 ? savatcha.length : <></>}
              </p>
            </div>
            <p>Savatcha</p>
          </div>
        </div>
      </div>

      {katalog && <Katalog />}
      {katalogSavatcha && (
        <Savatcha savatcha={savatcha} savatchaKatalog={setKatalogSavatcha} />
      )}

      {likeOyna && <LikePage likeKatalog={setLikeOyna} like={like} />}
    </div>
  );
}

export default NavbarTexnomart;
