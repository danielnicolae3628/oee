import React from 'react'
import { FaRegWindowClose } from "react-icons/fa";

const AddCarrier = ({visibilityAddCarrier}) => {
  return (
    <>
    <div className=' h-screen bg-red-500 flex  flex-col'>
        <div className='flex flex-row-reverse m-4'>
            <button onClick={visibilityAddCarrier} className=''>
            <FaRegWindowClose />
            </button>
        </div>
        <div className='flex  flex-col'>
        <input type="text" placeholder='add carrier' className='w-50' />
        <button onClick={visibilityAddCarrier}>Add carrier</button>
        </div>
    </div>
    </>
  )
}

export default AddCarrier;

