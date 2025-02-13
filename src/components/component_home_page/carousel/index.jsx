import { Carousel } from "antd";

function CarouselPage() {
  const bannerImg = [
    {
      id: 351,
      image_mobile_web:
        "https://mini-io-api.texnomart.uz/newcontent/slider/351/LBL8fNp2Ax0BNyhwy1pvpjArksaG2xfJSfMaGJ6y.webp",
      link: "promotions/predlozenie-dnia/",
      title: "Kun taklifi!",
    },
    {
      id: 354,
      image_mobile_web:
        "https://mini-io-api.texnomart.uz/newcontent/slider/354/5Vy3AMmSkhQ0bokh7R8nxxjWteyvmSrNSIfVie11.webp",
      link: "promotions/huawei-nova-13/",
      title: "Huawei nova 13",
    },
    {
      id: 353,
      image_mobile_web:
        "https://mini-io-api.texnomart.uz/newcontent/slider/353/9vWrereysnOoE7DZRhAjW9tHJ35qginyLDy30Ykg.webp",
      link: "promotions/bystraia-dostavka/",
      title: "⚡️Tezkor yetkazma⚡️",
    },
    {
      id: 352,
      image_mobile_web:
        "https://mini-io-api.texnomart.uz/newcontent/slider/352/xpHjiYVmfl0ufCZ1yG70uUvWpmUv7cSRSJYp6qOG.webp",
      link: "promotions/lg-texnomart/",
      title: "LG | Texnomart",
    },
    {
      id: 355,
      image_mobile_web:
        "https://mini-io-api.texnomart.uz/newcontent/slider/355/krOyxwIzjM3dSPG0x7MS6WXp7IWiOAGVhqraYBob.webp",
      link: "promotions/lg-stiralnaia-i-susilnaia-masina/",
      title: "LG | Kir yuvish va quritish mashinasi",
    },
    {
      id: 350,
      image_mobile_web:
        "https://mini-io-api.texnomart.uz/newcontent/slider/350/8WwAvYc7wmh8zZ8VrlhuVShxH0sjMdDdBPKbJPOX.webp",
      link: "promotions/galaxy-s25-series/",
      title: "Galaxy S25 Series",
    },
    {
      id: 347,
      image_mobile_web:
        "https://mini-io-api.texnomart.uz/newcontent/slider/347/YXXP2l0QDhUaENFOjkp1kaTXrNYN3CyMhFqxTpmn.webp",
      link: "promotions/dom-milyi-dom/",
      title: "Shinamgina, qulaygina xonadon!",
    },
  ];

  return (
    <div
      style={{ width: "80%", margin: "auto", marginTop: 30, cursor: "pointer" }}
    >
      <Carousel
        draggable
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
              src={item.image_mobile_web}
              alt="banner img"
              style={{ width: "100%", height: "400px", borderRadius: "10px" }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselPage;
