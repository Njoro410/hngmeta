import React from "react";
import PTS from "../components/PTS";
import setting from "../resources/setting-5.svg";

const PlaceToStay = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-12 m-5">
        <ul className="flex overflow-y-scroll md:overflow-y-hidden gap-12 font-redRose not-italic font-normal text-lg leading-6 text-[#434343]">
          <li>Restaurant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>fantast city</li>
          <li>beach</li>
          <li>Carbins</li>
          <li>Off-grid</li>
          <li>Farm</li>
        </ul>
        <section>
          <button className="flex gap-3 items-center font-redRose font-normal text-lg leading-[19px] py-3 px-3 border rounded-md">
            <span className="">Location</span>
            <span>
              <img src={setting} alt="" />
            </span>
          </button>
        </section>
      </div>
      <PTS/>
    </div>
  );
};

export default PlaceToStay;
