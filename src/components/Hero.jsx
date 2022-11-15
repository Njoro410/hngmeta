import React from "react";

const Hero = () => {
  return (
    <div className="container m-8 mt-16 grid grid-cols-1 md:grid-cols-2">
      <div>
        <p className="w-[646px] h-[148px] font-redRose font-normal text-[56px] leading-[140%] tracking-[-0.02em] text-[#434343]">
          Rent a <span className="text-[#A02279] font-bold">Place</span> away
          from
          <br /> <span className="text-[#A02279] font-bold">Home</span> in the{" "}
          <span className="text-[#A02279] font-bold">Metaverse</span>
        </p>
        <section>
          <p>
            Home Place to stay NFTs Community Connect wallet Rent a Place away
            from Home in the Metaverse we provide you access to luxury and
            affordable houses in the metaverse, get a chance to turn your
            imagination to reality at your comfort zone
          </p>
        </section>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
