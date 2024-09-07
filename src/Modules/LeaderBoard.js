import React from 'react'
import avatar from './avatar.png'
import { FaCrown } from "react-icons/fa";

const LeaderBoard = () => {
  return (
    <div className='flex flex-row items-end gap-[1px]'>
        <div className='w-[100px] h-[150px] bg-[#3b5987] flex justify-center items-center flex-col text-white rounded-l-[15px] relative'>
            <img src={avatar} className='absolute rounded-full border-[5px] top-[-40px] w-[80px] border-[#999999]'></img>
            <div className='pb-[10px]'>Jackson</div>
            <div className='font-[700]'>1847</div>
        </div>
        <div className='w-[100px] h-[210px] bg-[#3b5987] flex justify-center items-center flex-col text-white rounded-t-[20px] relative'>
        
        <img src={avatar} className='absolute rounded-full border-[5px] top-[-40px] w-[80px] border-[#ffaa00]'>
        </img>
        <FaCrown className='absolute top-[-70px] 2-[24px] h-[24px] text-[24px] text-[#ffaa00]'/>
            <div className='pb-[10px]'>Eiden</div>
            <div className='font-[700]'>2430</div>
        </div>
        <div className='w-[100px] h-[150px] bg-[#3b5987] flex justify-center items-center flex-col text-white rounded-r-[15px] relative'>
        <img src={avatar} className='absolute rounded-full border-[5px] top-[-40px] w-[80px] border-[#ba4615]'></img>
            <div className='pb-[10px]'>Emma Aria</div>
            <div className='font-[700]'>1674</div>
        </div>
    </div>
  )
}

export default LeaderBoard