import React from "react";

const Hero = () => {
  return (
    <div className="container m-8 mt-12 grid grid-cols-1 md:grid-cols-2">
      <div>
        <p className="w-[646px] h-[148px] font-redRose font-normal text-[56px] leading-[140%] tracking-[-0.02em] text-[#434343]">
          Rent a <span className="text-[#A02279] font-bold">Place</span> away
          from
          <br /> <span className="text-[#A02279] font-bold">Home</span> in the{" "}
          <span className="text-[#A02279] font-bold">Metaverse</span>
        </p>
        <section>
          <p className="font-redRose text-[#434343] w-[636px] h-[102px] font-normal not-italic text-sm leading-[35px]">
            Home Place to stay NFTs Community Connect wallet Rent a Place away
            from Home in the Metaverse we provide you access to luxury and
            affordable houses in the metaverse, get a chance to turn your
            imagination to reality at your comfort zone
          </p>
        </section>
        <section>
          <div class="flex ">
            <input
              type="text"
              class="w-[390px] h-[54px] top-[346.08px] p-5 rounded-tl-[8px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[8px] border border-[#a3a3a3] placeholder:font-redRose placeholder:font-normal placeholder:not-italic text-[14px] placeholder:text-[#B8B8B8] placeholder:leading-[130%]"
              placeholder="Search for location"
            />
            <button class="w-[230px] h-[54px] text-white bg-[#A02279] rounded-tl-[0px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[0px] ">
              <span className="font-redRose font-normal text-[16px] leading-[19px]">
                Search
              </span>
            </button>
          </div>
        </section>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
