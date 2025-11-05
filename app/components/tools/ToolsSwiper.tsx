"use client";
import useEmblaCarousel from "embla-carousel-react";

export default function ToolsSwiper() {
    const [emblaRef] = useEmblaCarousel({
        loop: false,
        containScroll: "trimSnaps",
        dragFree: false,
    });

    const slides = Array.from({ length: 8 }, (_, i) => `Slide ${i + 1}`);

    // Group slides 2 per column
    const grouped: string[][] = [];
    for (let i = 0; i < slides.length; i += 2) {
        grouped.push(slides.slice(i, i + 2));
    }

    return (
        <div className="col-span-7">
            <div className="embla overflow-hidden pb-64" ref={emblaRef}>
                {/* Outer frame: only top + left */}
                <div className="embla__container flex border-t border-l border-neutral-200">
                    {grouped.map((column, colIndex) => {
                        const isLastCol = colIndex === grouped.length - 1;
                        return (
                            <div key={colIndex} className="embla__slide flex-none w-64">
                                <div className="grid grid-rows-2">
                                    {column.map((slide, rowIndex) => {
                                        const isTopRow = rowIndex === 0;
                                        const isBottomRow = rowIndex === column.length - 1;
                                        const isLastCell = isLastCol && isBottomRow;

                                        return (
                                            <div
                                                key={rowIndex}
                                                className={`h-36 flex items-center justify-center bg-white
                          transition-all duration-300 ease-in-out
                          shadow-none hover:scale-105 hover:z-10 hover:shadow-2xl hover:bg-red-500
                          border-neutral-200
                          border-r border-b
                          ${isTopRow ? "border-t" : ""}
                          ${isLastCol ? "border-r" : ""}
                          ${isBottomRow ? "border-b" : ""}
                          ${isLastCell ? "border-b border-r" : ""}
                        `}
                                            >
                                                {slide}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
