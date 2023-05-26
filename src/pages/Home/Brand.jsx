import React from "react";
import brand from "../../img/Brand.jpeg";
import brand1 from "../../img/Brand1.jpeg";
import brand2 from "../../img/Brand2.png";
import brand3 from "../../img/Brand3.png";

const Brand = () => {
  return (
    <div className="md:w-[1250px] mx-auto my-12">
        <h1 className="text-3xl font-bold text-blue-600 text-center underline my-6">Brand</h1>
      <div className="md:flex gap-11 mx-auto justify-center">
        <img src={brand} alt="" />
        <img src={brand1} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
      </div>
    </div>
  );
};

export default Brand;
