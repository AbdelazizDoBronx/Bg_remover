import React from 'react'
import { Facebook, Youtube, Twitch } from 'lucide-react';

const Footer = () => {
  return (
    <div>
        <footer className='w-full mt-11 bg-gray-900 text-white py-10 rounded-md'>
            <div className='max-w-6xl mx-auto text-center'>
                <img src='/logo.svg' alt='logo' className='mx-auto mb-4 w-10' />
                <p className='text-lg font-light mb-6'>Made with Love</p>
                
                <div className="socialmedia flex justify-center gap-8">
                    <Facebook className='w-6 h-6 hover:text-blue-600 transition-all' />
                    <Youtube className='w-6 h-6 hover:text-red-600 transition-all' />
                    <Twitch className='w-6 h-6 hover:text-purple-600 transition-all' />
                </div>

                <p className='text-sm mt-6 opacity-70'>&copy; 2024 Bg Remover. All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer
