import { useEffect, useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { useSwiper } from "swiper/react";

export default function SlideNextButton() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, [swiper]);
  return (
    <>
      {!isEnd && (
        <button
          className="w-20 h-20 bg-secondary rounded-full flex justify-center items-center text-2xl text-primary  lg:right-0 lg:absolute lg:top-32  z-10"
          onClick={() => swiper.slideNext()}
        >
          <GrLinkNext />
        </button>
      )}
    </>
  );
}
