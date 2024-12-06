import React from 'react'
import { MoveRight } from 'lucide-react';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const {openSignIn} = useClerk();
  const {isSignedIn,user} = useUser();

  return (
    <div >
    <nav className='flex justify-between items-center shadow-sm p-5'>
      <img  src='/logo.svg' alt='logo'/>
      {
        isSignedIn ? <div><UserButton/></div>
        : <button onClick={()=>openSignIn({})} className='bg-zinc-700 text-white p-2 shadow-lg text-sm font-semibold flex items-center gap-2 rounded-md hover:bg-zinc-900 transition-all duration-200 ease-in-out'>
        Get started
        <MoveRight />
      </button> 
      }
    </nav>
  </div>
  
  )
}

export default Navbar