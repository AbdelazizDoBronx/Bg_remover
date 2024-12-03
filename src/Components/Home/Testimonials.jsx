import React from 'react'

const Testimonials = () => {
  return (
    <div className='my-5'>
        <h2 className='text-2xl text-center mb-5 font-bold'>Customer Testimonials</h2>
        <div className="reviews text-pretty flex flex-wrap gap-5 justify-center">
            <div className="review p-5  shadow-lg rounded-md flex flex-col gap-4 w-full sm:w-80">
                <p className='text-neutral-500'>I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
                <div className="profile flex gap-4 items-center">
                    <img className='w-10 h-10 bg-purple-500 p-1 rounded-full shadow-md' src='https://avatar.iran.liara.run/public/4' alt='img'/>
                    <div className="text">
                        <h2>Richard Nelson</h2>
                        <p>Web Developer</p>
                    </div>
                </div>
            </div>

            {/* New Testimonial 1 */}
            <div className="review p-5 shadow-lg rounded-md flex flex-col gap-4 w-full sm:w-80">
                <p className='text-neutral-500'>bg.removal has completely transformed my workflow. The quality is amazing, and the process is so fast. I can't imagine working without it now.</p>
                <div className="profile flex gap-4 items-center">
                    <img className='w-10 h-10 bg-blue-500 p-1 rounded-full shadow-md' src='https://randomuser.me/api/portraits/men/42.jpg' alt='img'/>
                    <div className="text">
                        <h2>Samuel L. Jackson</h2>
                        <p>Graphic Designer</p>
                    </div>
                </div>
            </div>

            {/* New Testimonial 2 */}
            <div className="review p-5 shadow-lg rounded-md flex flex-col gap-4 w-full sm:w-80">
                <p className='text-neutral-500'>As a photographer, this tool has saved me so much time. I can quickly remove backgrounds and focus on my creative work.</p>
                <div className="profile flex gap-4 items-center">
                    <img className='w-10 h-10 bg-red-500 p-1 rounded-full shadow-md' src='https://randomuser.me/api/portraits/women/54.jpg' alt='img'/>
                    <div className="text">
                        <h2>Laura Scott</h2>
                        <p>Photographer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
