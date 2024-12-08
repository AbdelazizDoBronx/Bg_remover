import React from 'react'
import { ArrowDownToLine, ArrowUpFromLine ,X} from 'lucide-react';

const Steps = () => {
  return (
    <div className='my-5'>
        <h2 className='mb-12 mt-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl  font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>Steps to remove background image in seconds</h2>
        <div className="steps flex gap-3">
            <div className="step flex gap-5 px-5 py-7 rounded-lg shadow-lg ">
                <span className='bg-gradient-to-t from-purple-700 to-purple-500 p-3 text-white w-15 h-10 flex items-center justify-center shadow-md  rounded-md'><ArrowUpFromLine /></span>
                <div className="text">
                    <h3 className='font-semibold'>Upload image</h3>
                    <p className='text-neutral-500 text-sm '>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="step flex gap-5 px-5 py-7 rounded-lg shadow-lg ">
                <span className='bg-gradient-to-t from-purple-700 to-purple-500 p-3 text-white w-15 h-10 flex items-center justify-center shadow-md rounded-md'><X /></span>
                <div className="text">
                    <h3 className='font-semibold'>Remove background</h3>
                    <p className='text-neutral-500 text-sm '>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="step flex gap-5 px-5 py-7 rounded-lg shadow-lg ">
                <span className='bg-gradient-to-t from-purple-700 to-purple-500 p-3 text-white w-15 h-10 flex items-center justify-center shadow-md rounded-md'><ArrowDownToLine /></span>
                <div className="text">
                    <h3 className='font-semibold'>Download image</h3>
                    <p className='text-neutral-500 text-sm '>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Steps