/* eslint-disable jsx-a11y/anchor-is-valid */
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
  // const handleClose = () => setNav(!nav);
  return (
    <div className="flex justify-center items-center">
    <div className="flex justify-between items-center container mt-8 font-redRose">
      <section className="flex justify-between items-center m-5">
        <img className="w-32 md:w-full" src={logo} alt="" />
      </section>

      <div className="hidden md:flex">
        <ul className="flex gap-8">
          <a>
            <Link to="/">Home</Link>
          </a>
          <a>
            <Link to="/placetostay">Place to stay</Link>
          </a>
          <a>
            <li>NFTs</li>
          </a>
          <a>
            <li>Community</li>
          </a>
        </ul>
      </div>
      <div className="">
        <button
          onClick={() => setShowModal(true)}
          className="hidden md:block w-[170px] h-[48px] left-[1070px] gap-[10px] bg-[#A02279] rounded-[10px] font-redRose not-italic font-normal text-[16px] leading-5 text-white"
        >
          Connect wallet
        </button>
        <div className="md:hidden mr-4 z-10" onClick={handleClick}>
          {!nav ? (
            <GiHamburgerMenu fontSize="1.5rem" />
          ) : (
            <MdOutlineClose fontSize="1.5rem" />
          )}
        </div>
        {showModal ? <Modal setShowModal={setShowModal} /> : null}
      </div>

      <ul
        className={
          !nav ? "hidden" : "absolute bg-zinc-200 w-full px-8 mt-[17rem]"
        }
      >
        <ul className="flex flex-col gap-4 text-[#A02279]">
          <a className="mt-2">
            <Link to="/">Home</Link>
          </a>
          <a>
            <Link to="/placetostay">Place to stay</Link>
          </a>
          <a>
            <li>NFTs</li>
          </a>
          <a>
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
    </div>
  );
};

export default Navbar;
