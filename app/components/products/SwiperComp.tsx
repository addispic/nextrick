"use client"
import { useRef } from 'react'
// import Swiper core and required modules
import { Grid, Pagination, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';

export default function SwiperComp() {
    // refs
    const paginationRefs = useRef<HTMLDivElement | null>(null)
    return (
        <div className="col-span-7">
            <Swiper
                // install Swiper modules
                modules={[Pagination, Grid]}
                spaceBetween={0}
                slidesPerView={3}
                grid={{ rows: 2, fill: 'row' }}
                resistance={true}
                resistanceRatio={0}
                pagination={{
                    el: paginationRefs.current,
                    clickable: true
                }}

                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='border-l border-t border-neutral-200 '
            >
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
                        <SwiperSlide key={i} className='border-b! border-r! border-neutral-200! '>

                            <div className={`w-full h-36  flex items-center justify-center bg-white transition-all hover:scale-110 border border-transparent hover:border-neutral-200 cursor-pointer ease-in-out duration-300 hover:shadow-2xl`}>Slide {i + 1}</div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
            <div ref={paginationRefs} className='custom-pagination h-10 flex items-center justify-center gap-1.5' />
        </div>
    )
}