import React from "react";
import frame151 from "../resources/Frame 143.png";

const Places = () => {
  return (
    <div className="container mx-auto">
      <section className="flex items-center justify-center md:my-12">
        <p className="font-redRose not-italic font-bold text-3xl md:text-5xl leading-[60px] px-1 text-black text-center">
          Inspiration for your next adventure
        </p>
      </section>
      <section className="flex flex-col justify-center items-center md:grid grid-cols-2 lg:grid-cols-4">
        <div className="m-1">
          <img src={frame151} alt="" />
        </div>
        <div className="m-1">
          <img src={frame151} alt="" />
        </div>
        <div className="m-1">
          <img src={frame151} alt="" />
        </div>
        <div className="m-1">
          <img src={frame151} alt="" />
        </div>
        <div className="m-1">
          <img src={frame151} alt="" />
        </div>
        <div className="m-1">
          <img src={frame151} alt="" />
        </div>
        <div className="m-1">
          <img src={frame151} alt="" />
        </div>
        <div className="m-1">
          <img src={frame151} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Places;
