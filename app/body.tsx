import Image from 'next/image'
import React from 'react'
import { GoPlus } from 'react-icons/go'
import { TiMicrophone } from 'react-icons/ti'
import img0 from "../public/text.png"
// import img1 from "../public/dollar.png"
import img1 from "../public/dollar.png"

const Body = () => {
    const nums = [0,1,2,3,4,5,6,7,8,9]
  return (
    <div className='w-full h-[600px] flex flex-col justify-between bg-[#000]'>
        <div>
              <h1 className='text-center text-neutral-400 pt-3 text-[12px]'>iMessage</h1>
              <div className='flex justify-end pt-3 pr-1 '>
                <Image className='absolute' src={img0} alt='#' width={150} height={150} />

{/* <p className='relative text-white text-[30px]' style={{fontFamily: "roboto"}}>$2000</p> */}
                {/* <Image className='relative right-[50px] top-[13px]'  src="/dollar.png" width={40} height={40} alt='#' />
               
                <Image className='relative right-[50px] top-[13px]'  src={`/${nums[0]}.png`} width={40} height={40} alt='#' /> */}
               
                
              </div>
              
        </div>
    
      <div className='w-full'>  
        <div className='flex justify-between w-full p-2'  >
            <div className='w-[20%]'> 
                 <div className='col-span-1 rounded-full w-[40px] h-[40px] bg-[#1F1F21] flex justify-center items-center'>
                <GoPlus className='text-white text-[30px]'  />
            </div>
            </div>
           
            <div className=' col-span-4 rounded-full bo border-[3px] border-[#1F1F21] flex justify-between w-full items-center px-5'>
                <div className='text-neutral-500 font-medium'>iMessage</div>
                <div className='text-white'>
                    <TiMicrophone className='text-[#4D4D4D] text-[25px]' />
                </div>
            </div>
        </div>
        
      </div>
     
    </div>
  )
}

export default Body
