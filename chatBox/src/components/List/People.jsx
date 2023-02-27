import React, { useState } from "react";
import CardMessages from "./CardMessages";

const People = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="groups">
      <div className="text-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="font-bold text-[#303030] text-xl w-full flex justify-between mb-3"
        >
          People
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-[#9747FF]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-[#9747FF]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          )}
        </button>
        {isOpen && (
          <div className="h-[22.5rem] overflow-y-auto hover:overflow-y-scroll">
            <CardMessages />
            <CardMessages />
            <CardMessages />
            <CardMessages />
            <CardMessages />
            <CardMessages />
            <CardMessages />
            <CardMessages />
          </div>
        )}
      </div>
    </div>
  );
};

export default People;
