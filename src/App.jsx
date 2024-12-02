import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Welcome from './Pages/welcome';
import Home from './Pages/Home';
import Pricing from './Pages/Pricing';
import Navbar from './Components/Home/Navbar';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/welcome',
      element: <Welcome />,
    },
    {
      path: '/pricing',
      element: <Pricing />,
    },
  ]);
  
  return (
    <div className='max-w-[1200px] mx-auto'>
    <Navbar/>
    <RouterProvider router={router} />
    </div>
  )
}

export default App