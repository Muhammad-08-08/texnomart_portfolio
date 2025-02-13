import { Card } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import CardPage from "../../component_home_page/card";

function TopCategoriesPage() {
  const { slug } = useParams();
  const [categories, setCategories] = useState();
  useEffect(() => {
    setCategories();
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${slug}&sort=-order_count&page=1`
      )
      .then((response) => {
        setCategories(response.data.data.products);
      });
  }, [slug]);
  if (!categories) {
    return <div>yuklanmoqda</div>;
  }
  return (
    <div className="container mx-auto px-10 flex flex-wrap gap-6">
      {categories.map((item) => {
        return (
          <Link to={`/top-categoriec/${item.id}`} key={item.id}>
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
  );
}

export default TopCategoriesPage;
