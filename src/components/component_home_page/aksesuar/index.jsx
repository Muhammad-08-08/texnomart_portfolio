import axios from "axios";
import React, { useEffect, useState } from "react";
import CardPage from "../card";
import { Link } from "react-router";
import { Button } from "antd";

function Aksessuar({ productId }) {
  const [acsessuar, setAcsessuar] = useState();
  const [acsessuarCard, setAcsessuarCard] = useState(0);
  useEffect(() => {
    axios
      .get(
        `https://gw.texnomart.uz/api/web/v1/product/accessories?id=${productId}`
      )
      .then((response) => {
        setAcsessuar(response.data.data.data);
      });
  }, [productId]);

  if (!acsessuar) {
    return <>Loading...</>;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-3">
        {acsessuar.map((item, index) => {
          return (
            <div key={index}>
              <Button
                onClick={() => {
                  setAcsessuarCard(index);
                }}
                type={acsessuarCard === index ? "primary" : "default"}
              >
                {item.name}
              </Button>
              <div></div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-6 justify-between overflow-auto">
        {" "}
        {acsessuar?.[acsessuarCard]?.products?.map((item_card) => {
          return (
            <Link to={`/acsessuar/${item_card.id}`} key={item_card.id}>
              <CardPage
                imgUrl={item_card.image}
                imgName={item_card.name}
                name={item_card.name}
                month_price={item_card.axiom_monthly_price}
                sale_price={item_card.sale_price}
                item={item_card}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Aksessuar;
