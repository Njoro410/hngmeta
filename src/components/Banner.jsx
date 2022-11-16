import React from "react";
import token from "../resources/mbtoken.svg"
import sea from "../resources/opensea.svg"
import meta from "../resources/metamask.svg"

const Banner = () => {
  return (
    <div className="w-full h-[70px]  flex flex-row justify-center items-center md:gap-[264px] py-[10px] md:px-[100px] bg-[#A02279]">
      <div>
        <img className="p-5 md:p-0" src={token} alt="" />
      </div>
      <div>
      <img className="p-5 md:p-0" src={meta} alt="" />
      </div>
      <div>
        <img className="p-5 md:p-0" src={sea} alt="" />
      </div>
    </div>
  );
};

export default Banner;
