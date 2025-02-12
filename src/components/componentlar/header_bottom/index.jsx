import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function TopCategory() {
  const [topCategory, setTopCategory] = useState([]);
  useEffect(() => {
    axios
      .get("https://gw.texnomart.uz/api/web/v1/header/top-categories")
      .then((res) => {
        setTopCategory(res.data.data.data);
      });
  }, []);
  return (
    <div className="container mx-auto px-10 py-5 flex justify-between">
      {topCategory.map((item, index) => {
        return (
          <Link key={index} to={`/top-category/${item.slug}`}>
            <p className="cursor-pointer font-medium hover:text-gray-600">
              {item.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default TopCategory;
