import React from 'react'
import house from '../resources/Vector-1.png'
import meta from '../resources/Vector.png'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center container m-8 font-redRose'>
      <div className='flex'>
        <img className='w-[41.99px] h-[36.37px] top-[3.67px]'  src={house} alt="" />
        <img className='w-[188.1px] h-[32.19px] top-[8.14px] left-[44.9px]'  src={meta} alt="" />
        {/* <p className='text-center text-3xl font-extrabold bg-[91.47deg, #DC3E88 18.25%, #B840AE 43.34%, #843FE8 78.18%)]'>Metabnb</p> */}
      </div>
      <div>
        <ul className='flex gap-4'>
          <li>Home</li>
          <li>Place to stay</li>
          <li>NFTs</li>
          <li>Community</li>
        </ul>
      </div>
      <div>
        <button className='w-[170px] h-[48px] left-[1070px] gap-[10px] bg-[#A02279] rounded-[10px] font-redRose not-italic font-normal text-[16px] leading-5 text-white'>Connect wallet</button>
      </div>
    </div>
  )
}

export default Navbar