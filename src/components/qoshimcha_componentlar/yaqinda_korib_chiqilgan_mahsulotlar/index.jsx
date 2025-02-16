import axios from "axios";
import React, { useEffect, useState } from "react";
import CardPage from "../../component_home_page/card";
import { Link } from "react-router";
import saqlashMahsulot from "../saqlashMahsulotlar";

function YaqindaKorilganlar() {
  const [yaqindaKorilganMahsulot, setYaqindaKorilganMahsulot] = useState([]);

  useEffect(() => {
    const saqlanganIdlar =
      JSON.parse(localStorage.getItem("recentlyViewed")) || [];

    if (saqlanganIdlar.length === 0) return;

    axios
      .post(
        "https://gw.texnomart.uz/api/web/v1/home/recently-viewed-products",
        {
          ids: saqlanganIdlar,
        }
      )
      .then((response) => {
        setYaqindaKorilganMahsulot(response.data.data.data);
      })
      .catch((error) => {
        console.error("API so'rovi xatosi:", error);
      });
  }, []);

  if (!yaqindaKorilganMahsulot.length) {
    return (
      <div className="text-center font-bold text-xl">
        Yaqinda ko‘rilgan mahsulotlar yo‘q
      </div>
    );
  }

  return (
    <div>
      <h4 className="text-2xl font-bold mb-6">
        Yaqinda ko‘rib chiqilgan mahsulotlar
      </h4>
      <div className="flex gap-6 overflow-x-auto">
        {yaqindaKorilganMahsulot.map((item) => (
          <Link
            to={`/yaqinda-korilganlar/${item.id}`}
            key={item.id}
            onClick={() => saqlashMahsulot(item.id)}
          >
            <CardPage
              imgUrl={item.image}
              imgName={item.name}
              name={item.name}
              month_price={item.axiom_monthly_price}
              sale_price={item.sale_price}
              item={item}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default YaqindaKorilganlar;
