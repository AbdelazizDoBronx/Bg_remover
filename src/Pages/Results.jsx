import React from 'react'

function Results() {
  return (
    <div className='w-full flex flex-col min-h-[550px] p-4 bg-slate-200 shadow-md rounded-md'>
      <div className="imgs flex gap-3 mt-10">
        <div className="originalImg w-1/2 shadow-md">
        <h2 className='mb-2 text-2xl font-semibold uppercase tracking-wide '>Before</h2>
          <img src='image_w_bg.png' />
        </div>
        <div className="withoutBgImg w-1/2 shadow-md">
        <h2 className='mb-2 text-2xl font-semibold uppercase tracking-wide '>After</h2>
          <img src='image_wo_bg.png' />
        </div>
      </div>
      <div className="actionsBtns flex gap-2 justify-end mt-auto my-3">
        <button className='btn btn-outline shadow-md'>Try another image</button>
        <button className='btn btn-neutral shadow-md hover:bg-neutral-800 duration-150 transition-all text-white'>Download image</button>
      </div>
    </div>
  )
}

export default Results