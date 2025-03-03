import { Pagination, Radio, Skeleton } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import CardPage from "../../component_home_page/card";
import CardPage2 from "../../component_home_page/card2";
import YaqindaKorilganlar from "../yaqinda_korib_chiqilgan_mahsulotlar";
import ProductFiltred from "../product_filtred";
import DashboardSquare01Icon from "../../../assets/dashboard-square-01-stroke-rounded";
import ListViewIcon from "../../../assets/list-view-stroke-rounded";
import useMyStore from "../../component_home_page/zustand/useMyStore";
import SideLeft from "../sideLeft";
import KategoryFilter from "../Kategory-filter";

function TopCategoriesPage() {
  const { slug } = useParams();
  const [categories, setCategories] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [filtred, setFiltred] = useState(true);
  const state = useMyStore();
  const { tartibi } = state;

  useEffect(() => {
    setCategories();
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${slug}&sort=${
          tartibi ? "-" : ""
        }${state.hozirgiQiymat}&page=${currentPage}`
      )
      .then((response) => {
        setCategories(response.data.data);
      });
  }, [slug, currentPage, state.hozirgiQiymat, tartibi]);

  useEffect(() => {
    setCurrentPage(1);
  }, [slug]);

  if (!categories) {
    return (
      <div className="w-[90%] flex flex-wrap mx-auto gap-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton.Node
            key={index}
            active={true}
            style={{
              width: 660,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-10">
      <KategoryFilter />
      <div className="flex gap-7">
        <SideLeft categories={categories} />
        <div
          className="w-[75%] h-screen overflow-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex justify-between my-7">
            <ProductFiltred />

            <div className="flex gap-5">
              <DashboardSquare01Icon
                onClick={() => {
                  setFiltred(true);
                }}
              />{" "}
              <ListViewIcon
                onClick={() => {
                  setFiltred(false);
                }}
              />
            </div>
          </div>
          <div
            className={`${
              filtred ? "grid grid-cols-4 gap-6" : "flex flex-col gap-6 mt-3"
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
        </div>
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
      <div className="w-full overflow-x-auto">
        <YaqindaKorilganlar />
      </div>
    </div>
  );
}

export default TopCategoriesPage;
