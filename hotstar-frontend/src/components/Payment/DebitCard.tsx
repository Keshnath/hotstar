import downArrow from '../../assets/image/payment/downArrow.svg'
import upArrow from "../../assets/image/payment/upArrow.svg";
import { useFormik } from 'formik';
import { useState } from "react";
const DebitCard=()=>{
    const [input, setInput] = useState(" ");
    const [arrow,setArrow]=useState(false)
    const [content,setContent]=useState(true)
   
     
      const initialValues = {
        debitCard: "",
      };
      const { values, handleChange, handleSubmit,handleBlur } = useFormik({
        initialValues: initialValues,
        onSubmit: (values, action) => {
          console.log("value is", values);
          action.resetForm();
        },
      });
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
          <h2 className="font-bold text-xl">Debit/ATM Card</h2>
         {!arrow&& <img src="https://secure-media.hotstarext.com/web-assets/prod/images/card-network-icons/visa_master_rupay_x_page.svg" className='justify-end ml-96 w-20'/>}
          {!arrow &&<img src={downArrow} className="w-5" onClick={downArrowClick} />}
          {arrow &&<img src={upArrow} className="w-5" onClick={upArrowClick} />}
        </div>
    {arrow && content &&<div>
          <form onSubmit={handleSubmit}>
            <div className="relative z-0 mb-6 group border border-gray-300 rounded w-80 mt-2 flex">
            <input
                                    type="text"
                                    name="debitCard"
                                    id="floating_email"
                                    className="block py-2.5 px-4 h-12 text-sm bg-transparent border-0 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    value={values.debitCard}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    
                                    autoComplete="off"
                                />
                                <label
                                    htmlFor="floating_email"
                                    className="peer-focus:font-medium absolute px-3 text-sm text-gray-600 bg-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Entered Card Number
                                </label>
                                <img src="https://secure-media.hotstarext.com/web-assets/prod/images/card-network-icons/visa_master_rupay_x_page.svg" className='justify-end ml-4 w-20 '/>
            </div>
            <button
              type="submit"
              className={`text-white w-80 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none dark:focus:ring-blue-800 ${
                !values.debitCard
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700"
              }`}
              disabled={!values.debitCard}
            >
             Verify and Pay ₹899
            </button>
          </form>
        </div>}
       
</div>
    </>
)
}
export default DebitCard