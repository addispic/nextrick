"use client";
import { useRef } from "react";
// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default function Partners() {
  // refs
  const paginationRefs = useRef<HTMLDivElement | null>(null);
  return (
    <div className="col-span-7">
      <Swiper
        // install Swiper modules
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={3}
        resistance={true}
        resistanceRatio={0}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        speed={1500}
        pagination={{
          el: paginationRefs.current,
          clickable: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="border-l border-t border-neutral-200 relative "
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
          <SwiperSlide
            key={i}
            className="border-b! border-r! border-neutral-200!"
          >
            <div className="relative overflow-visible w-full h-36 flex items-center justify-center">
              <div
                className="w-full h-full bg-white flex items-center justify-center
                        transition-transform duration-300 ease-in-out
                        hover:scale-110 hover:z-50 hover:shadow-2xl
                        border border-transparent hover:border-neutral-200 cursor-pointer"
              >
                Slide {i + 1}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        ref={paginationRefs}
        className="custom-pagination h-10 flex items-center justify-center gap-1.5"
      />
    </div>
  );
}
