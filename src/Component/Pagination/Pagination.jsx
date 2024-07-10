import React from "react";
import { RightArrow, LeftArrow } from "../../../public/Assets";

function Pagination({ pageNum, setPage, length, dataCount, className }) {
  const handlePageNumber = (e) => {
    const btnNum = parseInt(e.target.textContent);
    setPage(btnNum - 1);
  };
  return (
    <div
      className={`ml sticky bottom-0 flex w-full justify-between ${className}`}
    >
      <button
        className="rounded-md bg-darkblue p-2 text-white"
        onClick={() => {
          if (pageNum > 0) setPage((prev) => prev - 1);
        }}
      >
        <LeftArrow />
      </button>
      <div className="flex gap-x-4">
        {[...Array(Math.ceil(length / dataCount))].map((_, i) => (
          <button
            key={i}
            className={` ${
              pageNum === i
                ? "bg-lightblue text-white"
                : "bg-gray-200 text-black"
            } rounded-md px-4`}
            onClick={handlePageNumber}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button
        className="rounded-md bg-darkblue p-2 text-white"
        onClick={() => {
          if (pageNum < length) setPage((prev) => prev + 1);
        }}
      >
        <RightArrow />
      </button>
    </div>
  );
}

export default Pagination;
