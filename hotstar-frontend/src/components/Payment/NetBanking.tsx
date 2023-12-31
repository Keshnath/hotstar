import sbi from '../../assets/image/payment/sbi.svg'
import hdfc from '../../assets/image/payment/hdfc.png'
import icici from '../../assets/image/payment/icici.svg'
import axis from '../../assets/image/payment/axis.png'
import idbi from '../../assets/image/payment/idbi.png'
import downArrow from '../../assets/image/payment/downArrow.svg'
import upArrow from "../../assets/image/payment/upArrow.svg";
import { useState } from "react";
const NetBanking = () => {
  const [arrow,setArrow]=useState(false)
  const [content,setContent]=useState(true)
  const downArrowClick=()=>{
    setArrow(true)
    setContent(true)
      }
      const upArrowClick=()=>{
    setArrow(false)
    setContent(false)
      }
  return (
  <>
  <div className="max-w-4xl   p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <div className="flex  justify-between">
          <h2 className="font-bold text-xl">Net Banking</h2>
          {!arrow &&<img src={downArrow} className="w-5" onClick={downArrowClick} />}
          {arrow &&<img src={upArrow} className="w-5" onClick={upArrowClick} />}
        </div>
    <div>
  {arrow && content &&<div className='flex gap-7 mt-4'>
    <img src={sbi}className='w-9' />
    <img src={hdfc}className='w-9' />
    <img src={icici}className='w-9' />
    <img src={axis}className='w-9' />
    <img src={idbi}className='w-9' />
  </div>}
    </div>
</div>
  </>
  )
}

export default NetBanking