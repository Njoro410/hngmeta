import React from "react";
import metamask from "../resources/metamaskm.png"
import connectwallet from "../resources/wallectconnectm.png"
import {AiOutlineClose, AiOutlineRight} from "react-icons/ai"


const Modal = ({ setShowModal }) => {
  return (
    <>
      <div className="justify-center items-center sm:flex m-5 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-2xl md:text-3xl font-semibold">Connect Wallet</h3>
              <button
                className="p-1 ml-auto border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="  h-6 w-6 text-2xl block outline-none focus:outline-none">
                  <AiOutlineClose fontSize={25} color='black'/>
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex flex-col gap-3">
              <p className="font-redRose font-normal text-[16px] leading-[20px]">Choose your preffered wallet:</p>
                <span className="flex justify-between items-center bg-[#F8F9FA]  border border-[#CFD8DC] rounded-[12px] md:w-[32rem] h-[68px] p-3">
                    <img src={metamask} className=" " alt="" />
                    <AiOutlineRight/>
                </span>
                <span className="flex justify-between items-center bg-[#F8F9FA]  border border-[#CFD8DC] rounded-[12px] h-[68px] p-3">
                    <img src={connectwallet} className=" " alt="" />
                    <AiOutlineRight/>
                </span>
            </div>
            
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
