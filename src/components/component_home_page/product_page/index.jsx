import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";
import useMyStore from "../zustand/useMyStore";
import { Carousel } from "antd";

function ProductPage() {
  const { id } = useParams();
  const page = useMyStore((state) => state.page);
  const setPage = useMyStore((state) => state.setPage);

  useEffect(() => {
    axios
      .get(`https://gw.texnomart.uz/api/web/v1/product/detail?id=${id}`)
      .then((response) => {
        console.log(response.data.data);
        setPage(response.data.data.data);
      });
  }, [id, setPage]);

  return (
    <div className="container mx-auto px-10 pt-10">
      <h2 className="text-2xl font-medium">{page.name}</h2>
      <div>
        <div  className="flex gap-10">
          <div>
            {page.large_images.map((item, index) => (
              <div key={index} className="flex justify-center">
                <img
                  className="w-40 h-40 object-contain"
                  src={item}
                  alt={`slide-${index}`}
                />
              </div>
            ))}
          </div>
          <Carousel arrows style={{ width: 400 }}>
            {page.large_images.map((item, index) => (
              <div key={index} className="flex justify-center">
                <img
                  className="w-full h-[300px] object-contain"
                  src={item}
                  alt={`slide-${index}`}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
