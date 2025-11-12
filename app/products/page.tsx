"use client";
import { useState } from "react";

export default function Products() {
  const items = Array.from({ length: 32 }, (_, i) => i + 1);
  const itemsPerPage = 6;
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Get the current page's items
  const start = page * itemsPerPage;
  const end = start + itemsPerPage;
  const visibleItems = items.slice(start, end);

  return (
    <div className="w-screen h-screen p-3 grid grid-cols-12 gap-7">
      {/* Left side */}
      <div className="col-span-5">left</div>

      {/* Right side */}
      <div className="col-span-7 flex flex-col">
        {/* Grid of products */}
        <div className="grid grid-cols-2 gap-3 flex-grow">
          {visibleItems.map((item, i) => (
            <div
              key={i}
              className="w-full h-24 bg-green-500 rounded-sm flex items-center justify-center text-white text-lg font-semibold"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>

          <span className="text-sm text-gray-700">
            Page {page + 1} of {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
