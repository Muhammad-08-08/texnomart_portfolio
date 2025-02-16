import axios from "axios";
import React, { useEffect, useState } from "react";
import CardPage from "../../component_home_page/card";
import { Link } from "react-router";

function YaqindaKorilganlar() {
  const [yaqindaKorilganMahsulot, setYaqindaKorilganMahsulot] = useState();
  useEffect(() => {
    axios
      .post(
        "https://gw.texnomart.uz/api/web/v1/home/recently-viewed-products",
        {
          ids: [
            95689, 102417, 95577, 81283, 88463, 357526, 357083, 100108, 356664,
            94341,
          ],
        }
      )
      .then((response) => {
        console.log(response.data.data.data);
        setYaqindaKorilganMahsulot(response.data.data.data);
      });
  }, []);

  if (!yaqindaKorilganMahsulot) {
    return <div className="text-center font-bold text-xl">Loading...</div>;
  }
  return (
    <div>
      <h4 className="text-2xl font-bold mb-6">
        Yaqinda ko`rib chiqilgan mahsulotlar
      </h4>
      <div className="flex gap-6 overflow-x-auto">
        {yaqindaKorilganMahsulot.map((item) => {
          return (
            <Link to={`/yaqinda-korilganlar/${item.id}`} key={item.id}>
              <CardPage
                imgUrl={item.image}
                imgName={item.name}
                name={item.name}
                month_price={item.axiom_monthly_price}
                sale_price={item.sale_price}
                item={item}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default YaqindaKorilganlar;
