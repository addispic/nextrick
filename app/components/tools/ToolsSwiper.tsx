"use client"
import useEmblaCarousel from 'embla-carousel-react'
export default function ToolsSwiper() {
    const [emblaRef] = useEmblaCarousel({ loop: false });
    const slides = Array.from({ length: 8 }, (_, i) => `Slide ${i + 1}`);
    return (
        <div className="col-span-7">
            <h3>Tools Swiper</h3>
            {/* The main carousel wrapper */}
            <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex">
                    {slides.map((slide, i) => (
                        <div
                            key={i}
                            className="embla__slide flex-none w-64 py-20" // padding so hover can grow
                        >
                            {/* Inner wrapper allows overflow */}
                            <div className="relative overflow-visible">
                                <div className="border border-neutral-200 bg-white h-36 flex items-center justify-center transition-all ease-in-out duration-300 shadow-sm hover:scale-110 hover:shadow-2xl hover:bg-red-500 hover:z-50">
                                    {slide}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}