import { Carousel } from "antd";

function CarouselPage() {
  const bannerImg = [
    "https://mini-io-api.texnomart.uz/newcontent/slider/352/48Y7UgHhfbvItnjWKO6uKhhLEy9itif1fIvkZajP.webp",
    "https://mini-io-api.texnomart.uz/newcontent/slider/351/zYLVt85NS8jHWBx39KIwcv5W7EqQivIQ35gnYmO7.webp",
    "https://mini-io-api.texnomart.uz/newcontent/slider/353/xnoV6GH7LvFlDRpDpsshAaebZk9RQ4t6oVQLq83i.webp",
    "https://mini-io-api.texnomart.uz/newcontent/slider/350/Uab0Dz7JXMSJ3QX89NhrOKn8ZPSF2lrucAGVxFgt.webp",
    "https://mini-io-api.texnomart.uz/newcontent/slider/347/dyFPEw5MYDBCgQSopcXyBcpOE1HVhSugUCb7V3ad.webp",
  ];

  return (
    <div style={{ width: "80%", margin: "auto", marginTop: 30 }}>
      <Carousel
        autoplay
        autoplaySpeed={4000}
        speed={600}
        pauseOnHover={false}
        arrows
        dots={true}
        infinite={true}
      >
        {bannerImg.map((item, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <img
              src={item}
              alt="banner img"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselPage;
