import React from 'react'
import group from "../resources/Group.png"
import facebook from "../resources/facebook.svg"
import insta from "../resources/insta.svg"
import twitter from "../resources/twitter.svg"


const Footer = () => {
  return (
    <div className='w-full h-full text-white font-redRose bg-[#1d1d1e] '>
        <section className='flex flex-col  md:grid grid-cols-2 lg:grid-cols-4'>
        <div>
            <section className='m-8'>
            <img src={group} alt="logo" />  
            </section>
            <section className='flex gap-12 ml-8 md:m-8 py-8'>
                <img src={facebook} alt="facebook" />
                <img src={insta} alt="instagram" />
                <img src={twitter} alt="twitter" />
            </section>
            <section className='m-8'>
                {/* <img src={group1} alt="" /> */}
                <p>Ⓒ 2022 Metabnb</p> 
            </section>
              
        </div>
        <div className='ml-8 md:m-8'>
            <p className='font-bold text-xl py-4'>Community</p>
            <ul className='font-normal'>
                <li className='py-1'>NFT</li>
                <li className='py-1'>Tokens</li>
                <li className='py-1'>Landlords</li>
                <li className='py-1'>Discord</li>
            </ul>
        </div>

        <div className='ml-8 md:m-8'>
            <p className='font-bold text-xl py-4'>Places</p>
            <ul>
                <li className='py-1'>Castle</li>
                <li className='py-1'>Farms</li>
                <li className='py-1'>Beach</li>
                <li className='py-1'>Learn more</li>
            </ul>
        </div>

        <div className='ml-8 md:m-8'>
            <p className='font-bold text-xl py-4'>About us</p>
            <ul>
                <li className='py-1'>Road map</li>
                <li className='py-1'>Creators</li>
                <li className='py-1'>Career</li>
                <li className='py-1'>Contact us</li>
            </ul>
        </div>
        </section>
    </div>
  )
}

export default Footer