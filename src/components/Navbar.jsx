import React, { useState } from "react";
import logo from "../resources/logo.svg";
import Modal from "./Modal";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);
  return (
    <div className="flex justify-between items-center container mt-8 font-redRose">
      <div className="flex gap-[10rem] m-5">
        <section>
          <img className="w-32 md:w-full" src={logo} alt="" />
        </section>
        <div className="md:hidden mr-4 z-10" onClick={handleClick}>
          {!nav ? (
            <GiHamburgerMenu className="w-5" />
          ) : (
            <MdOutlineClose className="w-5" />
          )}
        </div>
      </div>
      <div className="hidden md:flex">
        <ul className="flex gap-4">
          <a href="http://">
            <li>Home</li>
          </a>
          <a href="http://">
            <li>Place to stay</li>
          </a>
          <a href="http://">
            <li>NFTs</li>
          </a>
          <a href="http://">
            <li>Community</li>
          </a>
        </ul>
      </div>
      <div className="hidden md:flex">
        <button
          onClick={() => setShowModal(true)}
          className="w-[170px] h-[48px] left-[1070px] gap-[10px] bg-[#A02279] rounded-[10px] font-redRose not-italic font-normal text-[16px] leading-5 text-white"
        >
          Connect wallet
        </button>
        {showModal ? <Modal setShowModal={setShowModal} /> : null}
      </div>

      <ul
        className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8 mt-60"}
      >
        <ul className="flex flex-col gap-4">
          <a href="http://">
            <li>Home</li>
          </a>
          <a href="http://">
            <li>Place to stay</li>
          </a>
          <a href="http://">
            <li>NFTs</li>
          </a>
          <a href="http://">
            <li>Community</li>
          </a>
        </ul>




        <div className="flex flex-col my-4">
        <button
          onClick={() => setShowModal(true)}
          className="w-[170px] h-[48px] left-[1070px] gap-[10px] bg-[#A02279] rounded-[10px] font-redRose not-italic font-normal text-[16px] leading-5 text-white"
        >
          Connect wallet
        </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
