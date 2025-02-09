import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import useMyStore from "../../component_home_page/zustand/useMyStore";
import FavouriteIcon from "../../../assets/favourite-stroke-rounded";

function CardPage({ imgName, imgUrl, name, month_price, sale_price, item }) {
  const toggleLike = useMyStore((state) => state.toggleLike);
  const addToCart = useMyStore((state) => state.addToCart);
  const likeList = useMyStore((state) => state.like);

  const isLiked = likeList.some((l) => l.id === item.id);

  return (
    <Card hoverable style={{ width: 240 }}>
      <div className="h-[250px] bg-gray-100 relative">
        <img alt={imgName} src={imgUrl} />
        <FavouriteIcon
          onClick={() => toggleLike(item)}
          className="cursor-pointer absolute -right-1.5 -top-1.5"
          like={isLiked ? "red" : "white"}
        />
      </div>
      <p>{name.slice(0, 25)}...</p>
      <h4 className="px-2 py-1 bg-gray-200 rounded-xl mt-5">{month_price}</h4>
      <div className="mt-8 flex justify-between">
        <h4 className="text-lg font-bold">{sale_price} so'm</h4>

        <button
          onClick={() => addToCart(item)}
          className="px-2 py-1 border-2 border-amber-400 rounded-xl cursor-pointer"
        >
          <ShoppingCartOutlined className="cursor-pointer" />
        </button>
      </div>
    </Card>
  );
}

export default CardPage;
