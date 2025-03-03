import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";

function KategoryFilter() {
  const { slug } = useParams();
  useEffect(() => {
    axios
      .get(`https://gw.texnomart.uz/api/web/v1/category/chips?slug=${slug}`)
      .then((response) => {
        console.log(response.data);
      });
  }, [slug]);
  return <div></div>;
}

export default KategoryFilter;
