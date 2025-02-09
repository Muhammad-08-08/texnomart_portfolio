import axios from "axios";
import { useEffect, useState } from "react";
import CardPage from "../card";

function Kardlar() {
  const [kard, setkard] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://gw.texnomart.uz/api/web/v1/home/special-products?type=hit_products"
      )
      .then((response) => {
        console.log(response.data.data.data);
        setkard(response.data.data.data);
      });
  }, []);

  return (
    <div className="flex px-10 flex-wrap gap-4 justify-between py-10">
      {kard.map((item) => (
        <CardPage
          key={item.id}
          imgUrl={item.image}
          imgName={item.name}
          name={item.name}
          month_price={item.axiom_monthly_price}
          sale_price={item.sale_price}
          item={item}
        />
      ))}
    </div>
  );
}

export default Kardlar;
