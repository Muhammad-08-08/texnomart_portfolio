import { Button, Card } from "antd";
import { Color } from "antd/es/color-picker";
import React from "react";

function CardPage2({ imgName, imgUrl, name, month_price, sale_price, item }) {
  const DEFAULT_COLOR = [
    {
      color: "rgb(16, 142, 233)",
      percent: 0,
    },
    {
      color: "rgb(135, 208, 104)",
      percent: 100,
    },
  ];
  return (
    <Card hoverable style={{ width: 240 }}>
      <div className="h-[250px] bg-gray-100 relative">
        <img alt={imgName} src={imgUrl} />
        <FavouriteIcon
          onClick={(e) => {
            e.preventDefault(), toggleLike(item);
          }}
          className="cursor-pointer absolute -right-1.5 -top-1.5"
          like={isLiked ? "red" : "white"}
        />
      </div>
      <p>{name}</p>
      <h4 className="px-2 py-1 bg-gray-200 rounded-xl mt-5">{month_price}</h4>
      <div className="mt-8 flex justify-between">
        <h4 className="text-lg font-bold">{sale_price} so'm</h4>

        <button
          onClick={(e) => {
            e.preventDefault(), savatga_qoshish(item);
          }}
          className="px-2 py-1 border-2 border-amber-400 rounded-xl cursor-pointer"
        >
          <Button defaultValue={DEFAULT_COLOR} variant="outlined">
            Savatchaga
          </Button>
        </button>
      </div>
    </Card>
  );
}

export default CardPage2;
