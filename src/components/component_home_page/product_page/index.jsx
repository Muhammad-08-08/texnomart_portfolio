import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  InfoCircleFilled,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Carousel } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useMyStore from "../zustand/useMyStore";
import Aksessuar from "../aksesuar";

function ProductPage() {
  const [product, setProduct] = useState();
  const [tafsilot, setTafsilot] = useState();
  const [tafsilot2, setTafsilot2] = useState({});
  const [tafsilotHeight, setTafsilotHeight] = useState(false);
  const [tafsilotHeight2, setTafsilotHeight2] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setProduct();
    axios
      .get(`https://gw.texnomart.uz/api/web/v1/product/detail?id=${id}`)
      .then((response) => {
        setProduct(response.data.data.data);
      });
    axios
      .get(`https://gw.texnomart.uz/api/web/v1/product/characters?id=${id}`)
      .then((response) => {
        setTafsilot(response.data.data.data);
      });
    axios
      .get(`https://gw.texnomart.uz/api/web/v1/product/description?id=${id}`)
      .then((response) => {
        setTafsilot2(response.data);
      });
  }, [id]);

  const savatga_qoshish = useMyStore((state) => state.savatga_qoshish);

  if (!product || !tafsilot) {
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-10 mt-8">
      <div className="flex gap-10 justify-between items-center">
        <div>
          <h2 className="text-2xl font-mono mb-4">{product.name}</h2>
          <div className="relative max-w-sm w-full h-auto mx-auto">
            <Carousel draggable arrows className="relative">
              {product.small_images.map((item, index) => (
                <div key={index} className="relative">
                  <img
                    src={item}
                    alt=""
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </div>
              ))}
            </Carousel>

            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-red-500 transition z-10 cursor-pointer"
              onClick={() => document.querySelector(".slick-prev")?.click()}
            >
              <LeftOutlined className="text-xl" />
            </button>

            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-red-500 transition z-10 cursor-pointer"
              onClick={() => document.querySelector(".slick-next")?.click()}
            >
              <RightOutlined className="text-xl" />
            </button>
          </div>
        </div>
        <div className="w-[450px] flex flex-col gap-3">
          <h3 className="text-lg font-medium">Mahsulot haqida qisqacha</h3>
          {product.main_characters.map((i, index) => (
            <div key={index} className="flex justify-between gap-2">
              <p className="whitespace-nowrap">{i.name}</p>
              <span className="flex-1 border-b border-dashed"></span>
              <p className="whitespace-nowrap">{i.value}</p>
            </div>
          ))}
        </div>
        <div className="w-[450px] bg-white p-5 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold">
            {Math.floor(product.sale_price).toLocaleString("ru")}{" "}
            <span className="text-gray-500 text-xl">so'm</span>
          </h2>

          <div className="flex items-center bg-gray-100 p-3 rounded-lg mt-3">
            <span className="text-gray-600 text-sm">Muddatli to'lov</span>
            <span className="bg-blue-500 text-white font-semibold text-lg px-3 py-1 rounded-lg mx-2">
              {Math.floor(product.sale_price / 12).toLocaleString("ru")}
            </span>
            <span className="text-gray-600">12 /oy</span>
            <InfoCircleFilled size={16} className="text-gray-400 ml-2" />
          </div>

          <p className="text-gray-600 text-sm mt-2">
            Buyurtmani rasmiylashtirishda 12 oydan 24 oygacha muddatli to'lovni
            tanlashingiz mumkin
          </p>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() =>
                savatga_qoshish({
                  ...product,
                  image: product.large_images[0],
                })
              }
              className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg cursor-pointer"
            >
              Savatchaga
            </button>
            <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-black font-semibold py-3 rounded-lg cursor-pointer">
              Birgina klik orqali harid
            </button>
          </div>

          <p className="text-gray-500 text-sm mt-4">
            Muddatli to‘lov rasmiylashtirayotganda bizdan va hamkorlardan eng
            maqbul takliflarga ega bo‘ling.
          </p>

          <div className="flex gap-3 mt-3">
            <img
              src="https://mini-io-api.texnomart.uz/order/order/loan-system/1/95d6e4b5-cc9e-4cb1-b7be-9af419c5d094.png"
              alt="Axiom"
              className="h-10"
            />
            <img
              src="https://mini-io-api.texnomart.uz/order/order/loan-system/8/9451a313-9349-4cce-bdf7-50eb92b28db2.png"
              alt="Tehnoboon"
              className="h-10"
            />
            <img
              src="https://mini-io-api.texnomart.uz/order/order/loan-system/11/6c0315e8-3c60-4e6b-b470-6664bececd3f.png"
              alt="Payme"
              className="h-10"
            />
            <img
              src="https://mini-io-api.texnomart.uz/order/order/loan-system/11/6c0315e8-3c60-4e6b-b470-6664bececd3f.png"
              alt="Alif"
              className="h-10"
            />
            <img
              src="https://mini-io-api.texnomart.uz/order/order/loan-system/12/89946328-85c8-4fbb-9d9d-6e00511d3b23.png"
              alt="Solfy"
              className="h-10"
            />
            <img
              src="https://mini-io-api.texnomart.uz/order/order/loan-system/9/ce619468-77a8-4cd0-b34f-be34a3342d98.png"
              alt="Anorb"
              className="h-10"
            />
          </div>

          <div className="flex flex-col bg-gray-100 p-3 rounded-lg mt-5">
            <span className="font-semibold text-gray-800">
              Do'kondan olib ketish bepul
            </span>
            <span className="text-blue-600 cursor-pointer">
              36 do'konda mavjud
            </span>
          </div>
        </div>
      </div>

      <div className="relative py-6">
        <h2 className="text-xl font-medium">Mahsulot xususiyatlari</h2>
        <div
          className={`w-full my-4 ${
            tafsilotHeight ? "h-auto" : "h-[200px] overflow-hidden my-4"
          }`}
        >
          {tafsilot.map((item_tafsilot, index) => {
            return (
              <div key={index}>
                <h3 className="text-lg font-medium my-6">
                  {item_tafsilot.name}
                </h3>
                <div className="w-[70%] flex flex-wrap gap-4.5 justify-between mt-5">
                  {item_tafsilot.characters.map((i, index) => {
                    return (
                      <div
                        key={index}
                        className="w-[400px] flex border-b border-dashed border-b-gray-300 pb-2"
                      >
                        <p className="text-gray-500 flex-1">{i.name}</p>
                        <p className="text-gray-500 flex-1 text-left">
                          {i.value}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <p
          onClick={() => {
            setTafsilotHeight(!tafsilotHeight);
          }}
          className="text-blue-600 absolute bottom-0 cursor-pointer"
        >
          {tafsilotHeight ? "Qisqacha" : "Batafsil"}
          {tafsilotHeight ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
        </p>
      </div>
      <div className="relative py-2">
        <h3 className="my-4 font-medium text-lg">Tavsif</h3>
        <div>
          <div
            className={`w-full my-3 leading-8 ${
              tafsilotHeight2
                ? "h-auto py-2"
                : "h-[100px] overflow-hidden shadow"
            }`}
            dangerouslySetInnerHTML={{ __html: tafsilot2?.data?.data }}
          />
          <p
            onClick={() => {
              setTafsilotHeight2(!tafsilotHeight2);
            }}
            className="text-blue-600 absolute bottom-0 cursor-pointer"
          >
            {tafsilotHeight2 ? "Qisqacha" : "Batafsil"}
            {tafsilotHeight2 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold py-6">Aksessuarlar</h2>
        <div>
          <Aksessuar productId={id} />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
