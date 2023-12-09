import PropTypes from "prop-types";
import { useSwiper, SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useEffect } from "react";

import SlideNextButton from "./SlideNextButton";
import SlidePreviousButton from "./SlidePreviousButton";
// import Previous from "../buttons/Previous";
// import Next from "../buttons/Next";

const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    if (swiper) swiper.slideTo(0, null);
  }, [data, swiper]);
  return <></>;
};

const Carousel = ({ data, renderComponent }) => {
  return (
    <div>
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        spaceBetween={10}
        slidesPerView={"auto"}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        <Controls data={data} />
        <SlidePreviousButton />
        <SlideNextButton />
        {data.map((item) => (
          <SwiperSlide key={item.id}>{renderComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Carousel.propTypes = {
  data: PropTypes.array,
  renderComponent: PropTypes.func,
};
Controls.propTypes = {
  data: PropTypes.object,
};
export default Carousel;
