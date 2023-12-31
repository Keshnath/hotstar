import React from 'react'
import rightArrow from '../../../assets/image/download.png'
const Support = () => {
  return (
    <div className=' p-24 '>
    <h5 className='text-white font-bold text-lg pt-24 '> HELP & SUPPORT </h5>
    <div className='flex gap-4 mt-14'>
    <h4 className='text-white font-bold text-xl cursor-pointer'>Help Centre</h4>
    <img src={rightArrow} className='filter invert w-4 h-4 m-2 ml-24 cursor-pointer'/>
   </div>
   <h5 className=' pl-0 text-lg pt-1 text-blue-gray-300 cursor-pointer '>Happy to help!</h5>
   <p className='text-blue-gray-800 pl-0 cursor-pointer'>_________________________________________</p>
   <div className='flex gap-4 mt-8'>
    <h4 className='text-white font-bold text-xl cursor-pointer' >Send us Feedback</h4>
    <img src={rightArrow} className='filter invert w-4 h-4 m-2 ml-10 cursor-pointer'/>
   </div>
   <h5 className=' pl-0 text-lg pt-1 text-blue-gray-300 cursor-pointer'>We would love to hear your suggestions</h5>
</div>
  )
}

export default Support