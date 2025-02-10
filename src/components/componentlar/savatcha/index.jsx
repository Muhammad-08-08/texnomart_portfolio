import { DeleteOutlined } from "@ant-design/icons";
import FavouriteIcon from "../../../assets/favourite-stroke-rounded";
import useMyStore from "../../component_home_page/zustand/useMyStore";

function Savatcha({ savatcha, savatchaKatalog }) {
  const removeFromCart = useMyStore((state) => state.removeFromCart);
  const toggleLike = useMyStore((state) => state.toggleLike);
  const likeList = useMyStore((state) => state.like);
  const increaseCount = useMyStore((state) => state.increaseCount);
  const decreaseCount = useMyStore((state) => state.decreaseCount);

  return (
    <div className="fixed w-full h-screen top-0 left-0 flex justify-center items-center z-10">
      <div
        onClick={() => savatchaKatalog(false)}
        className="fixed w-full h-screen bg-black/50 top-0 left-0 -z-10"
      ></div>
      <div className="w-[80%] py-10 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-5">Savatcha</h2>
        <div>
          <div className="max-h-[500px] overflow-y-auto px-5">
            {savatcha.length > 0 ? (
              savatcha.map((item, index) => {
                const isLiked = likeList.some((l) => l.id === item.mahsulot.id);
                return (
                  <div
                    key={item.mahsulot.id}
                    className="flex items-center gap-5 py-3"
                  >
                    <img
                      src={item.mahsulot.image}
                      alt={item.mahsulot.name}
                      className="w-16 h-16 object-contain"
                    />
                    <div className="flex-1 flex gap-20 items-center">
                      <p className="font-semibold">
                        {index + 1}. {item.mahsulot.name}
                      </p>
                      <div className="flex items-center gap-5 py-1 px-6 bg-gray-100 rounded-lg">
                        <button
                          className="text-2xl cursor-pointer px-2"
                          onClick={() =>
                            item.count > 1 && decreaseCount(item.mahsulot.id)
                          }
                        >
                          -
                        </button>
                        <span className="text-lg">{item.count}</span>
                        <button
                          className="text-2xl cursor-pointer px-2"
                          onClick={() => increaseCount(item.mahsulot.id)}
                        >
                          +
                        </button>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <FavouriteIcon
                          onClick={() => toggleLike(item.mahsulot)}
                          className="cursor-pointer"
                          like={isLiked ? "red" : "white"}
                        />
                        <DeleteOutlined
                          onClick={() => removeFromCart(item.mahsulot.id)}
                          className="cursor-pointer text-red-500 hover:text-red-700 text-xl"
                        />
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-500">Savatcha bo'sh</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Savatcha;
