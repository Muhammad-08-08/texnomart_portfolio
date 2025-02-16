function saqlashMahsulot(productId) {
  let saqlanganIdlar = JSON.parse(localStorage.getItem("recentlyViewed")) || [];

  if (!saqlanganIdlar.includes(productId)) {
    saqlanganIdlar.push(productId);

    if (saqlanganIdlar.length > 20) {
      saqlanganIdlar.shift();
    }

    localStorage.setItem("recentlyViewed", JSON.stringify(saqlanganIdlar));
  }
}

export default saqlashMahsulot;
