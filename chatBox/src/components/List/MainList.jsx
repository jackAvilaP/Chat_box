import React from "react";
import Groups from "./Groups";
import People from "./People";
import Search from "./Search";

const MainList = () => {
  return (
    <div className="w-[35%] mx-2">
      <Search />
      <Groups />
      <People />
    </div>
  );
};

export default MainList;
