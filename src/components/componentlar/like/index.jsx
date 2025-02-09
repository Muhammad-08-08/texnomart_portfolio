function LikePage({ like, likeKatalog }) {
  return (
    <div className="fixed w-full h-screen top-0 left-0 flex justify-center items-center z-10">
      <div
        onClick={() => likeKatalog(false)}
        className="fixed w-full h-screen bg-black/50 top-0 left-0 -z-10"
      ></div>
      <div className="w-[80%] py-10 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-5">Sevimlilar</h2>
        <div className="max-h-[500px] overflow-y-auto px-5">
          {like.length > 0 ? (
            like.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center gap-5 border-b py-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <p className="font-semibold">
                    {index + 1}. {item.name}
                  </p>
                  <p className="text-gray-500">{item.sale_price} so'm</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              Sevimlilarda hech narsa yo‘q
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LikePage;
