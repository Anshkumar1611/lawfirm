import { GrLinkPrevious } from "react-icons/gr";
import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

const SlidePreviousButton = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
    });
  }, [isBeginning, swiper, swiper.isBeginning]);

  return (
    <>
      {!isBeginning && (
        <button
          className="w-20 h-20 bg-white rounded-full flex justify-center items-center text-2xl text-primary lg:absolute lg:top-32 lg:right-24 z-10"
          onClick={() => swiper.slidePrev()}
        >
          <GrLinkPrevious />
        </button>
      )}
    </>
  );
};

export default SlidePreviousButton;
