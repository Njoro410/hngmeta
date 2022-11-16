import React from "react";
import one from "../resources/places1/Group 4048.png";
import two from "../resources/places1/Group 4049.png";
import three from "../resources/places1/Group 4050.png";
import four from "../resources/places1/Group 4051.png";
import five from "../resources/places2/Group 4048.png";
import six from "../resources/places2/Group 4049.png";
import seven from "../resources/places2/Group 4050.png";
import eight from "../resources/places2/Group 4051.png";
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
          <img src={one} alt="" />
        </div>
        <div className="m-1">
          <img src={two} alt="" />
        </div>
        <div className="m-1">
          <img src={three} alt="" />
        </div>
        <div className="m-1">
          <img src={four} alt="" />
        </div>
        <div className="m-1">
          <img src={five} alt="" />
        </div>
        <div className="m-1">
          <img src={six} alt="" />
        </div>
        <div className="m-1">
          <img src={seven} alt="" />
        </div>
        <div className="m-1">
          <img src={eight} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Places;
