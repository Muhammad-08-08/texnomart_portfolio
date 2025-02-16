import { Button, Pagination } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import CardPage from "../../component_home_page/card";
import CardPage2 from "../../component_home_page/card2";

function TopCategoriesPage() {
  const { slug } = useParams();
  const [categories, setCategories] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [filtred, setFiltred] = useState(true);

  useEffect(() => {
    setCategories();
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${slug}&sort=-order_count&page=${currentPage}`
      )
      .then((response) => {
        setCategories(response.data.data);
        console.log(response.data.data);
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
      <div>
        <Button
          onClick={() => {
            setFiltred(!filtred);
          }}
          type="primary"
        >
          filtred
        </Button>
      </div>
      <div
        className={`${
          filtred
            ? "flex justify-between flex-wrap gap-6"
            : "flex flex-col gap-6 mt-3"
        }`}
      >
        {filtred
          ? categories.products.map((item) => {
              return (
                <Link
                  to={`/top-categoriec/${item.id}`}
                  key={item.id}
                  onClick={() => {
                    window.scrollTo({
                      behavior: "smooth",
                      top: 0,
                    });
                  }}
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
              );
            })
          : categories.products.map((item) => {
              return (
                <Link
                  to={`/top-categoriec/${item.id}`}
                  key={item.id}
                  onClick={() => {
                    window.scrollTo({
                      behavior: "smooth",
                      top: 0,
                    });
                  }}
                >
                  <CardPage2
                    imgUrl={item.image}
                    imgName={item.name}
                    name={item.name}
                    month_price={item.axiom_monthly_price}
                    sale_price={item.sale_price}
                    item={item}
                    quvvati={item.main_characters.map((i) => {
                      return (
                        <div className="flex gap-2 mt-2.5">
                          <p className="text-sm text-gray-400">{i.name}:</p>
                          <p className="text-sm text-gray-400">{i.value}</p>
                        </div>
                      );
                    })}
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
