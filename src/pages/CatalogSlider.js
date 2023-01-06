import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import { Container } from "@mui/system";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import catalog1 from "../images/catalog/1.jpg";
import catalog2 from "../images/catalog/2.jpg";
import catalog3 from "../images/catalog/3.jpg";
import useWindowDimensions from "../components/getWindowDimensions";

const data = [
  {
    img: catalog1,
    title: "Fasteners",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laudantium quibusdam quod saepe nemo accusamus odit ad ex! Magnam laborum ut rem commodi obcaecati",
  },
  {
    img: catalog2,
    title: "Drivers",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laudantium quibusdam quod saepe nemo accusamus odit ad ex! Magnam laborum ut rem commodi obcaecati",
  },
  {
    img: catalog3,
    title: "Company Profile",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laudantium quibusdam quod saepe nemo accusamus odit ad ex! Magnam laborum ut rem commodi obcaecati",
  },
  {
    img: catalog3,
    title: "Company Profile",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laudantium quibusdam quod saepe nemo accusamus odit ad ex! Magnam laborum ut rem commodi obcaecati",
  },
];

const CatalogSlider = () => {
  const { width } = useWindowDimensions();

  return (
    <Container className='pt-28' id='catalogs'>
      <h1 className='sm:text-7xl text-5xl font-semibold leading-snug text-shadow mb-12 text-center title'>
        OUR CATALOGS
        <div
          className='w-44 h-2 m-auto mt-4'
          style={{ backgroundColor: "rgba(254,1,0,0.8)" }}
        ></div>
      </h1>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={width > 1000 ? 3 : width > 650 ? 2 : 1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        scrollbar={{ draggable: true }}
      >
        {data.map((item, i) => {
          const { img, title, desc } = item;
          return (
            <SwiperSlide key={i}>
              <div className='p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer'>
                <div className='w-full h-48 mb-4 rounded-sm overflow-hidden'>
                  <img
                    src={img}
                    alt='hey'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div>
                  <p className='text-lg font-semibold mb-1'>{title}</p>
                  <p className='text-justify'>{desc}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default CatalogSlider;
