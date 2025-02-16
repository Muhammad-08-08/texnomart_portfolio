import axios from "axios";
import React, { useEffect, useState } from "react";

function DokonlardaMavjudligi({ productId }) {
  const [dokondaMavjud, setdokondaMavjud] = useState();
  useEffect(() => {
    axios
      .get(
        `https://gw.texnomart.uz/api/web/v1/product/available-stores?id=${productId}`
      )
      .then((response) => {
        console.log(response.data.data.data);
        setdokondaMavjud(response.data)
      });
  }, []);
  return <div></div>;
}

export default DokonlardaMavjudligi;
