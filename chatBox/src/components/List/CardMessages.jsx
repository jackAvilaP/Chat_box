import React from "react";

import goku from "../../assets/img/goku.png";

const CardMessages = () => {
  return (
    <div className="flex flex-row justify-between mt-[34px] border-b-[1px] border-[#B4ABAB] ">
      <img
        src={goku}
        alt=""
        className="w-[50px] h-[50px] object-cover rounded-full"
      />
      <div className="text-left">
        <h2>Friends Forever</h2>
        <p>Hahahahah!</p>
      </div>
      <div className="flex flex-col items-end mb-[6px]">
        <p>Today, 9.52pm</p>
        <p className="w-[30px] h-[30px] text-center bg-orange-500 object-cover rounded-full text-white">
          4
        </p>
      </div>
    </div>
  );
};

export default CardMessages;
