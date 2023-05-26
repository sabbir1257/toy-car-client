import React from "react";
import banner from '../../img/bannerToy.png'

const Banner = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 justify-between md:w-[1250px] mx-auto md:py-14 ">
        <div className="text-2xl my-auto">
          <h1 className="text-5xl font-bold">Welcome To <br /> COLLECTON <span className="text-blue-600 ">MART</span></h1><br />
          <p>
            With thousands of cars, <br />
            we have jsut the right one for you
          </p>
        </div>
        <div>
          <img className="" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;


