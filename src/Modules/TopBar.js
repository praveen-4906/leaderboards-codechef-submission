import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { PiCirclesFourFill } from "react-icons/pi";

const TopBar = () => {
  return (
    <div className='flex justify-between pl-[20px] pr-[20px] pt-[20px] pb-[20px]'>
        <IoIosArrowBack className='w-[24px] h-[24px] text-[#2c2c2c]'/>
        <div className='text-[20px] font-[600] text-[#2c2c2c]'>
            Leaderboard
        </div>
        <PiCirclesFourFill className='w-[24px] h-[24px] text-[#2c2c2c]'/>
    </div>
  )
}

export default TopBar