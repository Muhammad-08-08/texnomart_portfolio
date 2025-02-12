import { Card } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

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
          <Card
            key={item.id}
            hoverable
            style={{ width: 250 }}
            cover={
              <img className="w-[400px] " src={item.image} alt={item.name} />
            }
          >
            <h4>{item.name}</h4>
          </Card>
        );
      })}
    </div>
  );
}

export default TopCategoriesPage;
