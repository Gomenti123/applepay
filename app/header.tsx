import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { CgBattery } from 'react-icons/cg'
import { FaChevronLeft } from 'react-icons/fa'
import { MdPerson } from 'react-icons/md'
import { PiVideoCamera } from 'react-icons/pi'
import { TbVideoFilled } from 'react-icons/tb'

const Header = () => {
  return (
    <div className='bg-[#121212] min-h-[100px] w-full'>
        {/* <div>
            <CgBattery className='text-[50px] font-light  text-white' />
        </div> */}
     <div className='flex justify-between text-white px-2 pt-3 items-center'>
        <div>
            <AiOutlineLeft className='text-[#1B86E9] text-[30px] font-light' />
            {/* <FaChevronLeft ' /> */}
        </div>
        <div className='bg-[#999DA9] p-1 rounded-full '>
            <MdPerson className='text-[50px]' />
        </div>
        <div>
            {/* <TbVideoFilled className='outline-[#1B86E9] text-[40px]' /> */}
            <PiVideoCamera className='text-[#1B86E9] text-[40px]' />
        </div>
     </div>
     <div className='flex justify-center text-white'>
        <p>Number</p>
     </div>
    </div>
  )
}

export default Header
