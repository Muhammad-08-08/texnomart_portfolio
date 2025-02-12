import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ProductPage() {
  const [product, setProduct] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://gw.texnomart.uz/api/web/v1/product/detail?id=${id}`)
      .then((response) => {
        console.log(response.data.data.data);
      });
  }, []);
  return <div>ProductPage</div>;
}

export default ProductPage;
