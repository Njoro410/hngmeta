/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import skewed from "../resources/skewed.png"
const CTA = () => {
  return (
    <div className="w-full mt-12 h-[550px] bg-[#A02279] grid grid-cols-1 md:grid-cols-2">
      <div className="container m-auto px-5 md:ml-8">
        <p className="font-redRose font-bold text-4xl md:text-5xl leading-[3.75rem] text-white ">Metabnb NFTs</p>
        <p className="font-redRose font-normal text-lg text-white mb-4">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <a href="#" className="bg-white rounded-[8px] px-3 py-3"><span className="font-redRose text-[#A02279] font-normal text-lg">Learn more</span></a>
      </div>
      <div className="flex items-center justify-center">
        <img src={skewed} className="w-[25rem] md:w-[30rem]" alt="" />
      </div>
    </div>
  );
};

export default CTA;
