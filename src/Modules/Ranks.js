import React from 'react'
import { FaSortUp } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

const Ranks = () => {
  return (
    <div className='w-[300px]'>
        <div className='bg-[#3b5987] flex justify-between text-white p-[17px] items-center border-b-[2px] border-b-white rounded-t-[28px]'>
            <div className='border-[2px] border-white p-[7px] rounded-full'># 3</div>
            <div>Sebestian</div>
            <div>1124 <FaSortUp className='text-green-500'/></div>
        </div>
        <div className='bg-[#3b5987] flex justify-between text-white p-[17px] items-center border-b-[2px] border-b-white'>
            <div className='border-[2px] border-white p-[7px] rounded-full'># 4</div>
            <div>Jason</div>
            <div>875 <FaCaretDown className='text-red-600'/></div>
        </div>
        <div className='bg-[#3b5987] flex justify-between text-white p-[17px] items-center border-b-[2px] border-b-white'>
            <div className='border-[2px] border-white p-[7px] rounded-full'># 5</div>
            <div>Natalie</div>
            <div>774 <FaSortUp className='text-green-500'/></div>
        </div>
        <div className='bg-[#3b5987] flex justify-between text-white p-[17px] items-center border-b-[2px] border-b-white'>
            <div className='border-[2px] border-white p-[7px] rounded-full'># 6</div>
            <div>Serenity</div>
            <div>723 <FaSortUp className='text-green-500'/></div>
        </div>
        <div className='bg-[#3b5987] flex justify-between text-white p-[17px] items-center border-b-[2px] rounded-b-[28px]'>
            <div className='border-[2px] border-white p-[7px] rounded-full'># 7</div>
            <div>Hannah</div>
            <div>559 <FaCaretDown className='text-red-600'/></div>
        </div>
    </div>
  )
}

export default Ranks