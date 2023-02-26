import React from "react";
import CardMessages from "./CardMessages";

const Groups = () => {
  return (
    <div className="groups">
      <div className="text-left">
        <h1 className="text-[30px] font-bold text-[#303030]">Groups</h1>
      </div>
      <CardMessages />
      <CardMessages />
      <CardMessages />
    </div>
  );
};

export default Groups;
