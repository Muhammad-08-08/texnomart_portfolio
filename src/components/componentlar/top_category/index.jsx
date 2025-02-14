import { Card, Pagination } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import CardPage from "../../component_home_page/card";

function TopCategoriesPage() {
  const { slug } = useParams();
  const [categories, setCategories] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCategories();
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${slug}&sort=-order_count&page=${currentPage}`
      )
      .then((response) => {
        setCategories(response.data.data);
      });
  }, [slug, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [slug]);

  if (!categories) {
    return <div>yuklanmoqda</div>;
  }
  return (
    <div className="container mx-auto px-10">
      <div></div>
      <div className="flex justify-between flex-wrap gap-6">
        {categories.products.map((item) => {
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
      <div className="w-max mx-auto my-10">
        <Pagination
          defaultCurrent={currentPage}
          pageSize={categories.pagination.page_size}
          showSizeChanger={false}
          total={categories.pagination.total_count}
          onChange={(page) => {
            setCurrentPage(page);
          }}
        />
      </div>
    </div>
  );
}

export default TopCategoriesPage;
