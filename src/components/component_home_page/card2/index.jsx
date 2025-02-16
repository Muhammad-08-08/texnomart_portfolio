import React from "react";
import FavouriteIcon from "../../../assets/favourite-stroke-rounded";
import useMyStore from "../zustand/useMyStore";

function CardPage2({
  imgName,
  imgUrl,
  name,
  month_price,
  sale_price,
  item,
  quvvati,
}) {
  const toggleLike = useMyStore((state) => state.toggleLike);
  const savatga_qoshish = useMyStore((state) => state.savatga_qoshish);
  const likeList = useMyStore((state) => state.like);

  const isLiked = likeList.some((l) => l.id === item.id);

  return (
    <div className="flex flex-row items-center p-4 w-full border rounded-lg shadow-md">
      <div className="relative w-44 h-40 flex-shrink-0 px-2 bg-gray-100">
        <img
          alt={imgName}
          src={imgUrl}
          className="w-full h-full object-cover rounded-lg"
        />
        <FavouriteIcon
          onClick={(e) => {
            e.preventDefault();
            toggleLike(item);
          }}
          className="cursor-pointer absolute top-2 right-2"
          like={isLiked ? "red" : "white"}
        />
      </div>
      <div className="ml-6 flex-1">
        <p className="text-lg  text-gray-500">{name}</p>
        <div>{quvvati}</div>
      </div>
      <div className="text-right flex flex-col items-end">
        <h4 className="text-xl font-bold">
          {Math.floor(sale_price).toLocaleString("ru")} so'm
        </h4>
        <p className="text-gray-600 text-sm mt-1">{month_price}</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            savatga_qoshish(item);
          }}
          className="mt-3 px-4 py-2 border-2 border-amber-400 text-amber-500 rounded-lg hover:bg-amber-100 transition cursor-pointer"
        >
          Savatchaga
        </button>
      </div>
    </div>
  );
}

export default CardPage2;
